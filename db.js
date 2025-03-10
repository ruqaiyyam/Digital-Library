const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://ruqaiyyamahreen:2Shaguftha@cluster0.q3cvh.mongodb.net/LoginSystem?retryWrites=true&w=majority&appName=Cluster0';
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
