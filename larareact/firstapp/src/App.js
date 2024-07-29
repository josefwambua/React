import React, { Component } from "react";
import "./index.css";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      users: [],

    };
  }
  getUsers() {
    axios("https://api.randomuser.me/?nat=US&results=5").then((response) =>
      // rendering changes using useState/ update changes
      // provides instant changes when user makes changes to the state
      this.setState({
        users: response.data.results,
      })
    );
  }
  componentWillMount() {
    this.getUsers();
  }
  render() {
    return (
      <div
        className="App"
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          User Directory
        </h1>
        {/* check if the state is loading and display users otherwise display loading*/}
        <div className="user-list">
          {!this.state.loading
            ? this.state.users.map((user) => (
                <div
                  key={user.id}
                  className="user-card"
                  style={{
                    marginBottom: "20px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  {/* <h2 style={{color: '#444', marginBottom: '10px'}}>{user.name.first} {user.name.last}</h2> */}
                  {/* <p><strong>Email:</strong> <a href={`mailto:${user.email}`} style={{color: '#0066cc'}}>{user.email}</a></p> */}
                  {/* manipulating to a table */}
                  <table
                    className="user-details"
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      marginTop: "15px",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            textAlign: "left",
                          }}
                        >
                          First Name
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            textAlign: "left",
                          }}
                        >
                          Last Name
                        </th>
                        <th
                          style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            textAlign: "left",
                          }}
                        >
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{ border: "1px solid #ddd", padding: "10px" }}
                        >
                          {user.name.first}
                        </td>
                        <td
                          style={{ border: "1px solid #ddd", padding: "10px" }}
                        >
                          {user.name.last}
                        </td>
                        <td
                          style={{ border: "1px solid #ddd", padding: "10px" }}
                        >
                          {user.email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
  }
}

export default App;
