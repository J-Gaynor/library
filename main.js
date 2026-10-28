const myLibrary = [];
const bookshelf = document.getElementById("bookshelf");
const newBookForm = document.getElementById("newBookForm");
const newBookBtn = document.getElementById("newBookBtn");
const addBtn = document.getElementById("addBtn");

function Book(id, title, author, pages, read, colour) {
    this.id = id
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.colour = colour
};

function addBookToLibrary(title, author, pages, read) {
    // Create ID
    const id = crypto.randomUUID();
    // Book colour
    const colour = getRandomColor();
    // Create book 
    const book = new Book(id, title, author, pages, read, colour);
    // Push book to library
    myLibrary.push(book);
}

function displayBooks() {
    bookshelf.replaceChildren();
    // Iterate over myLibrary
    for (let book of myLibrary) {
        // Create book element
        const bookCover = document.createElement("div");
        bookCover.classList.add("book");
        const title = document.createElement("h2");
        const author = document.createElement("h4");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        title.textContent = book.title;
        title.classList.add("bookTitle");
        author.textContent = book.author;
        author.classList.add("bookAuthor");
        pages.textContent = book.pages;
        pages.classList.add("bookPages");
        read.textContent = book.read;
        read.classList.add("bookRead");

        const removeBtn = document.createElement("button");

        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "-";

        removeBtn.addEventListener("click", () => {
            removeBook(book.id)
        })

        bookCover.appendChild(author);
        bookCover.appendChild(title);
        bookCover.appendChild(pages);
        bookCover.appendChild(read);
        bookCover.style = `background-color: ${book.colour}`
        bookCover.setAttribute("value", book.id)
        bookCover.appendChild(removeBtn);
        bookshelf.appendChild(bookCover);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

newBookBtn.addEventListener("click", toggleNewBookForm);
addBtn.addEventListener("click", onSubmit);

function toggleNewBookForm() {
    if (!newBookForm.classList.contains("hidden")) {
        newBookBtn.textContent = "Add Book";
    } else {
        newBookBtn.textContent = "Hide";
    }
    newBookForm.classList.toggle("hidden");
}

function onSubmit(e) {
    e.preventDefault();
    const title = e.target.form.title.value;
    const author = e.target.form.author.value;
    const pages = e.target.form.pages.value;
    const read = e.target.form.read.value;
    if (title.length > 0 && author.length > 0 && pages > 0) {
        addBookToLibrary(title, author, pages, read);
        displayBooks();
    }
}

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
    }
}

addBookToLibrary("Diary Of A Wimpy Kid", "Jeff Kinney", "216 pages", "Read");
addBookToLibrary("Death Note: The Los Angeles BB Murder Cases", "Tsugumi Ohba", "260 pages", "Not read");
addBookToLibrary("Atomic Habits", "James Clear", "161 pages", "Read");

displayBooks();