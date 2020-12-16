class LibrarianScheduleEditor extends React.Component {

  state = {
    librarian: {},
    schedule: {}

  }

  findLibrarianById = (id) =>{
    findLibrarianById(id)
      .then(librarian => this.setState({librarian}))}

  findScheduleById = (id) =>{
    findScheduleById(id)
    .then(schedule => this.setState({schedule}))}


  componentDidMount = () => {
    const libId = window.location.search.split("=")[1]
    const schedId = window.location.search.split("=")[2]

    this.findLibrarianById(libId)
    this.findScheduleById(schedId)

  }

  addSchedule = () =>
    addSchedule(this.state.librarian,this.state.schedule)
  removeSchedule = () =>
      removeSchedule(this.state.librarian,this.state.schedule)


  render() {
    return(
      <div className="container">
        <h1>LibrarianSchedule Editor {this.state.librarian.name}</h1>
        <input className="form-control" readOnly={true} value={this.state.librarian.name}/>
        <div>
        <label>Add Schedule</label>
        <label>Librarian ID</label><input
          onChange={(event) => this.setState({
            librarian: {
              ...this.state.librarian,
              librarianId: event.target.value
            }
          })}className="form-control"
          value={this.state.librarian.librarianId}/>
       <label>Schedule ID</label> <input
            onChange={(event) => this.setState({
              schedule: {
                ...this.state.schedule,
                scheduleId: event.target.value
              }
            })}
          className="form-control"
          value={this.state.schedule.scheduleId}/>
          <button onClick={this.addSchedule}>
            Save
          </button>
        </div>

      </div>

    )
  }
}

ReactDOM.render(
  <LibrarianScheduleEditor/>, document.getElementById("root"))
