const popupEL = document.getElementById('popup')
const sendPopUp= document.getElementById('submitPopUp')
const addABook = document.getElementById('addBook')
const libraryEl = document.getElementById('library')

//MAKE THE POPUP APPEAR
addABook.addEventListener('click', ()=>{
    popupEL.showModal()
})
sendPopUp.addEventListener('click',()=>{
    popupEL.close()
})

//CREATE THE BOOK CONSTRUCTOR AND OBJECT
function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}
Book.prototype.displayBookInfo=function(){
    return `${this.title} by ${this.author} has ${this.pages} pages.`
}
Book.prototype.addBook = function (){
        let bookCard = document.createElement('div');
        let cardTitle = document.createElement('p');
        cardTitle.textContent = `${this.title} by ${this.author} has ${this.pages} pages.`
        bookCard.append(cardTitle)    
        libraryEl.append(bookCard)
    
}


// DISPLAY THE BOOK
//ADD A NEW CONTAINER FOR EACH BOOK INSIDE SECTION #Library
//WHEN SEND IS CLICKED AND THE INPUT VALUE ARE "" IT SHOULDNT WORK
let author = document.querySelector('#bookAuthor');
let title = document.querySelector('#bookTitle');
let pages = document.querySelector('#bookPages');
let NewBook = new Book ()
function displayBook(x,y,z){
    NewBook = new Book (x, y, z)
    console.log(NewBook.displayBookInfo())
}


sendPopUp.addEventListener('click',(e)=>{
    e.preventDefault()
  
    displayBook(title.value,author.value,pages.value)
    NewBook.addBook(title.value,author.value,pages.value)
    title.value = ""
    author.value = ""
    pages.value = ""


})




