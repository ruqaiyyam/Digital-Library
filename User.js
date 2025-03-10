const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the User schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    //unique: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  signup_date: {
    type: Date,
    default: Date.now,
  }
});

// Hash password before saving
//userSchema.pre('save', async function(next) {
  //if (this.isModified('password')) {
    //this.password = await bcrypt.hash(this.password, 10); // Hash password with salt rounds
  //}
  //next();
//});

// Compare password method (used for login)
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password); // Compare plain text password with hashed password
};

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
