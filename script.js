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



//MAKE THE POPUP APPEAR
addABook.addEventListener('click', ()=>{
    popupEL.showModal()
})
sendPopUp.addEventListener('click',()=>{
    popupEL.close()
})



//CREATE THE BOOK CONSTRUCTOR AND OBJECT

let author = document.querySelector('#bookAuthor');
let title = document.querySelector('#bookTitle');
let pages = document.querySelector('#bookPages');


function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}
Book.prototype.addBook = function (){
        //ADD THE BOOK DIV
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class','bookCard')
            //DISPLAYS THE INFO OF THE BOOK
            let cardTitle = document.createElement('p');
            cardTitle.textContent = `${this.title} by ${this.author} has ${this.pages} pages.`
            bookCard.append(cardTitle)

            //BUTTON TO SEE IF IT HAS BEEN READ
            let readOrNotBtn = document.createElement('button')
            readOrNotBtn.setAttribute("id","readOrNotBtn")
            bookCard.append(readOrNotBtn)

            //DELETE THE BUTTON (FOR THE TIME BEING ONLY FROM THE DOM NOT THE ARRAY)
            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute("id","deleteBtn")
                let deleteImg = document.createElement('img')
                deleteImg.setAttribute("id","deleteImg")
                deleteImg.setAttribute("src","./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg")
            deleteBtn.append(deleteImg)
    
         bookCard.append(deleteBtn)

        libraryEl.append(bookCard)
    
        addBookToLibrary()
        readOrNot(bookCard, readOrNotBtn, deleteBtn)

    
        //DELETE THE NEWBOOK OBJECT WHEN THE DELETE BUTTON IS CLICKED
        deleteBtn.addEventListener('click', removeBook)

        //TOGGLE COLOR AND TEXT CONTENT WHEN THE READ BUTTON IS CLICKED

        readOrNotBtn.addEventListener('click',()=>{
            if(readOrNotBtn.getAttribute('class')==='notRead'){
                console.log('red btn clicked')
                readOrNotBtn.innerText = 'You have READ IT'
                readOrNotBtn.style.cssText =`
                background-color: green;
                border:green;
                `
                readOrNotBtn.className = 'read'
            } else if(readOrNotBtn.getAttribute('class')==='read'){
                console.log('green btn clicked')
                readOrNotBtn.innerText = 'You have NOT READ IT'
                readOrNotBtn.style.cssText =`
                background-color: red;
                border:red;
                `
                readOrNotBtn.className = 'notRead'
            }
        })

        //REMOVE BOOK FROM DOM AND ARRAY
function removeBook(){
    bookCard.remove() 
    console.log(bookCard.getAttribute('id'))
    myLibrary.splice(bookCard.getAttribute('id'),1)
    console.log(myLibrary)
}

//ADD

function addBookToLibrary(){
    myLibrary.push(NewBook)
    console.log(myLibrary)
    console.log(myLibrary.indexOf(NewBook))
    bookCard.setAttribute("id",`${myLibrary.indexOf(NewBook)}`)
    title.value= ""
    author.value = ""
    pages.value = ""
}
}
//SAVE NewBook object in myLIbrary array of objects
let myLibrary = []
let i = 0 //index for each book 


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

//THE FUNCTION DISPLAYS DIFFERENT COLORS IF THE CHECKBOX HAS BEEN CHECKED OR NO
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
        ReadBtn.setAttribute('class', 'read')
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
        ReadBtn.setAttribute('class', 'notRead')
        DeleteBtn.style.cssText=`
        background-color: var(--header);
        `
        
        ReadBtn.innerText = 'You have NOT READ IT'
    }

}




