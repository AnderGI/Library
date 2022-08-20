const popupEL = document.getElementById('popup')
const sendPopUp= document.getElementById('submitPopUp')
const addABook = document.getElementById('addBook')
const libraryEl = document.getElementById('library')

//WHEN THE USER CLICKS LOG IN BUTTON A LOG IN DIALOG SHOULD APPEAR
const logInBtn = document.getElementById('logInBtn')
const logInDialog = document.getElementById('logInDialog')
const closeLogInBtn = document.getElementById('closeLogInBtn')
logInBtn.addEventListener('click',()=>{
   logInDialog.showModal()
})
closeLogInBtn.addEventListener('click',()=>{
    logInDialog.close()
})

//SAVE NewBook object in myLIbrary array of objects
let myLibrary = []
function addBookToLibrary(){
    myLibrary.push(NewBook)
    console.log(myLibrary)
}



//MAKE THE POPUP APPEAR
addABook.addEventListener('click', ()=>{
    popupEL.showModal()
})

sendPopUp.addEventListener('click',()=>{
    popupEL.close()
})
//CREATE THE BOOK CONSTRUCTOR AND OBJECT
// DISPLAY THE BOOK
//ADD A NEW CONTAINER FOR EACH BOOK INSIDE SECTION #Library
//WHEN SEND IS CLICKED AND THE INPUT VALUE ARE "" IT SHOULDNT WORK
let author = document.querySelector('#bookAuthor');
let title = document.querySelector('#bookTitle');
let pages = document.querySelector('#bookPages');

//BOOK CONSTRUCTOR AND PROTOTYPES FUNCTION
function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}
Book.prototype.addBook = function (){
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class','bookCard')

        let cardTitle = document.createElement('p');
        cardTitle.textContent = `${this.title} by ${this.author} has ${this.pages} pages.`
        bookCard.append(cardTitle)

        /*let cardButton = document.createElement('p');*/

            let readOrNotBtn = document.createElement('button')
            readOrNotBtn.setAttribute("id","readOrNotBtn")
          /*  cardButton.append(readOrNotBtn)*/
            bookCard.append(readOrNotBtn)

            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute("id","deleteBtn")
                let deleteImg = document.createElement('img')
                deleteImg.setAttribute("id","deleteImg")
                deleteImg.setAttribute("src","./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg")
            deleteBtn.append(deleteImg)
            /*cardButton.append(deleteBtn)*/
    bookCard.append(deleteBtn)
        /*bookCard.append(cardButton) */

        libraryEl.append(bookCard)
    
        addBookToLibrary()
        readOrNot(bookCard, readOrNotBtn, deleteBtn)

    
        //DELETE THE NEWBOOK OBJECT WHEN THE DELETE BUTTON IS CLICKED
        deleteBtn.addEventListener('click', ()=>{
            bookCard.remove() 
            
        })

        //TOGGLE COLOR AND TEXT CONTENT WHEN THE READ BUTTON IS CLICKED

        readOrNotBtn.addEventListener('click',()=>{
            readOrNotBtn.classList.toggle('read')
            readOrNotBtn.classList.toggle('notRead')
        })

}


//CREATE A NEW BOOK AND PASS THE INFO OF THE PUPUP TO THE Book construtor
let NewBook = new Book ()
function displayBook(x,y,z){
    NewBook = new Book (x, y, z)
}


sendPopUp.addEventListener('click',(e)=>{
    e.preventDefault()
    
    displayBook(title.value,author.value,pages.value)
    NewBook.addBook(title.value,author.value,pages.value)
})


//EDIT EVERY NewBook taking into account if it is read or not
const bookCheckbox = document.getElementById('readCheckbox')


function readOrNot(item, ReadBtn, DeleteBtn){
   
    if(bookCheckbox.checked === true){
        item.style.cssText = `
        border: 3px solid var(--header);
        box-shadow:0px 2px 2px 2px lightcoral;
        `
        ReadBtn.style.cssText =`
        background-color: green;
        border:green;
        `
        DeleteBtn.style.cssText=`
        background-color: var(--header);
        `
        
        ReadBtn.innerText = 'You have READ IT'


    } else{
        item.style.cssText = `
        border: 3px solid var(--header);
        box-shadow:0px 2px 2px 2px lightcoral;
        `
        ReadBtn.style.cssText =`
        background-color: red;
        border:red;
        `
        DeleteBtn.style.cssText=`
        background-color: var(--header);
        `
        
        ReadBtn.innerText = 'You have NOT READ IT'
    }

}




