let myLibrary = []
let title = document.querySelector('#bookTitle');
let author = document.querySelector('#bookAuthor');
let pages = document.querySelector('#bookPages');
let addBookBtn = document.querySelector('#submitPopUp');

const addToLibrary = document.getElementById('addBook'); //the btn where the user clicks (it opens the add book dialog)
const popupEL = document.getElementById('popup'); //popup dialog


//Show modal

    addToLibrary.addEventListener('click', ()=>{
        popupEL.showModal()
        title.value = ""
        author.value = ""
        pages.value = ""
    });

//Close modal

    addBookBtn.addEventListener('click',()=>{
        popupEL.close()
    });



class Library{


    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    };

    //Add the values of the inputs to the instanciated object
    addInfo(){
            this.title = title.value
            this.author = author.value
            this.pages = pages.value
            console.log(`${this.title} by ${this.author} has ${this.pages}`)
    };

    //Add book to the myLIbrary Array
    addBookToLibrary(book){
        myLibrary.push(book);
        console.log(myLibrary);
        //bookCard.id = this.title.value
        //title.value= "";
        //author.value = "";
        //pages.value = "";
    };

       //ADD TO THE DOM
       addBook(){

        //ADD THE BOOK DIV
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class','bookCard');
        bookCard.setAttribute('id',this.title)

            //DISPLAYS THE INFO OF THE BOOK
            let cardTitle = document.createElement('p');
            cardTitle.textContent = `${this.title} by ${this.author} has ${this.pages} pages.`;
            bookCard.append(cardTitle);

            //Read status button
            let readOrNotBtn = document.createElement('button');
            readOrNotBtn.setAttribute("id","readOrNotBtn");
            bookCard.append(readOrNotBtn);

           //Delete button
            let deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('id', 'deleteBtn')
            deleteBtn.textContent = 'Remove'
            bookCard.append(deleteBtn)

            
        //DELETE THE NEWBOOK OBJECT WHEN THE DELETE BUTTON IS CLICKED REMOVE BOOK FROM DOM AND ARRAY
        deleteBtn.addEventListener('click', ()=>{
            bookCard.remove();
            myLibrary.splice((myLibrary.findIndex(object=>{
                return object.title === bookCard.id
            })),1);
            console.log(myLibrary)
        });

        //Add div to library section
        const libraryEl = document.querySelector('#library')
        libraryEl.append(bookCard);
}

        //CHECKBOX
        readStatus(){
            if(checkbox.checked===true){
                console.log('you have read ' + this.title )
            }
        }
}

let checkbox = document.getElementById('readCheckbox')






let book = new Library()

document.querySelector('#submitPopUp').addEventListener('click',()=>{
    book = new Library(title.value, author.value, pages.value)
    book.addInfo()
    book.addBookToLibrary(book)
    book.addBook()
    book.readStatus()
    
})



