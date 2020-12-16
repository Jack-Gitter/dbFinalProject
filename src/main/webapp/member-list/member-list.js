class MemberList extends React.Component {
  state = {
    members: []
  }

  findAllMembers = () =>
      findAllMembers()
      .then((members) => this.setState({members}))

  createMember = () =>
      createMember()
      .then(() => this.findAllMembers())

  deleteMember = (libraryCardId) =>
      deleteMember(libraryCardId)
      .then(() => this.findAllMembers())

  componentDidMount = () =>
      this.findAllMembers()

  render() {

    if (localStorage.getItem("user") === "librarian") {
      return (

          <div className="container-fluid">
            <button
                className="btn btn-success float-right"
                onClick={() => this.createMember()}>
              Create
            </button>
            <a className="btn btn-danger float-right"
               href="../../index.html">
              Home
            </a>
            <h1>Member List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Library Card ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Books</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.members.map(member =>
                    <tr key={member.libraryCardId}>
                      <td>{member.libraryCardId}</td>
                      <td>{member.name}</td>
                      <td>{member.dob}</td>
                      <td>{member.books.map(
                          book => <div>{book.title}</div>)}</td>
                      <td>
                        <button
                            id="delete" className="btn btn-danger float-right"
                            onClick={() => this.deleteMember(
                                member.libraryCardId)}>
                          Delete
                        </button>

                        <a id="edit" className="btn btn-primary float-right"
                           href={`../../member-editor/member-editor.html?lcid=${member.libraryCardId}`}>
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
            <h1>Member List</h1>
            <table className="table">
              <thead>
              <tr>
                <th>Library Card ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Books</th>
                <th>&nbsp;</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.members.map(member =>
                    <tr key={member.libraryCardId}>
                      <td>{member.libraryCardId}</td>
                      <td>{member.name}</td>
                      <td>{member.dob}</td>
                      <td>{member.books.map(
                          book => <div>{book.title}</div>)}</td>
                      <td><a id="edit" className="btn btn-primary float-right"
                             href={`../../member-editor/member-editor.html?lcid=${member.libraryCardId}`}>
                        Edit
                      </a></td>
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
    <MemberList/>,
    document.getElementById('root')
)

