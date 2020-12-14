class MemberList extends React.Component {

    state = {
        members: []
    }

    findAllMembers = () =>
        findAllMembers()
            .then(member => this.setState({member}))

    componentDidMount = () =>
        this.findAllMembers()

    createMembers = () =>
     createMember()
       .then(this.findAllMembers)

    deleteMember = (id) =>
        deleteMember(id)
            .then(this.findAllMembers)

    render() {
        return (
            <div className="containers">
                <h1>Member List</h1>
                <table>
                    {
                        this.state.members.map(member =>
                            <tr key={member.lcid}>
                                <td>
                                    {member.name}
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.deleteMember(member.lcid)}>
                                        Delete Member
                                    </button>
                                </td>

                            </tr>
                        )
                    }
                    <button onClick={this.createMember}>
                           Create Member
                         </button>

                </table>

            </div>
        )
    }
}

ReactDOM.render(
    <MemberList/>, document.getElementById("root")
)