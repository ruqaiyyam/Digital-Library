const bcrypt = require('bcryptjs');

// The string you want to hash (e.g., a password)
const plainTextPassword = 'password123';

// Set the number of salt rounds (higher is more secure but slower)
const saltRounds = 10;

// Hash the password
bcrypt.hash(plainTextPassword, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing the password:', err);
  } else {
    console.log('Hashed Password:', hashedPassword);
  }
});