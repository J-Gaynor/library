# 📚 Library App

> A project from [The Odin Project's JavaScript Course](https://www.theodinproject.com/lessons/node-path-javascript-library) exploring Object Constructors, Prototypes, and DOM manipulation.

---

## About

This project is a virtual bookshelf application that allows users to manage a personal reading list. It serves as a hands-on exploration of JavaScript object-oriented programming concepts—specifically constructor functions, prototypes, and dynamic DOM rendering—paired with interactive CSS Grid styling designed to look and feel like an actual physical bookshelf.

---

## What I Did

* **Object Constructors & Data Modeling**: Created a `Book` constructor function with properties for `id`, `title`, `author`, `pages`, `read`, and `colour`. Integrated `crypto.randomUUID()` to ensure unique identifiers for reliable lookup and deletion.
* **Bookshelf UI**:
  * Designed a bookshelf using CSS Grid where books are arranged upright side-by-side like real books on a shelf.
* **Interactive Book Spines**:
  * Hovering over a book expands it into a readable card (`writing-mode: horizontal-tb` with a subtle scale transform), revealing full book details (author, page count, and read status).
* **Dynamic DOM Management**:
  * Built a `displayBooks()` renderer using `bookshelf.replaceChildren()` to cleanly refresh the shelf when books are added or deleted.
  * Handled dynamic event listeners created per book card using closures to easily identify which book to remove from `myLibrary`.
* **Add Book Form**:
  * Created a toggleable form to input new book details (Title, Author, Pages, Read status) and seamlessly add them to the library array.

---

## Reflections & Learnings

* **DOM Scoping & Event Listeners**:
  * Early on, creating a single global remove button caused unexpected behavior where multiple event listeners stacked up, causing all books to be removed at once. 
  * I learned the importance of instantiating distinct elements within the render loop and scoping event listeners locally with closures or using event delegation.
* **Script Loading & DOM Timing**:
  * Encountered `null` references when querying DOM elements before the page finished loading. Adding `defer` to the script tag ensured the DOM was fully parsed before JavaScript executed.
* **CSS Layout & Writing Modes**:
  * Experimenting with `writing-mode: sideways-lr` and switching to `horizontal-tb` on `:hover` made the bookshelf feel tactile and visually unique compared to standard card layouts.
  * Learned how CSS Grid column definitions (`1fr` vs. `max-content`) drastically impact element spacing.
* **Future Improvements**:
  * Add a toggle button on each card to switch a book's `read` status directly without reopening a form.
  * Implement `localStorage` so the user's library persists across browser refreshes.

---

## 📖 About

This project is a virtual bookshelf application that allows users to manage a personal reading list. It serves as a hands-on exploration of JavaScript object-oriented programming concepts—specifically constructor functions, prototypes, and dynamic DOM rendering—paired with interactive CSS Grid styling designed to look and feel like an actual physical bookshelf.

---

## 🛠️ What I Did

* **Object Constructors & Data Modeling**: Created a `Book` constructor function with properties for `id`, `title`, `author`, `pages`, `read`, and `colour`. Integrated `crypto.randomUUID()` to ensure unique identifiers for reliable lookup and deletion.
* **Realistic Bookshelf UI**:
  * Designed a bookshelf using CSS Grid where books are arranged upright side-by-side like real books on a shelf.
  * Used CSS `writing-mode: sideways-lr` to display book titles along their spines.
  * Generated randomized book spine colors dynamically using hexadecimal generator logic.
* **Interactive Book Spines**:
  * Hovering over a book expands it into a readable card (`writing-mode: horizontal-tb` with a subtle scale transform), revealing full book details (author, page count, and read status).
* **Dynamic DOM Management**:
  * Built a `displayBooks()` renderer using `bookshelf.replaceChildren()` to cleanly refresh the shelf when books are added or deleted.
  * Handled dynamic event listeners created per book card using closures to easily identify which book to remove from `myLibrary`.
* **Add Book Form**:
  * Created a toggleable form to input new book details (Title, Author, Pages, Read status) and seamlessly add them to the library array.

---

## 💡 Reflections & Learnings

* **DOM Scoping & Event Listeners**:
  * Early on, creating a single global remove button caused unexpected behavior where multiple event listeners stacked up, causing all books to be removed at once. 
  * I learned the importance of instantiating distinct elements within the render loop and scoping event listeners locally with closures or using event delegation.
* **Script Loading & DOM Timing**:
  * Encountered `null` references when querying DOM elements before the page finished loading. Adding `defer` to the script tag ensured the DOM was fully parsed before JavaScript executed.
* **CSS Layout & Writing Modes**:
  * Experimenting with `writing-mode: sideways-lr` and switching to `horizontal-tb` on `:hover` made the bookshelf feel tactile and visually unique compared to standard card layouts.
  * Learned how CSS Grid column definitions (`1fr` vs. `max-content`) drastically impact element spacing.
* **Future Improvements**:
  * Add a toggle button on each card to switch a book's `read` status directly without reopening a form.
  * Implement `localStorage` so the user's library persists across browser refreshes.

