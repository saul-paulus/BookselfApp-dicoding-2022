const input_book = document.getElementById('inputBook');
const search_books = document.getElementById('searchBook');
const title_bar = document.getElementById('title_form');

document.addEventListener('DOMContentLoaded', function() {
    input_book.addEventListener('submit', (event) => {
        event.preventDefault();
        add_book();

    })

    search_books.addEventListener('submit', (event) => {

        event.preventDefault();

        seacrh_book();
    })

    if (is_storage_exist()) {
        load_data_from_storage();
    }

})

const RENDER_BOOK = 'render-book';
const SAVE_EVENT = 'save-books';
const STORAGE_KEY = 'BOOKSELF_APP';
const to_book = [];
const found__book = [];

function generate_id() {
    return +new Date();
}

function generate_book(id, title, author, year, isComplete) {
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

function find_book(book_id) {
    for (const book of to_book) {
        if (book.id === book_id) {
            return book;
        }
    }
    return null;
}

document.addEventListener(RENDER_BOOK, function() {
    const complete_book = document.getElementById('completeBookshelfList');
    const incomplete_book = document.getElementById('incompleteBookshelfList');
    const key_book = document.getElementById('searchBookTitle').value;
    complete_book.innerHTML = '';
    incomplete_book.innerHTML = '';

    if (key_book == '') {
        for (const book of to_book) {
            const card_book = make_card_book(book);
            if (book.isComplete) {
                complete_book.append(card_book);
            } else {
                incomplete_book.append(card_book);
            }
        }
    } else {
        for (const book of found__book) {
            const card_book = make_card_book(book);
            if (book.isComplete) {
                complete_book.append(card_book);
            } else {
                incomplete_book.append(card_book);
            }
        }
    }
})


function handler_complete_to_read(book_id) {

    const book_target = find_book(book_id);

    if (book_target === null) return;

    book_target.isComplete = false;
    document.dispatchEvent(new Event(RENDER_BOOK));
    save_data();
}

function handler_incomplete_to_read(book_id) {
    const book_target = find_book(book_id);

    if (book_target === null) return;

    book_target.isComplete = true;
    document.dispatchEvent(new Event(RENDER_BOOK));
    save_data();
}

function handler_remove_book(book_id) {
    const book_target = find_to_index(book_id);

    if (book_target === -1) return;

    to_book.splice(book_target, 1);
    document.dispatchEvent(new Event(RENDER_BOOK));
    save_data();
}

function find_to_index(book_id) {
    for (const index in to_book) {
        if (to_book[index].id === book_id) {
            return index;
        }
    }

    return -1;
}

function make_card_book({ id, title, author, year, isComplete }) {

    const title_element = document.createElement('h3');
    title_element.innerText = `${title}`;

    const author_element = document.createElement('p');
    author_element.innerText = `Penulis : ${author}`;

    const year_element = document.createElement('p');
    year_element.innerText = `Tahun : ${year}`;

    const btn_green = document.createElement('button');
    btn_green.classList.add('green');

    const btn_red = document.createElement('button');
    btn_red.classList.add('red');
    btn_red.innerHTML = `<i class="uil uil-trash-alt"></i>`;

    btn_red.addEventListener('click', function() {
        const confirm_remove = confirm("Apakah anda akan menghapus buku ini?");
        if (confirm_remove === true) return handler_remove_book(id);
    })

    const div_element = document.createElement('div');
    div_element.classList.add('action');
    div_element.append(btn_green, btn_red);

    const article_element = document.createElement('article');
    article_element.classList.add('book_item');
    article_element.setAttribute('id', `${id}`);

    article_element.append(title_element, author_element, year_element, div_element);

    if (isComplete) {
        btn_green.innerText = "Belum selesai dibaca";

        btn_green.addEventListener('click', function() {
            handler_complete_to_read(id);
        })

    } else {
        btn_green.innerText = "Selesai dibaca";

        btn_green.addEventListener('click', function() {
            handler_incomplete_to_read(id);
        })
    }

    return article_element;
}


function input_form_data() {
    const form_data = {};

    form_data['title'] = document.getElementById('inputBookTitle').value;
    form_data['author'] = document.getElementById('inputBookAuthor').value;
    form_data['year'] = document.getElementById('inputBookYear').value;
    form_data['isComplete'] = document.getElementById('inputBookIsComplete').checked;

    return form_data;
}

function reset_form_data() {
    document.getElementById('inputBookTitle').value = '';
    document.getElementById('inputBookAuthor').value = '';
    document.getElementById('inputBookYear').value = '';
    document.getElementById('inputBookIsComplete').checked = false;
    return;
}



// Handler add book
function add_book() {

    reset_form_search()
    const { title, author, year, isComplete } = input_form_data();
    const id = generate_id();
    const books = generate_book(id, title, author, year, isComplete);
    reset_form_data();

    if (to_book.push(books)) {
        title_bar.innerText = "Buku berhasil disimpan";
        title_bar.classList.add('sukses');
    }

    document.dispatchEvent(new Event(RENDER_BOOK));

    save_data();
}

// Hadler search book
function seacrh_book() {

    const key_book = document.getElementById('searchBookTitle').value.toLowerCase();
    const book = find_title_book(key_book);
    if (book == -1) {
        found__book.splice(0, found__book.length);
    } else {
        found__book.unshift(book);
    }

    document.dispatchEvent(new Event(RENDER_BOOK));

    save_data();
}

function find_title_book(title_book) {

    for (const index in to_book) {
        if (to_book[index].title == title_book) {
            return to_book[index];
        }
    }
    return -1
}

function reset_form_search() {
    document.getElementById('searchBookTitle').value = '';
    return;
}

function save_data() {
    if (is_storage_exist()) {
        const parsed = JSON.stringify(to_book);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVE_EVENT));
    }
}

function is_storage_exist() {
    if (typeof(Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

function load_data_from_storage() {
    const serialize_data = localStorage.getItem(STORAGE_KEY);
    let data_obj = JSON.parse(serialize_data);

    if (data_obj !== null) {
        for (const books of data_obj) {
            to_book.push(books);
        }
    }
    document.dispatchEvent(new Event(RENDER_BOOK));
}