class LibrarianScheduleList extends React.Component {
  state = {
    librarianSchedules: []
  }

  findAllLibrarianSchedules = () =>
      findAllMappings()
      .then((librarianSchedules) => this.setState({librarianSchedules}))

  createLibrarianSchedule = () =>
      addSchedule(this.state.librarianSchedules.librarian.librarianId, this.state.librarianSchedules.schedule.scheduleId)
      .then(() => this.findAllLibrarianSchedules())


  deleteLibrarianSchedule = (libId, schedId) =>
      removeSchedule(libId, schedId)
      .then(() => this.findAllLibrarianSchedules())

  componentDidMount = () =>
      this.findAllLibrarianSchedules()

  render() {

      return (

          <div className="container-fluid">
            {<div>
              <label>Librarian ID</label><input
                onChange={(event) => this.setState({
                  librarianSchedules: {
                    ...this.state.librarianSchedules,
                    librarian: findLibrarianById(event.target.value)
                  }
                })}className="form-control"/>
              <label>Schedule ID</label> <input
                onChange={(event) => this.setState({
                  librarianSchedules: {
                    ...this.state.librarianSchedules,
                    schedule: findScheduleById(event.target.value)
                  }
                })}
                className="form-control"/>
            </div>}
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
                <th>Librarian ID</th>
                <th>Schedule ID</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.librarianSchedules.map(librarianSchedule =>
                    <tr key={librarianSchedule.librarian.librarianId}>
                      <td>{librarianSchedule.librarian.librarianId}</td>
                      <td>{librarianSchedule.schedule.scheduleId}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteLibrarianSchedule(
                                librarianSchedule.librarian.librarianId,librarianSchedule.schedule.scheduleId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../librarianschedule-editor/librarianschedule-editor.html?librarianscheduleId=${librarianSchedule.librarian.librarianId}=${librarianSchedule.schedule.scheduleId}`}>
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

