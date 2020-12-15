class MemberEditor extends React.Component {

  state = {
    member: {}
  }

  findMemberById = (id) =>{
    findMemberById(id)
      .then(member => this.setState({member}))}


  componentDidMount = () => {
    const id = window.location.search.split("=")[1]
    this.findMemberById(id)
  }

  saveMemberName = () =>
    updateMemberName(this.state.member)

  saveMemberDob = () =>
      updateMemberDob(this.state.member)

  render() {
    return(
      <div className="container">
        <h1>Member Editor {this.state.member.name}</h1>
        <input className="form-control" readOnly={true} value={this.state.member.libraryCardId}/>
        <div>
        <label>Name</label>
        <input
          onChange={(event) => this.setState({
            member: {
              ...this.state.member,
              name: event.target.value
            }
          })}
          className="form-control"
          value={this.state.member.name}/>
          <button onClick={this.saveMemberName}>
            Save
          </button>
        </div>
        <div>
        <label>Date Of Birth</label>
        <input
            onChange={(event) => this.setState({
              member: {
                ...this.state.member,
                dob: event.target.value
              }
            })}
            className="form-control"
            value={this.state.member.dob}/>
        <button onClick={this.saveMemberDob}>
          Save
        </button>
        </div>
          <a href="../member-list/member-list.html">
            Done
          </a>
      </div>
    )
  }
}

ReactDOM.render(
  <MemberEditor/>, document.getElementById("root"))
