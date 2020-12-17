class LibrarianEditor extends React.Component {

  state = {
    librarian: {}
  }

  findLibrarianById = (id) => {
    findLibrarianById(id)
    .then(librarian => this.setState({librarian}))
  }

  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findLibrarianById(id)
  }

  saveLibrarianName = () =>
      updateLibrarianName(this.state.librarian)

  saveLibrarianSalary = () =>
      updateLibrarianSalary(this.state.librarian)

  addSchedule = () =>
      addSchedule(this.state.librarian)

  removeSchedule = () =>
      removeSchedule(this.state.librarian)

  render() {
    return (
        <div className="container">
          <h1>Librarian Editor {this.state.librarian.name}</h1>
          <input className="form-control" readOnly={true}
                 value={this.state.librarian.librarianId}/>
          <div>
            <label>Name</label>
            <input
                onChange={(event) => this.setState({
                  librarian: {
                    ...this.state.librarian,
                    name: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.librarian.name}/>
            <button onClick={this.saveLibrarianName}>
              Save
            </button>
          </div>
          <div>
            <label>Salary</label>
            <input
                onChange={(event) => this.setState({
                  librarian: {
                    ...this.state.librarian,
                    salary: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.librarian.salary}/>
            <button onClick={this.saveLibrarianSalary}>
              Save
            </button>
            <div>
              <label>Schedule ID</label> <input
                onChange={(event) => this.setState({
                  librarian: {
                    ...this.state.librarian,
                    scheduleId: event.target.value
                  }
                })}
                className="form-control"
                value={this.state.librarian.scheduleId}/>
              <button onClick={this.addSchedule}>
                Add Schedule
              </button>
              <button onClick={this.removeSchedule}>
                Remove Schedule
              </button>
            </div>
          </div>
          <a href="../librarian-list/librarian-list.html">
            Done
          </a>
        </div>

    )
  }
}

ReactDOM.render(
    <LibrarianEditor/>, document.getElementById("root"))
