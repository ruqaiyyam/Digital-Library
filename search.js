// Handle the search form submission
async function handleSearch(event) {
    console.log(`In search.js - start`);
    event.preventDefault(); // Prevent the default form submission

    const query = document.getElementById('searchInput').value.trim();

    if (!query) {
        alert("Please enter a search query.");
        return;
    }

    try {
        console.log(`In search.js`);
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        console.log(`In search.js - after response`);

        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = ''; // Clear previous results

        if (response.ok) {
            const books = await response.json();

            if (books.length === 0) {
                searchResults.innerHTML = 'No books found.';
            } else {
                books.forEach(book => {
                    const bookItem = document.createElement('div');
                    bookItem.className = 'book-item';
                    bookItem.innerHTML = `
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <p>${book.description}</p>
                    `;

                    searchResults.appendChild(bookItem);
                });
            }
        } else {
            searchResults.innerHTML = 'Error fetching search results.';
        }
    } catch (error) {
        console.error('Error during search:', error);
        document.getElementById('search-results').innerHTML = 'An error occurred. Please try again later.';
    }

    // Redirect to the search results page with the query as a URL parameter
    window.location.href = `searchResults.html?query=${encodeURIComponent(query)}`;
}
