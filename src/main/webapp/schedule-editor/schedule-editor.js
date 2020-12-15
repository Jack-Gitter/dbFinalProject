class ScheduleEditor extends React.Component {

  state = {
    schedule: {}
  }

  findScheduleById = (id) =>{
    findScheduleById(id)
      .then(schedule => this.setState({schedule}))}


  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findScheduleById(id)
  }

  saveScheduleDay = () =>
    updateScheduleDay(this.state.schedule)

  saveScheduleStartHour = () =>
      updateScheduleStartHour(this.state.schedule)

  saveScheduleEndHour = () =>
      updateScheduleEndHour(this.state.schedule)

  render() {
    return(
      <div className="container">
        <h1>Schedule Editor {this.state.schedule.day}</h1>
        <input className="form-control" readOnly={true} value={this.state.schedule.scheduleId}/>
        <div>
        <label>Day</label>
        <input
          onChange={(event) => this.setState({
            schedule: {
              ...this.state.schedule,
              day: event.target.value
            }
          })}
          className="form-control"
          value={this.state.schedule.day}/>
        </div>
        <div>
          <label>Month</label>
          <input
              onChange={(event) => this.setState({
                schedule: {
                  ...this.state.schedule,
                  day: event.target.value
                }
              })}
              className="form-control"
              value={this.state.schedule.day}/>
        </div>
        <div>
          <label>Year</label>
          <input
              onChange={(event) => this.setState({
                schedule: {
                  ...this.state.schedule,
                  day: event.target.value
                }
              })}
              className="form-control"
              value={this.state.schedule.day}/>
          <button onClick={this.saveScheduleDay}>
            Save
          </button>
        </div>
        <div>
        <label>Start Hour</label>
        <input
            onChange={(event) => this.setState({
              schedule: {
                ...this.state.schedule,
                startHour: event.target.value
              }
            })}
            className="form-control"
            value={this.state.schedule.startHour}/>
        <button onClick={this.saveScheduleStartHour}>
          Save
        </button>
        </div>
        <div>
          <label>End Hour</label>
          <input
              onChange={(event) => this.setState({
                schedule: {
                  ...this.state.schedule,
                  endHour: event.target.value
                }
              })}
              className="form-control"
              value={this.state.schedule.endHour}/>
          <button onClick={this.saveScheduleEndHour}>
            Save
          </button>
        </div>
          <a href="../schedule-list/schedule-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <ScheduleEditor/>, document.getElementById("root"))
