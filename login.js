const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./User'); // Adjust the path to your User model
require('dotenv').config();

// Access environment variables
const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const jwtSecret = process.env.JWT_SECRET;

console.log(`Server is running on port ${port}`);
console.log(`Connecting to database at ${dbHost}`);
console.log(`JWT Secret: ${jwtSecret}`);


const loginHandler = async (req, res) => {
    const { emailId, password } = req.body;

    // Step 1: Validate input
    if (!emailId || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Step 2: Fetch the user from the database
        const user = await User.findOne({ emailId });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Step 3: Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Step 4: Respond with success
        const token = jwt.sign(
            { userId: user._id, emailId: user.emailId }, // Payload, usually user info
            process.env.JWT_SECRET, // Secret key from environment variables
            { expiresIn: '1h' } // Token expiration time (optional)
        );

        // Step 5: Respond with success, token, and full name
        res.status(200).json({
            message: 'Login successful.',
            token: token,         // Send the token
            fullName: user.fullName  // Send the user's full name
        });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = loginHandler;
