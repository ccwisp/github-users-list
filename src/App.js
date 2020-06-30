/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';

import './App.css';

import { getUsers } from './client';                                // Utility to get users list from API    
import ToggleableCardForm from './ToggleableCardForm';



class App extends React.Component {

  state = {
    users: []                                                       // State is empty before connecting to API
  }

  deleteUser = (userId) => {                                        // Delete user from state
    this.setState({
      users: this.state.users.filter(user => user.id !== userId),
    });
  }


  loadUsers() {                                        // Loading users from API and loading the into state
    getUsers((data) => {
      this.setState({ users: data })
    });
  }

  loadRepos(login) {                                     // Getting user`s repositories count from API
    getRepos((login, data) => {
      return data
    })
  }

  changeName = (attrs) => {                               // Updating user`s name

    this.setState({

      users: this.state.users.map((user) => {


        if (user.id == attrs.id) {

          return Object.assign({}, user, {
            login: attrs.value,

          });
        } else {
          return user;
        }
      }),
    });
  };

  changeType = (attrs) => {                                   // Updating user`s type

    this.setState({
      users: this.state.users.map((user) => {
        if (user.id == attrs.id) {

          return Object.assign({}, user, {
            type: attrs.value,

          });
        } else {
          return user;
        }
      }),
    });
  }


  componentDidMount() {                               // When mounted, loading users list into state
    this.loadUsers();
  }

  render() {

    const userlist = this.state.users.map((user) => (             // Looping through users and making individual components

      <ToggleableCardForm
        isOpen={false}
        key={user.id}
        id={user.id}
        avatar={user.avatar_url}
        login={user.login}
        url={user.html_url}
        rank={user.type}
        deleteUser={this.deleteUser}
        editUser={this.editUser}
        changeName={this.changeName}
        changeType={this.changeType}
      //repoCount= {this.loadRepos(user.login).length}                  TOO MANY REQUESTS :(

      />
    ));

    return (
      <div className="App">

        {userlist}                                               

      </div>


    );
  }
}
export default App;
