import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import LoginRegister from './LoginRegister'
=======
import UserSidebar from './UserSidebar'
import AllTripsContainer from './AllTripsContainer';

>>>>>>> 43566a425a53fbf99b8b0b59c7d5c915e029f233

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }

  login = async () => {
    console.log('you are trying to login')
  }

  register = async () => {
    console.log('you are trying to register')
  }
  render() {
    return (
      <div className="App">
        <LoginRegister login={this.login} register={this.register}/>
        <h1>Hello!</h1>
        <UserSidebar />
        
        <AllTripsContainer />
      </div>
    );
  }
}

export default App;
