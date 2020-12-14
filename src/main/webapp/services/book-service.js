const FIND_ALL_BOOKS  = "http://localhost:8080/findAllBooks"
const FIND_BOOK_BY_ID = "http://localhost:8080/findBookById"
const CREATE_BOOK_URL = "http://localhost:8080/createBook"
const DELETE_BOOK_URL = "http://localhost:8080/deleteBook"
const UPDATE_BOOK     = "http://localhost:8080/updateBook"

const findAllBooks = () =>
  fetch(`${FIND_ALL_BOOKS}`)
    .then(response => response.json())

const findBookById = (bookId) =>
  fetch(`${FIND_BOOK_BY_ID}/${bookId}`)
    .then(response => response.json())

const createBook = (book) =>
  fetch(`${CREATE_BOOK_URL}`)
    .then(response => response.json())

const deleteBook = (bookId) =>
  fetch(`${DELETE_BOOK_URL}/${bookId}`)

const updateBook = (book) =>
  fetch(`${UPDATE_BOOK}/${book.bookId}/${book.title}`)
    .then(response => response.json())
