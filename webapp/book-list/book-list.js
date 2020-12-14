class BookList extends React.Component {

    state = {
        books: []
    }

    findAllBooks = () =>
        findAllBooks()
            .then(book => this.setState({book}))

    componentDidMount = () =>
        this.findAllBooks()

    createBook = () =>
        createBook()
            .then(this.findAllBooks)

    deleteBook = (id) =>
        deleteBook(id)
            .then(this.findAllBooks)

    render() {
        return (
            <div className="containers" >
                <h1>Book List</h1>
                <table>
                    {
                        this.state.books.map(book =>
                            <tr key={book.bookId}>
                                <td>
                                    {book.title}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteBook(book.bookId)}>
                                        Delete Book
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                    <button onClick={this.createBook}>
                        Create Book
                    </button>
                </table>

            </div>
        )
    }
}

ReactDOM.render(
    <BookList/>, document.getElementById("root")
)