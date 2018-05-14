import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegister from './LoginRegister'

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      loginError: ''
    }
  }

  login = async (username, password) => {
    const userLogin = await fetch('http://localhost:9292/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const loginResponse = await userLogin.json()
    if(loginResponse.success){
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({
        loginError: loginResponse.message
      })
    }
  }

  register = async () => {
    console.log('you are trying to register')
  }
  render() {
    return (
      <div className="App">
        <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError}/>
      </div>
    );
  }
}

export default App;
