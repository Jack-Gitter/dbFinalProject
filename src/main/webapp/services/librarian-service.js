const FIND_ALL_LIBRARIANS = "http://localhost:8080/findAlllibrarians"
const FIND_LIBRARIAN_BY_ID = "http://localhost:8080/findlibrarianById"
const CREATE_LIBRARIAN_URL = "http://localhost:8080/createlibrarian"
const DELETE_LIBRARIAN_URL = "http://localhost:8080/deletelibrarian"
const RENAME_LIBRARIAN_URL = "http://localhost:8080/updatelibrarian"

const findAllLibrarians = () =>
  fetch(`${FIND_ALL_LIBRARIANS}`)
    .then(response => response.json())

const findLibrarianById = (id) =>
  fetch(`${FIND_LIBRARIAN_BY_ID}/${id}`)
    .then(response => response.json())

const createLibrarian = () =>
  fetch(`${CREATE_LIBRARIAN_URL}`)
    .then(response => response.json())

const deleteLibrarian = (id) =>
  fetch(`${DELETE_LIBRARIAN_URL}/${id}`)

const renameLibrarian = (name) =>
    fetch(`${RENAME_LIBRARIAN_URL}/${name}`)
        .then(response => response.json())