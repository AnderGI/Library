//Array to store the books
// For the boks user prompt
//OBJECT for author title pages info
const newBookEl = document.getElementById('newBookBtn')
const bookDisplayEl = document.getElementById('bookDisplay')
const inputEl = document.getElementById('bookInput')
let myLibrary = []

newBookEl.addEventListener('click', addBookToLibrary)


function addBookToLibrary(){
    myLibrary.push(inputEl.value)
    displayBooks()
    
}

function displayBooks(){
    bookDisplayEl.innerHTML += 
    `<p>${myLibrary[myLibrary.length-1]}</p>`
}

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
Book.prototype.displayBookInfo = function(){
    return `
    ${this.title} by ${this.author} has ${this.pages} pages and I ${this.read}
    `
}