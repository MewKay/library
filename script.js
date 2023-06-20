let myLibrary = [];
const libraryDisplay = document.querySelector("#books-display"); 
const formContainer = document.querySelector(".form-container");
const newBookButton = document.querySelector(".btn-add-book");
const submitBookButton = document.querySelector(".btn-submit-book")
const cancelFormButton = document.querySelector(".btn-cancel-form");
const inputBookTitle = document.querySelector("#book-title");
const inputBookAuthor = document.querySelector("#book-author");
const inputBookPages = document.querySelector("#book-pages");
 
newBookButton.addEventListener("click", openFormPopUp);
submitBookButton.addEventListener("click", submitBookToLibrary);
cancelFormButton.addEventListener("click", closeFormPopUp);

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBookToLibrary("The Hobbit","J.R.R. Tolkien","295","Not read")
addBookToLibrary("The Last Wish","Andrzej Sapkowski","288","Read")
displayLibrary();

function addBookToLibrary (title,author,pages,read) {
  let bookToAdd = new Book(title,author,pages,read);
  myLibrary.push(bookToAdd);
}

function displayLibrary () {
  libraryDisplay.innerText = "";
  myLibrary.forEach(book => {
    let bookContents = Object.values(book);
    for(let i=0; i<4; i++) {
      let content = document.createElement("div");
      content.innerText = bookContents[i];
      libraryDisplay.appendChild(content);
    }
  });
}

function openFormPopUp() {
  formContainer.style.display = "block"; 
}

function closeFormPopUp() {
  formContainer.style.display = "none";
}

function submitBookToLibrary(event) {
  let title = inputBookTitle.value;
  let author = inputBookAuthor.value;
  let pages = inputBookPages.value;
  let read = document.querySelector(".book-read-status:checked").value;

  addBookToLibrary(title,author,pages,read);
  formContainer.reset();
  displayLibrary();

  event.preventDefault();
}