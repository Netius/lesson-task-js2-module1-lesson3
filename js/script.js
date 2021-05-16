import {renderBooks} from "./renderBooks.js"
import {filterBooks} from "./filterBooks.js"
import {displayMessage} from "./displayMessage.js"


const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/books"

async function getApi(){
    try {
        const response = await fetch(url);        
        const json = await response.json();

        const books = json.data;
        renderBooks(books);
        filterBooks(books);

    } catch (error) {
        displayMessage("error" , error, "#root");
    }
}

getApi();