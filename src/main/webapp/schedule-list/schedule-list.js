class ScheduleList extends React.Component {
  state = {
    schedules: []
  }

  findAllSchedules = () =>
      findAllSchedules()
      .then((schedules) => this.setState({schedules}))

  createSchedule = () =>
      createSchedule()
      .then(() => this.findAllSchedules())

  deleteSchedule = (scheduleId) =>
      deleteSchedule(scheduleId)
      .then(() => this.findAllSchedules())

  componentDidMount = () =>
      this.findAllSchedules()

  render() {

    if (localStorage.getItem("user") === "librarian") {
      return (

          <div className="container-fluid">
            <button
                className="btn btn-success float-right"
                onClick={() => this.createSchedule()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Schedule List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Schedule ID</th>
                <th>Day</th>
                <th>Start Hour</th>
                <th>End Hour</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.schedules.map(schedule =>
                    <tr key={schedule.scheduleId}>
                      <td>{schedule.scheduleId}</td>
                      <td>{schedule.day}</td>
                      <td>{schedule.startHour}</td>
                      <td>{schedule.endHour}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteSchedule(
                                schedule.scheduleId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../schedule-editor/schedule-editor.html?scheduleId=${schedule.scheduleId}`}>
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
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Schedule List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Schedule ID</th>
                <th>Day</th>
                <th>Start Hour</th>
                <th>End Hour</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.schedules.map(schedule =>
                    <tr key={schedule.scheduleId}>
                      <td>{schedule.scheduleId}</td>
                      <td>{schedule.day}</td>
                      <td>{schedule.startHour}</td>
                      <td>{schedule.endHour}</td>

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
    <ScheduleList/>,
    document.getElementById('root')
)

