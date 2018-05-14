import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import UserSidebar from './UserSidebar'
import AllTripsContainer from './AllTripsContainer';

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
