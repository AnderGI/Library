const popupEL = document.getElementById('popup')
const sendPopUp= document.getElementById('submitPopUp')
const addABook = document.getElementById('addBook')

//MAKE THE POPUP APPEAR
addABook.addEventListener('click', ()=>{
    popupEL.showModal()
})
sendPopUp.addEventListener('click',()=>{
    popupEL.close()
})

//CREATE THE BOOK CONSTRUCTOR AND OBJECT
function Book(title,author,page){
    this.title=title;
    this.author=author;
    this.page=page;
}
Book.prototype.displayBookInfo=function(){
    return `${this.title} by ${this.author} has ${this.page} pages.`
}


// DISPLAY THE BOOK
let author = document.querySelector('#bookAuthor');
let title = document.querySelector('#bookTitle');
let pages = document.querySelector('#bookPages');
function displayBook(x,y,z){
    let NewBook = new Book (x, y, z)
    console.log(NewBook.displayBookInfo())
}


sendPopUp.addEventListener('click',(e)=>{
    e.preventDefault()
    displayBook(title.value,author.value,pages.value)
})