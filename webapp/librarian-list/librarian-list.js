class LibrarianList extends React.Component {

    state = {
        librarians: []
    }

    findAllLibrarians = () =>
        findAllLibrarians()
            .then(librarian => this.setState({librarian}))

    componentDidMount = () =>
        this.findAllLibrarians()

    createLibrarians = () =>
        createLibrarian()
            .then(this.findAllLibrarians)

    deleteLibrarian = (id) =>
        deleteLibrarian(id)
            .then(this.findAllLibrarians)

    render() {
        return (
            <div className="containers">
                <h1>Librarian List</h1>
                <table>
                    {
                        this.state.librarians.map(librarian =>
                            <tr key={librarian.librarianId}>
                                <td>
                                    {librarian.librarianId}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteLibrarian(librarian.librarianId)}>
                                        Delete Librarian
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                    <button onClick={this.createLibrarian}>
                        Create Librarian
                    </button>
                </table>

            </div>
        )
    }
}

ReactDOM.render(
    <LibrarianList/>, document.getElementById("root")
)