const connectDB = require('./db'); // MongoDB connection
const bcrypt = require('bcryptjs'); // For password hashing
const User = require('./User'); // User model

// Connect to MongoDB
connectDB();

// Express app
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
  const { fullName, username, emailId, password } = req.body;

  if (!fullName || !username || !emailId || !password) {
    return res.status(400).json({ message: 'InsertUser: All fields are required.' });
  }

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { emailId }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ fullName, username, emailId, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


