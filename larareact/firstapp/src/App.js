import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      users: [],
    };
  }
  componentWillMount() {
    axios("https://api.randomuser.me/?nat=US&results=5").then((response) =>
      // rendering changes using useState/ update changes

      this.setState({
        users: response.data.results,
      })
    );
  }
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Date</th>
              <th scope="col">City</th>
              <th scope="col">Street</th>
              <th scope="col">Location</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.email}> 
                <td>{user.username}</td>
                <td>{user.date}</td>
                <td>{user.city}</td>
                <td>{user.street}</td> 
                <td>{user.location}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  }


export default App;
