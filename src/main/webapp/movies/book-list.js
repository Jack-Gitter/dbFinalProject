class BookList extends React.Component {

    componentDidMount = () =>
        findAllBooks()
            .then(courses => this.setState())

    render() {
        return(
            <div>
                <h1>Book List</h1>
                <ul>
                    {
                        this.state.books.map(book =>
                        <li>
                            {book.title}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <BookList/>, document.getElementById("root");
)