let paragraph = document.getElementById("paragraph");

function Book (title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.checkstatus = function(){
        if (this.readingStatus === true){
            return `Already read ${this.title} by ${this.author}`;
        }else {
            return `You still need to read ${this.title} by ${this.author}`;
        }
    } 
}

let booktitle = prompt("Enter the book title:");
let bookauthor = prompt("Enter the book author:");
let status = confirm("If you have read this book press ok, else cancel");

let newBook = new Book(booktitle, bookauthor, status);
paragraph.innerText = newBook.checkstatus();







   