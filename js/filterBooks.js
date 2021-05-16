import { renderBooks } from "./renderBooks.js";
import {displayMessage} from "./displayMessage.js"

export function filterBooks(books){
    
    const search = document.getElementById("search");
 
    search.onkeyup = (event) => {
        const searchValue = event.target.value.toLowerCase().trim();

        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().startsWith(searchValue) || 
            book.author.toLowerCase().startsWith(searchValue)
        );
        
        if(!filteredBooks.length){
            return displayMessage("notfound" , "Nothing found.", "#root");
        }
        renderBooks(filteredBooks);
    };
}