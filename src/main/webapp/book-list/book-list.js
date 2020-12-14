class BookList extends React.Component {
  state = {
    books: []
  }

  findAllBooks = () =>
    findAllBooks()
      .then((books) => this.setState({books}))

  createBook = () =>
    createBook()
      .then(() => this.findAllBooks())

  deleteBook = (bookId) =>
    deleteBook(bookId)
      .then(() => this.findAllBooks())

  componentDidMount = () =>
    this.findAllBooks()

  render() {
    return(
      <div className="container-fluid">
        <button
          className="btn btn-success float-right"
          onClick={() => this.createBook()}>
          Create
        </button>
        <a className="btn btn-danger float-right"
           href="../../index.html">
          Home
        </a>
        <h1>Book List</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.books.map(book =>
                <tr key={book.bookId}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                        className="btn btn-danger float-right"
                        onClick={() => this.deleteBook(book.bookId)}>
                      Delete
                    </button>
                    <a className="btn btn-primary float-right"
                       href={`../../book-editor/book-editor.html?bookId=${book.bookId}`}>
                      Edit
                    </a>
                  </td>
                </tr>
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)

