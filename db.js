const mongoose = require('mongoose');

// MongoDB connection string
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
const options = {
    socketTimeoutMS: 45000,          // 45 seconds for socket timeout
    connectTimeoutMS: 30000,
    serverSelectionTimeoutMS: 50000, // Timeout set to 50 seconds
  };

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`DB.js - Connected to MongoDB`);
    } catch (error) {
        console.error(`Error connecting to MongoDB`, error);
        process.exit(1);
    }
};

module.exports = connectDB;
