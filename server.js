const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // Import the DB connection function
const signupHandler = require('./signup');
const loginHandler = require('./login');
const searchHandler = require('./backendSearchResults');


// MongoDB connection
// Connect to MongoDB
connectDB();

// Express app setup
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', searchHandler);

console.log(`server.js - Before calling signuphandler`);
app.post('/signup', signupHandler);
app.post('/login', loginHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
