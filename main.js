let inputJanre = document.querySelector('.input-janre');
let inputName = document.querySelector('.input-name');
let inputAuthor = document.querySelector('.input-author');
let select = document.querySelector('.select-janre'); 

let library = []; 

let arrJanre = [];

document.querySelector('.add-janre-button').onclick = addJanre;

function addJanre() {
    console.log(arrJanre);
    let inputJanreValueNoTrim = inputJanre.value;
    let inputJanreValue = inputJanreValueNoTrim.trim();
        if (exictBookShelf(arrJanre, inputJanreValue) == true) {
            return false;
        }
        else {
            let option = document.createElement('option');
            option.classList.add('optionBook')
            option.textContent = inputJanreValue;
            select.appendChild(option);

            let bookShelf = document.createElement('div');
            bookShelf.classList.add('bookShelf');
            bookShelf.setAttribute('id', inputJanreValue);

            let text = document.createElement('h2');
            let tableBooks = document.querySelector('.books-table');
            text.textContent = inputJanreValue;
            bookShelf.appendChild(text);
            tableBooks.appendChild(bookShelf);
            arrJanre.push(inputJanreValue);
            console.log(arrJanre);
        }
    }

    

function addBook() {
    let bookName = inputName.value;
    let bookAuthor = inputAuthor.value;
    let bookJanre = select.value;
    
    let bookNameTrim = bookName.trim();
    let bookbookAuthorTrim = bookAuthor.trim();

    if (bookNameTrim == '' || bookbookAuthorTrim == '') {
        alert('The field cannot be empty');
    }
    else {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('bookBlock');
        bookDiv.textContent = bookName + ' --- ' + bookAuthor;
        let booksShelfElement = document.querySelector('#' + bookJanre);
        booksShelfElement.appendChild(bookDiv);
    }
}

function deleteBook() {
    let bookJanre = select.value;

    let booksShelfElement = document.querySelector('#' + bookJanre);
    let selectBookDelete = document.querySelector('.optionBook');

    booksShelfElement.remove();
    selectBookDelete.remove();
        
}

document.querySelector('.add-button').onclick = addBook;
document.querySelector('.delete-button').onclick = deleteBook;


function exictBookShelf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
    }
}
