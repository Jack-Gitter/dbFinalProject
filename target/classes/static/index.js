
class Index extends React.Component {
  userStr;

  constructor(props) {
    super(props);
    this.state = {value: "member"};
     this.userStr = this.state.value;
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleSubmit(event) {
    console.log("User is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({value: event.target.value});
    this.userStr = this.state.value;
  };

  render() {

    return (
        <div className="container">
          <h1>Home</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="user">Choose a user role:</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="member">Member</option>
              <option value="librarian">Librarian</option>

            </select>
            <input type="submit" value="Submit"/>
          </form>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="book-list/book-list.html">Books</a>
            </li>
            <li className="list-group-item">
              <a href="librarian-list/librarian-list.html">Librarians</a>
            </li>
            <li className="list-group-item">
              <a href="member-list/member-list.html">Members</a>
            </li>
            <li className="list-group-item">
              <a href="schedule-list/schedule-list.html">Schedules</a>
            </li>
          </ul>
        </div>
    )
  }


  


}




ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)


