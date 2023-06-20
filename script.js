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
formContainer.addEventListener("submit", submitBookToLibrary);
cancelFormButton.addEventListener("click", closeFormPopUp);

function Book(index,title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

addBookToLibrary("The Hobbit","J.R.R. Tolkien","295","Not read")
addBookToLibrary("The Last Wish","Andrzej Sapkowski","288","Read")
displayLibrary();

function addBookToLibrary (title,author,pages,read) {
  let bookIndex = myLibrary.length === 0 ? 0 : myLibrary.length;
  let bookToAdd = new Book(bookIndex,title,author,pages,read);
  myLibrary.push(bookToAdd);
}

function displayLibrary () {
  libraryDisplay.innerHTML = "";

  myLibrary.forEach(book => {
    let bookContents = Object.values(book);
    for(let i=0; i<4; i++) {
      let content = document.createElement("div");
      content.innerText = bookContents[i];
      libraryDisplay.appendChild(content);
    }

    let deleteBookButton = document.createElement("button");
    deleteBookButton.classList.add("btn-delete-book");
    deleteBookButton.innerText = "Delete";
    deleteBookButton.id = book.index;
    deleteBookButton.addEventListener("click",deleteBookFromLibrary);
    libraryDisplay.appendChild(deleteBookButton);
  });
}

function openFormPopUp() {
  formContainer.style.display = "block"; 
}

function closeFormPopUp() {
  formContainer.style.display = "none";
}

function submitBookToLibrary(event) {
  event.preventDefault();

  let title = inputBookTitle.value;
  let author = inputBookAuthor.value;
  let pages = inputBookPages.value;
  let read = document.querySelector(".book-read-status:checked").value;

  addBookToLibrary(title,author,pages,read);
  formContainer.reset();
  displayLibrary();

}

function deleteBookFromLibrary(event) {
  const deleteBookButton = event.target;

  myLibrary = myLibrary.filter(book => {
    return +deleteBookButton.id !== book.index;
  });

  displayLibrary();
}