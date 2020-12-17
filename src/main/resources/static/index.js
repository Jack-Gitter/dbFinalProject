
class Index extends React.Component {
  userStr;

  constructor(props) {
    super(props);
    this.state = {value: localStorage.getItem("user")};
    localStorage.setItem("user",this.state.value);
  }



  handleChange = event => {
    this.setState({value: event.target.value});
   localStorage.setItem("user",event.target.value);
    this.userStr = this.state.value;
  };

  render() {
    if (localStorage.getItem("user") === "librarian") {
      return (
          <div className="container">
            <h1>Home</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="user">Choose a user role:</label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="member">Member</option>
                <option value="librarian">Librarian</option>

              </select>
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
    }else{
      return (
          <div className="container">
            <h1>Home</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="user">Choose a user role:</label>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="member">Member</option>
                <option value="librarian">Librarian</option>

              </select>
            </form>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="book-list/book-list.html">Books</a>
              </li>
              <li className="list-group-item">
                <a href="member-list/member-list.html">Members</a>
              </li>
            </ul>
          </div>)
    }
  }


  


}




ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)


