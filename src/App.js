import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegister from './LoginRegister'

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
      </div>
    );
  }
}

export default App;
