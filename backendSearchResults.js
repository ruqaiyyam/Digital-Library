const express = require('express');
const connectDB = require('./db'); // MongoDB connection
const Book = require('./books'); // Import the Book model

connectDB();

const router = express.Router();

// Define the /search route
router.get('/search', async (req, res) => {
    console.log(`searchResults - inside get`);
    const query = req.query.query; // Get the search query from the URL parameter

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is missing' });
    }

    try {
        function escapeRegExp(string) {
            return string.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'); // Escape special characters
        }
        
        const sanitizedQuery = escapeRegExp(query);

        
        const books = await Book.find({
            $or: [
                
                { title: { $regex: sanitizedQuery, $options: 'i' } }, // Case-insensitive search for title
                { author: { $regex: sanitizedQuery, $options: 'i' } } // Case-insensitive search for author
            ]
        });

        res.json({books}); // Return the found books
    } catch (err) {
        console.error('Error searching books:', err);
        res.status(500).json({ message: 'Error searching for books', error: err });
    }
});

module.exports = router;
