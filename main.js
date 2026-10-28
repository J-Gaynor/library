const myLibrary = [];

function Book(id, title, author) {
    this.id = id
    this.title = title;
    this.author = author;
};

function addBookToLibrary(title, author) {
    // Create ID
    const id = crypto.randomUUID();
    // Create book 
    const book = new Book(id, title, author);
    // Push book to library
    myLibrary.push(book);
}

addBookToLibrary("Diary Of A Wimpy Kid", "Jeff Kinney");
console.log(myLibrary);