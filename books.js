const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    coverImageUrl: String, // Field for storing the URL of the cover image
    bookId: { type: String, unique: true }
});

const Book = mongoose.model('Book', bookSchema);

// Array of books with genres restricted to Fiction, Non-Fiction, Mystery, and Science Fiction
const books = [
    { title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Fiction', description: 'A classic novel about the struggles and triumphs of an orphaned girl, Jane Eyre.', coverImageUrl: '/fiction.jpg',bookId: 'bookfic1.html' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Fiction', description: 'A romantic novel about the manners and morals of early 19th-century English society.', coverImageUrl: '/fic2.jpg',bookId: 'bookfic2.html' },
    { title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Fiction', description: 'A story about friendship and redemption set against the backdrop of Afghanistan’s turbulent history.', coverImageUrl: '/fic3.jpg',bookId: 'bookfic3.html' },
    { title: 'The Book Thief', author: 'Markus Zusak', genre: 'Fiction', description: 'A young girl’s love for books helps her survive the horrors of Nazi Germany.', coverImageUrl: '/fic4.jpg',bookId: 'bookfic4.html' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A novel about the American Dream, wealth, and social stratification in the 1920s.', coverImageUrl: '/fic5.jpg',bookId: 'bookfic5.html' },
    { title: 'The Hate U Give', author: 'Angie Thomas', genre: 'Fiction', description: 'A powerful story about racism and police brutality, seen through the eyes of a young girl.', coverImageUrl: '/fic6.jpg',bookId: 'bookfic6.html' },
    { title: 'Beneath a Scarlet Sky', author: 'Mark Sullivan', genre: 'Fiction', description: 'A true story of a young Italian man’s heroic efforts during World War II.', coverImageUrl: '/fic7.jpg',bookId: 'bookfic7.html' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', description: 'A classic tale of justice and morality in the American South.', coverImageUrl: '/fic8.jpg',bookId: 'bookfic8.html' },
    { title: 'All the Light We Cannot See', author: 'Anthony Doerr', genre: 'Fiction', description: 'A novel about two children navigating the turmoil of World War II.', coverImageUrl: '/fic9.jpg',bookId: 'bookfic9.html' },
    { title: 'A Man Called Ove', author: 'Fredrik Backman', genre: 'Fiction', description: 'A curmudgeonly man’s life changes when new neighbors move in.', coverImageUrl: '/fic10.jpg',bookId: 'bookfic10.html' },
    { title: 'The Nightingale', author: 'Kristin Hannah', genre: 'Fiction', description: 'A story of two sisters during World War II, showcasing their courage and sacrifices.', coverImageUrl: '/fic11.jpg',bookId: 'bookfic11.html' },
    { title: 'The Goldfinch', author: 'Donna Tartt', genre: 'Fiction', description: 'A young boy’s life is forever changed by a tragedy and a priceless painting.', coverImageUrl: '/fic12.jpg',bookId: 'bookfic12.html' },
    { title: 'Atomic Habits', author: 'James Clear', genre: 'Non-Fiction', description: 'An insightful guide to building good habits and breaking bad ones.', coverImageUrl: '/nonfic1.jpg',bookId: 'booknonfic.html'},
    { title: 'The Mountain Is You', author: 'Brianna Wiest', genre: 'Non-Fiction', description: 'A guide to self-sabotage and personal transformation.', coverImageUrl: '/nonfic2.jpg',bookId: 'booknonfic2.html' },
    { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', genre: 'Non-Fiction', description: 'A timeless guide to improving personal and professional effectiveness.', coverImageUrl: '/nonfic3.jpg',bookId: 'booknonfic3.html' },
    { title: 'The Art of Being Alone', author: 'John Doe', genre: 'Non-Fiction', description: 'A reflective guide to embracing solitude and finding peace.', coverImageUrl: '/nonfic4.jpg',bookId: 'booknonfic4.html' },
    { title: 'The Secret', author: 'Rhonda Byrne', genre: 'Non-Fiction', description: 'A self-help book exploring the power of positive thinking.', coverImageUrl: '/nonfic5.jpg',bookId: 'booknonfic5.html' },
    { title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', genre: 'Non-Fiction', description: 'A fable about achieving personal success and happiness.', coverImageUrl: '/nonfic6.jpg',bookId: 'booknonfic6.html' },
    { title: 'Think and Grow Rich', author: 'Napoleon Hill', genre: 'Non-Fiction', description: 'A classic guide to financial success and self-improvement.', coverImageUrl: '/nonfic7.jpg',bookId: 'booknonfic7.html' },
    { title: 'Think Like a Monk', author: 'Jay Shetty', genre: 'Non-Fiction', description: 'A book about applying timeless wisdom to modern living.', coverImageUrl: '/nonfic8.jpg',bookId: 'booknonfic8.html' },
    { title: 'A Brief History of Time', author: 'Stephen Hawking', genre: 'Non-Fiction', description: 'A groundbreaking book on cosmology and the nature of the universe.', coverImageUrl: '/nonfic9.jpg',bookId: 'booknonfic9.html' },
    { title: 'Letters from a Father to His Daughter', author: 'Jawaharlal Nehru', genre: 'Non-Fiction', description: 'A collection of letters discussing history and politics.', coverImageUrl: '/nonfic10.jpg',bookId: 'booknonfic10.html' },
    { title: 'The Psychology of Money', author: 'Morgan Housel', genre: 'Non-Fiction', description: 'Insights into the way people think about money.', coverImageUrl: '/nonfic11.jpg',bookId: 'booknonfic11.html' },
    { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', genre: 'Non-Fiction', description: 'A book about financial literacy and building wealth.', coverImageUrl: '/nonfic12.jpg',bookId: 'booknonfic12.html' },
    { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A science fiction epic set on a desert planet with complex politics, ecology, and religion.', coverImageUrl: '/sfic1.jpg',bookId: 'booksci.html' },
    { title: 'Ender’s Game', author: 'Orson Scott Card', genre: 'Science Fiction', description: 'A novel about a young boy trained to become a military commander in a war against an alien race.', coverImageUrl: '/sfic2.jpg',bookId: 'booksfic2.html' },
    { title: 'The Martian', author: 'Andy Weir', genre: 'Science Fiction', description: 'A survival story of an astronaut stranded on Mars, using ingenuity to survive.', coverImageUrl: '/sfic3.jpg',bookId: 'booksfic3.html' },
    { title: 'Ready Player One', author: 'Ernest Cline', genre: 'Science Fiction', description: 'A futuristic tale about a virtual reality treasure hunt.', coverImageUrl: '/sfic4.jpg',bookId: 'booksfic4.html' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', description: 'A dystopian novel where books are banned and burned by the government.', coverImageUrl: '/sfic5.jpg',bookId: 'booksfic5.html' },
    { title: '1984', author: 'George Orwell', genre: 'Science Fiction', description: 'A dystopian novel about totalitarianism and surveillance.', coverImageUrl: '/sfic6.jpg',bookId: 'booksfic6.html' },
    { title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Science Fiction', description: 'A dystopian novel where children are forced to fight to the death in an annual televised event.', coverImageUrl: '/sfic7.jpg',bookId: 'booksfic7.html' },
    { title: 'Project Hail Mary', author: 'Andy Weir', genre: 'Science Fiction', description: 'A space-faring novel where a lone astronaut must save humanity.', coverImageUrl: '/sfic8.jpg',bookId: 'booksfic8.html' },
    { title: 'The Time Machine', author: 'H.G. Wells', genre: 'Science Fiction', description: 'A classic tale about a journey into the distant future.', coverImageUrl: '/sfic9.jpg',bookId: 'booksfic9.html' },
    { title: 'Dark Matter', author: 'Blake Crouch', genre: 'Science Fiction', description: 'A thriller about a man who is thrust into a parallel universe.', coverImageUrl: '/sfic10.jpg',bookId: 'booksfic10.html' },
    { title: 'Jurassic Park', author: 'Michael Crichton', genre: 'Science Fiction', description: 'A novel about a theme park with genetically engineered dinosaurs.', coverImageUrl: '/sfic11.jpg',bookId: 'booksfic11.html' },
    { title: 'Divergent', author: 'Veronica Roth', genre: 'Science Fiction', description: 'A dystopian novel about a society divided into five factions.', coverImageUrl: '/sfic12.jpg',bookId: 'booksfic12.html' },
    { title: 'The Silent Patient', author: 'Alex Michaelides', genre: 'Mystery', description: 'A psychological thriller about a woman who shoots her husband and then stops speaking.', coverImageUrl: '/mfic1.jpg',bookId: 'bookmystery.html' },
    { title: 'Rebecca', author: 'Daphne du Maurier', genre: 'Mystery', description: 'A haunting tale of a young bride whose life is overshadowed by the memory of her husband’s first wife.', coverImageUrl: '/mfic2.jpg',bookId: 'bookm2.html' },
    { title: 'The Woman in the Window', author: 'A.J. Finn', genre: 'Mystery', description: 'A psychological thriller about an agoraphobic woman who believes she has witnessed a crime.', coverImageUrl: '/mfic3.jpg',bookId: 'bookm3.html' },
    { title: 'The Woman in White', author: 'Wilkie Collins', genre: 'Mystery', description: 'A classic mystery novel about secrets and identity.', coverImageUrl: '/mfic4.jpg',bookId: 'bookm4.html' },
    { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'Mystery', description: 'The adventures of the famous detective Sherlock Holmes.', coverImageUrl: '/mfic5.jpg',bookId: 'bookm5.html' },
    { title: 'My Cousin Rachel', author: 'Daphne du Maurier', genre: 'Mystery', description: 'A tale of love, deception, and intrigue.', coverImageUrl: '/mfic6.jpg',bookId: 'bookm6.html' },
    { title: 'Behind Her Eyes', author: 'Sarah Pinborough', genre: 'Mystery', description: 'A psychological thriller with a shocking twist.', coverImageUrl: '/mfic7.jpg',bookId: 'bookm7.html' },
    { title: 'Rock Paper Scissors', author: 'Alice Feeney', genre: 'Mystery', description: 'A psychological thriller about marriage and secrets.', coverImageUrl: '/mfic8.jpg',bookId: 'bookm8.html' },
    { title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Mystery', description: 'A psychological thriller about a woman who goes missing and the dark secrets her husband hides.', coverImageUrl: '/mfic9.jpg',bookId: 'bookm9.html' },
    { title: 'The Girl on the Train', author: 'Paula Hawkins', genre: 'Mystery', description: 'A psychological thriller about a woman who gets involved in a missing person’s case.', coverImageUrl: '/mfic10.jpg',bookId: 'bookm10.html' },
    { title: 'The Guest List', author: 'Lucy Foley', genre: 'Mystery', description: 'A suspenseful murder mystery set at a wedding on an isolated island.', coverImageUrl: '/mfic11.jpg',bookId: 'bookm11.html' },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Mystery', description: 'A psychological drama about a young man who commits a crime and struggles with guilt.', coverImageUrl: '/mfic12.jpg',bookId: 'bookm12.html' },
];


// Drop the existing collection
Book.collection.drop()
    .then(() => {
        console.log('Books removed successfully!');
    })
    .catch(err => {
        console.error('Error removing books:', err);
    });

// Insert books into the database
Book.insertMany(books)
    .then(() => {
        console.log('Books added successfully!');
    })
    .catch(err => {
        console.error('Error adding books:', err);
    });

module.exports = Book;
