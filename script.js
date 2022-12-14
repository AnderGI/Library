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


        //Read status if is checked display a different style
        let checkbox = document.getElementById('readCheckbox')
        if(checkbox.checked === true){
            bookCard.style.cssText = `
            border: 3px solid var(--header);
            box-shadow:0px 2px 2px 2px lightcoral;
            `
            readOrNotBtn.style.cssText =`
            background-color: green;
            border:green;
            `
            readOrNotBtn.setAttribute('class', 'read')
            deleteBtn.style.cssText=`
            background-color: var(--header);
            `
            
            readOrNotBtn.innerText = 'You have READ IT'


        } else{
            bookCard.style.cssText = `
            border: 3px solid var(--header);
            box-shadow:0px 2px 2px 2px lightcoral;
            `
            readOrNotBtn.style.cssText =`
            background-color: red;
            border:red;
            `
            readOrNotBtn.setAttribute('class', 'notRead')
            deleteBtn.style.cssText=`
            background-color: var(--header);
            `
            
            readOrNotBtn.innerText = 'You have NOT READ IT'
        }
    

        //Toggle between read status

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
            });
        

}

            
}

let book = new Library()

document.querySelector('#submitPopUp').addEventListener('click',()=>{
    
    //FORM VALIDATION AVOID EMPTY BOOKS
//ADD BOOK FORM THE OTHER ONE IS JUST FOR STYLING PURPOSES
const addBookForm = document.getElementById("addBookForm");


    //function check author and title
    //author should not have any number

    function authorChecker(a){
        /**From Stack Overflow
         *Mandatory single name + optional additional names + spaces + special characters:
        */
        const validAuthor = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
        if(validAuthor.test(a.value)){
            return true
        }else{
            return false
        }
    }
    function titleChecker(t){
        //Same as the author regex but it matches also numbers
        const validTitle = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z0-9])+))*$/g
        if(validTitle.test(t.value)){
            return true
        }else{
            return false
        }
    }


addBookForm.addEventListener('submit', (e)=>{
    if(author.value === "" && pages.value==="" && title.value ===""){
        alert('Please fill in the respecting areas(title, author and pages)')
        e.preventDefault()
    }else{
        if(authorChecker(author) && titleChecker(title)){
            book = new Library(title.value, author.value, pages.value)
            book.addInfo()
            book.addBookToLibrary(book)
            book.addBook() 
        }else{
            if(!authorChecker(author)){
                alert(`Fill the author area correctly: 
                    -Spaces and special characthers are accepted
                    -Numbers are not accepted
                    -First word should be upper cased
                    -Weird full of symbol names are NOT accepted ;)`)
            }
            if(!titleChecker(title)){
                alert(`Fill the author area correctly: 
                -Spaces, numbers and special characthers are accepted
                -It must not end with an empty space`)
            }
        }
    }
})   
})

//SHow and close the log in modal
    //show log in modal
    document.getElementById('logInBtn').addEventListener('click',()=>{
        document.getElementById('logInDialog').showModal()
    })

    //close modal
    document.getElementById('closeLogInBtn').addEventListener('click',()=>{
        document.getElementById('logInDialog').close()
    })

