
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose');
const User = require('./User'); // Import the User model
//const connectDB = require('./db'); // Import the DB connection function

//const app = express();

// Middleware
//app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
//connectDB();

// Function to insert a new user (unchanged)
async function insertUser(fullName, username, emailId, password) {
  try {
    const newUser = new User({
      fullName,
      username,
      emailId,
      password
    });

    const result = await newUser.save();
    return result;
  } catch (error) {
    throw error;
  }
}

// POST route to create a new user
//app.post('/create-user', async (req, res) => {
const signupHandler = async (req, res) => {
  console.log(req.body);
  const { fullName, username, emailId, password } = req.body;

  // Validate the request body
  if (!fullName || !username || !emailId || !password) {
    return res.status(400).json({ message: 'Full name, Username, email, and password are required' });
  }

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { emailId }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists.' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create a new user
    const newUser = new User({ fullName, username, emailId, password: hashedPassword });

    await insertUser(fullName, username, emailId, hashedPassword);

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
  
  /*try {
    // Call insertUser with the provided data
    const result = await insertUser(username, emailId, password);
    res.status(201).json({ message: 'User created successfully', user: result });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }*/
};

// Start the server
/*app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/

module.exports = signupHandler;