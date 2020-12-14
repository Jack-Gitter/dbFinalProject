

class LibrarianList extends React.Component {
  state = {
    librarians: []
  }

  findAllLibrarians = () =>
      findAllLibrarians()
      .then((librarians) => this.setState({librarians}))

  createLibrarian = () =>
      createLibrarian()
      .then(() => this.findAllLibrarians())

  deleteLibrarian = (librarianId) =>
      deleteLibrarian(librarianId)
      .then(() => this.findAllLibrarians())

  componentDidMount = () =>
      this.findAllLibrarians()

  render() {

    if (strUser === "librarian") {
      return (

          <div className="container-fluid">
            <button
                className="btn btn-success float-right"
                onClick={() => this.createLibrarian()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Librarian List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Librarian ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarians.map(librarian =>
                    <tr key={librarian.librarianId}>
                      <td>{librarian.librarianId}</td>
                      <td>{librarian.title}</td>
                      <td>{librarian.author}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteLibrarian(librarian.librarianId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../librarian-editor/librarian-editor.html?librarianId=${librarian.librarianId}`}>
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
    } else {
      return (
          <div className="container-fluid">
            <button
                className="btn btn-success float-right"
                onClick={() => this.createLibrarian()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Librarian List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Librarian ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarians.map(librarian =>
                    <tr key={librarian.librarianId}>
                      <td>{librarian.librarianId}</td>
                      <td>{librarian.title}</td>
                      <td>{librarian.author}</td>
                    </tr>
                )

              }
              </tbody>
            </table>
          </div>
      )
    }

  }
}

ReactDOM.render(
    <LibrarianList/>,
    document.getElementById('root')
)

