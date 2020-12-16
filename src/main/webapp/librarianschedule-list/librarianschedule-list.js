class LibrarianScheduleList extends React.Component {
  state = {
    librarianschedules: []
  }

  findAllLibrarianSchedules = () =>
      findAllMappings()
      .then((librarianschedules) => this.setState({librarianschedules}))




  deleteLibrarianSchedule = (libId, schedId) =>
      removeSchedule(libId, schedId)
      .then(() => this.findAllLibrarianSchedules())

  componentDidMount = () =>
      this.findAllLibrarianSchedules()

  render() {

      return (

          <div className="container-fluid">
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>LibrarianSchedule List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Librarian ID</th>
                <th>Schedule ID</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarianschedules.map(librarianschedule =>
                    <tr key={librarianschedule.librarian.librarianId}>
                      <td>{librarianschedule.librarian.librarianId}</td>
                      <td>{librarianschedule.schedule.scheduleId}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteLibrarianSchedule(
                                librarianschedule.librarian.librarianId,librarianschedule.schedule.scheduleId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../librarianschedule-editor/librarianschedule-editor.html?librarianscheduleId=${librarianschedule.librarian.librarianId}=${librarianschedule.schedule.scheduleId}`}>
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
    <LibrarianScheduleList/>,
    document.getElementById('root')
)

