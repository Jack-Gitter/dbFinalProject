class BookEditor extends React.Component {

  state = {
    book: {}
  }

  findBookById = (id) =>
    findBookById(id)
      .then(book => this.setState({book}))

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findBookById(id)
  }

  saveBook = () =>
    updateBook(this.state.book)

  render() {
    return(
      <div className="container">
        <h1>Book Editor {this.state.book.title}</h1>
        <input className="form-control" readOnly={true} value={this.state.book.bookId}/>
        <input
          onChange={(event) => this.setState({
            book: {
              ...this.state.book,
              title: event.target.value
            }
          })}
          className="form-control"
          value={this.state.book.title}/>
          <button onClick={this.saveBook}>
            Save
          </button>
          <a href="../book-list/book-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <BookEditor/>, document.getElementById("root"))
