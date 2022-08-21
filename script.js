let myLibrary = []


//WHEN THE USER CLICKS LOG IN BUTTON A LOG IN DIALOG SHOULD APPEAR

    const logInBtn = document.getElementById('logInBtn') // the btn where the user clicks (it opens the log in dialog)
    const logInDialog = document.getElementById('logInDialog') //log in popup (dialog tag)
    const closeLogInBtn = document.getElementById('closeLogInBtn') // the btn to close the log in dialog

        //SHOW MODAL

        logInBtn.addEventListener('click',()=>{
        logInDialog.showModal()
        })

        //CLOSE MODAL

        closeLogInBtn.addEventListener('click',()=>{
            logInDialog.close()
        })




//Make the  POPUP  DIALOG APPEAR once the add book btn is clicked

    const addABook = document.getElementById('addBook'); //the btn where the user clicks (it opens the add book dialog)
    const popupEL = document.getElementById('popup'); //popup dialog
    const sendPopUp= document.getElementById('submitPopUp'); //popup dialog btn

    //SHOW MODAL

        addABook.addEventListener('click', ()=>{
            popupEL.showModal()
        });

    //CLOSE MODAL

        sendPopUp.addEventListener('click',()=>{
            popupEL.close()
        });



        
 /*once the popup dialog btn is clicked the info of the dialog will be passed into the NewBook object
 with the display book function. Also, it will go to the addBook method of its prototype (Book.prototype)
 */

        sendPopUp.addEventListener('click',(e)=>{
            e.preventDefault()
            
            displayBook(title.value,author.value,pages.value)
            NewBook.addBook(title.value,author.value,pages.value)
        })




//This function wiil add DIFFERENT STYLING AND ATTRIBUTES TO EACH BOOK DIV IF THE CHECKBOX IS CHECKED OR NOT

    const bookCheckbox = document.getElementById('readCheckbox'); //input type checkbox

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

    };




//The CONSTRUCTOR

    const libraryEl = document.getElementById('library'); //this is where all the book div will be stored 
    let author = document.querySelector('#bookAuthor');
    let title = document.querySelector('#bookTitle');
    let pages = document.querySelector('#bookPages');

    function Book(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    };
    



/*THE ADD BOOK METHOD ADDS A NEW DIV (BOOK) INTO THE LIBRARY SECTION AND THE ARRAY
IT WILL ASLO REMOVE THE BOOK FORM THE MYLIBRARY ARRAY AND THE SECTION TAG
IT WILL ALSO BE ABLE TO TOGGLE
*/

    Book.prototype.addBook = function (){

        //ADD TO THE LIBRARY SECTION

            //ADD THE BOOK DIV
                let bookCard = document.createElement('div');
                bookCard.setAttribute('class','bookCard');

                    //DISPLAYS THE INFO OF THE BOOK
                    let cardTitle = document.createElement('p');
                    cardTitle.textContent = `${this.title} by ${this.author} has ${this.pages} pages.`;
                    bookCard.append(cardTitle);

                    //BUTTON TO SEE IF IT HAS BEEN READ
                    let readOrNotBtn = document.createElement('button');
                    readOrNotBtn.setAttribute("id","readOrNotBtn");
                    bookCard.append(readOrNotBtn);

                    //DELETE THE BUTTON (FOR THE TIME BEING ONLY FROM THE DOM NOT THE ARRAY)
                    let deleteBtn = document.createElement('button');
                    deleteBtn.setAttribute("id","deleteBtn");
                        let deleteImg = document.createElement('img');
                        deleteImg.setAttribute("id","deleteImg");
                        deleteImg.setAttribute("src","./Google Fonts/delete_FILL0_wght400_GRAD0_opsz48.svg");
                    deleteBtn.append(deleteImg);
            
                bookCard.append(deleteBtn);

                //Add div to library section
                libraryEl.append(bookCard);
        


        //ADD TO THE MYLIBRARY ARRAY         
            addBookToLibrary();
                function addBookToLibrary(){
                    myLibrary.push(NewBook);
                    console.log(myLibrary);
                    console.log(myLibrary.indexOf(NewBook));
                    bookCard.id = myLibrary.indexOf(NewBook);
                    title.value= "";
                    author.value = "";
                    pages.value = "";
                };


        
        //the user checks the input type checkbox and the info passed into this    
            readOrNot(bookCard, readOrNotBtn, deleteBtn); 


            
        //DELETE THE NEWBOOK OBJECT WHEN THE DELETE BUTTON IS CLICKED REMOVE BOOK FROM DOM AND ARRAY
                deleteBtn.addEventListener('click', ()=>{
                    bookCard.remove(); 
                    myLibrary.splice(myLibrary.indexOf(NewBook),1);
                    console.log(myLibrary.indexOf(NewBook));
                    console.log(myLibrary)
                });



        /*TOGGLE COLOR AND TEXT CONTENT WHEN THE READ BUTTON IS CLICKED. 
        For that if it has been READ it will have a READ CLASS. ONCE IT IS CLICKED its CLASS will CHANGE to NOTREAD
        EACH CLASS will have DIFFERENT ATTRIBUTES AND STYLES
        */
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



//CREATE A NEW BOOK AND PASS THE INFO OF THE PUPUP TO THE Book construtor

    let NewBook = new Book ()

    function displayBook(titl,auth,pag){ 
        NewBook = new Book (titl, auth, pag)
    }






