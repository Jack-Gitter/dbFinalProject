import React from 'react';
import BookRow from "./BookRow";
class BookList extends React.Component {
  state = {
    movies: []
  }

  findAllBooks = () =>
      findAllBooks()
      .then(books => this.setState({books}))

  componentDidMount = () =>
      this.findAllBooks()

  createBook = () =>
      createBook()
      .then(this.findAllBooks)

  deleteBook = (id) =>
      deleteBook(id)
      .then(this.findAllBooks)

  render() {
    return(
        <div>
          <h1>Book List</h1>
          <table>
            <tbody>
            {
              this.state.books.map(book =>
                  <tr>
                    <td>
                      {book.title}
                    </td>
                    <td>
                      <button onClick={() => this.deleteBook(book.id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <a href={`book-editor.html?id=${book.id}`}>
                        Edit
                      </a>
                    </td>
                  </tr>
              )
            }
            </tbody>
          </table>
          <button onClick={this.createBook}>
            Create
          </button>
        </div>
    )
  }
}

ReactDOM.render(
    <BookList/>, document.getElementById("root"))