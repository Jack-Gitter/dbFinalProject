class LibrarianscheduleEditor extends React.Component {

  state = {
    librarianschedule: {}
  }

  findLibrarianScheduleById = (id) =>{
    findLibrarianScheduleById(id)
      .then(librarianschedule => this.setState({librarianschedule}))}


  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findLibrarianScheduleById(id)
  }

  addSchedule = () =>
    addSchedule(this.state.librarianschedule)
  removeSchedule = () =>
      removeSchedule(this.state.librarianschedule)


  render() {
    return(
      <div className="container">
        <h1>LibrarianSchedule Editor {this.state.librarianschedule.name}</h1>
        <input className="form-control" readOnly={true} value={this.state.librarianschedule.librarianscheduleId}/>
        <div>
        <label>Add Schedule</label>
        <input
          onChange={(event) => this.setState({
            librarianschedule: {
              ...this.state.librarianschedule,
              name: event.target.value
            }
          })}
          className="form-control"
          value={this.state.librarianschedule.schedules}/>
          <button onClick={this.addSchedule}>
            Save
          </button>
        </div>

        <div>
          <label>Remove Schedule</label>
          <input
              onChange={(event) => this.setState({
                librarianschedule: {
                  ...this.state.librarianschedule,
                  name: event.target.value
                }
              })}
              className="form-control"
              value={this.state.librarianschedule.schedules}/>
          <button onClick={this.removeSchedule}>
            Save
          </button>
        </div>

      </div>

    )
  }
}

ReactDOM.render(
  <LibrarianscheduleEditor/>, document.getElementById("root"))
