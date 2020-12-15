const FIND_ALL_LIBRARIANS = "http://localhost:8080/findAllLibrarians"
const FIND_LIBRARIAN_BY_ID = "http://localhost:8080/findLibrarian"
const CREATE_LIBRARIAN_URL = "http://localhost:8080/addLibrarian"
const DELETE_LIBRARIAN_URL = "http://localhost:8080/removeLibrarian"
const UPDATE_LIBRARIAN_URL = "http://localhost:8080/setLibrarian"

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

const updateLibrarianName = (librarian) =>
    fetch(`${UPDATE_LIBRARIAN_URL}/${librarian.librarianId}/Name/${librarian.name}`)
    .then(response => response.json())

const updateLibrarianSalary= (librarian) =>
    fetch(`${UPDATE_LIBRARIAN_URL}/${librarian.librarianId}/Salary/${librarian.salary}`)
    .then(response => response.json())