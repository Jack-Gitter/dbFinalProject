class LibrarianEditor extends React.Component {

  state = {
    librarian: {}
  }

  findLibrarianById = (id) =>{
    debugger
    findLibrarianById1(id)
      .then(librarian => this.setState({librarian}))}


  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    debugger
    this.findLibrarianById(id)
  }

  saveLibrarian = () =>
    updateLibrarian(this.state.librarian)

  render() {
    return(
      <div className="container">
        <h1>Librarian Editor {this.state.librarian.title}</h1>
        <input className="form-control" readOnly={true} value={this.state.librarian.librarianId}/>
        <input
          onChange={(event) => this.setState({
            librarian: {
              ...this.state.librarian,
              title: event.target.value
            }
          })}
          className="form-control"
          value={this.state.librarian.title}/>
          <button onClick={this.saveLibrarian}>
            Save
          </button>
          <a href="../librarian-list/librarian-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <LibrarianEditor/>, document.getElementById("root"))
