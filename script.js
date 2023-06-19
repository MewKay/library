let myLibrary = [];
const libraryDisplay = document.querySelector(".library-display");

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
  myLibrary.forEach(book => {
    let bookContents = Object.values(book);
    for(let i=0; i<4; i++) {
      let content = document.createElement("div");
      content.innerText = bookContents[i];
      libraryDisplay.appendChild(content);
    }
  });
}
