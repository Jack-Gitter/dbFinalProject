

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

    if (localStorage.getItem("user") === "librarian") {
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
                <th>Name</th>
                <th>Salary</th>
                <th>Schedule</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarians.map(librarian =>
                    <tr key={librarian.librarianId}>
                      <td>{librarian.librarianId}</td>
                      <td>{librarian.name}</td>
                      <td>{librarian.salary}</td>
                      <td>{findAllLibrarianSchedules().map(
                          librarianSchedule => <div>{librarianSchedule.schedule.scheduleId}</div>)}</td>
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

      )}else{
      return (

          <div className="container-fluid">

            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Librarian List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Librarian ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Schedule</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarians.map(librarian =>
                    <tr key={librarian.librarianId}>
                      <td>{librarian.librarianId}</td>
                      <td>{librarian.name}</td>
                      <td>{librarian.salary}</td>
                      <td>{librarian.librarianSchedules}</td>
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

