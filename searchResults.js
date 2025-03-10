window.onload = async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    console.log(`searchResults - query `, query);

    if (!query) {
        document.getElementById('searchResultsContainer').innerHTML = 'No search query provided.';
        return;
    }

    try {
        // Fetch the search results from the backend
        const response = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(query)}`);
        //const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);

        if (response.ok) {
            const data = await response.json();
            const books = data.books;

            if (books.length === 0) {
                document.getElementById('searchResultsContainer').innerHTML = 'No books found.';
            } else {
                // Display the search results
                const resultsHTML = books.map(book => {
                    const bookPageUrl = `/${book.bookId}`; // Use bookId to generate the URL
                    return `
                        <div class="book-item">
                            <a href="${bookPageUrl}">
                                <img src="${book.coverImageUrl}" alt="Cover of ${book.title}" class="book-cover">
                            </a>
                            <div>
                                <a href="${bookPageUrl}">
                                    <h3>${book.title}</h3>
                                </a>
                                <p>${book.author}</p>
                            </div>
                        </div>`;
                }).join('');
                
                document.getElementById('searchResultsContainer').innerHTML = resultsHTML;
            }
        } else {
            document.getElementById('searchResultsContainer').innerHTML = 'Error fetching search results.';
        }
    } catch (error) {
        console.error('Error during search:', error);
        document.getElementById('searchResultsContainer').innerHTML = 'An error occurred. Please try again later.';
    }
};
