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

  saveMemberDay = () =>
      updateMemberDay(this.state.member)
  saveMemberMonth = () =>
      updateMemberDay(this.state.member)
  saveMemberYear = () =>
      updateMemberDay(this.state.member)

  render() {
    return(
      <div className="container">
        <h1>Member Editor {this.state.member.name}</h1>
        <input className="form-control" readOnly={true} value={this.state.member.memberId}/>
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
        <label>Date of Birth</label>
        <div>
          <label>Day</label>
          <input
              onChange={(event) => this.setState({
                member: {
                  ...this.state.member,
                  day: event.target.value
                }
              })}
              className="form-control"
              value={this.state.member.day}/>
          <button onClick={this.saveMemberDay}>
            Save
          </button>
        </div>
        <div>
          <label>Month</label>
          <input
              onChange={(event) => this.setState({
                member: {
                  ...this.state.member,
                  month: event.target.value
                }
              })}
              className="form-control"
              value={this.state.member.month}/>
          <button onClick={this.saveMemberMonth}>
            Save
          </button>
        </div>
        <div>
          <label>Year</label>
          <input
              onChange={(event) => this.setState({
                member: {
                  ...this.state.member,
                  year: event.target.value
                }
              })}
              className="form-control"
              value={this.state.member.year}/>
          <button onClick={this.saveMemberYear}>
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
