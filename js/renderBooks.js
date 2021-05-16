export function renderBooks(books){
    const booksContainer = document.getElementById("root");
    booksContainer.innerHTML = "";
    
    books.forEach(book => {
        booksContainer.innerHTML += `
        <div class= "books-container">
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.publisher}</p>
        </div>
        `;    
    });
}