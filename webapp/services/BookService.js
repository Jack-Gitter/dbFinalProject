  const FIND_ALL_BOOKS = "http://localhost:8080/findAllBooks"
  const FIND_BOOK_BY_ID = "http://localhost:8080/findBookById"
  const CREATE_BOOK_URL = "http://localhost:8080/createBook"
  const DELETE_BOOK_URL = "http://localhost:8080/deleteBook"
  const RENAME_BOOK = "http://localhost:8080/renameBook"

    const findAllBooks = () =>
        fetch(`${FIND_ALL_BOOKS}`)
            .then(response => response.json())

    const findBookById = (id) =>
        fetch(`${FIND_BOOK_BY_ID}/${id}`)
            .then(response => response.json())

    const createBook = () =>
        fetch(`${CREATE_BOOK_URL}`)
            .then(response => response.json())

    const deleteBook = (id) =>
        fetch(`${DELETE_BOOK_URL}/${id}`)

    const renameBook = (book) =>
        fetch(`${RENAME_BOOK}/${book.id}/${book.title}`)
            .then(response => response.json())
