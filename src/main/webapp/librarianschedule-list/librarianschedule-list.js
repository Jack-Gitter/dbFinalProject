class LibrarianScheduleList extends React.Component {
  state = {
    librarianschedules: []
  }

  findAllLibrarianSchedules = () =>
      findAllMappings()
      .then((librarianschedules) => this.setState({librarianschedules}))


  deleteLibrarianSchedule = (librarianscheduleId) =>
      removeSchedule(librarianscheduleId)
      .then(() => this.findAllLibrarianSchedules())

  componentDidMount = () =>
      this.findAllLibrarianSchedules()

  render() {

    if (localStorage.getItem("user") === "librarian") {
      return (

          <div className="container-fluid">
            <button
                className="btn btn-success float-right"
                onClick={() => this.createLibrarianSchedule()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>LibrarianSchedule List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>LibrarianSchedule ID</th>
                <th>Librarian ID</th>
                <th>Schedule ID</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarianschedules.map(librarianschedule =>
                    <tr key={librarianschedule.librarianscheduleId}>
                      <td>{librarianschedule.librarianscheduleId}</td>
                      <td>{librarianschedule.schedule.scheduleId}</td>
                      <td>{librarianschedule.librarian.librarianId}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteLibrarianSchedule(
                                librarianschedule.librarianscheduleId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../librarianschedule-editor/librarianschedule-editor.html?librarianscheduleId=${librarianschedule.librarianscheduleId}`}>
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
                onClick={() => this.createLibrarianSchedule()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>LibrarianSchedule List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>LibrarianSchedule ID</th>
                <th>Librarian ID</th>
                <th>Schedule ID</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarianschedules.map(librarianschedule =>
                    <tr key={librarianschedule.librarianscheduleId}>
                      <td>{librarianschedule.librarianscheduleId}</td>
                      <td>{librarianschedule.schedule.scheduleId}</td>
                      <td>{librarianschedule.librarian.librarianId}</td>

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
    <LibrarianSchedulelibrarianList/>,
    document.getElementById('root')
)

