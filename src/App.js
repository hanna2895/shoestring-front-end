import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import UserSidecard from './UserSidecard'
=======
import LoginRegister from './LoginRegister'
import UserSidebar from './UserSidebar'
>>>>>>> 9386667e35275ca0ff1434fda3541d965bf12e04
import AllTripsContainer from './AllTripsContainer';

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

  register = async (name, username, password, photo) => {
    console.log('you are trying to register')
    const userRegister = await fetch('http://localhost:9292/user/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        photo: photo
      })
    })
    const registrationResponse = await userRegister.json();
    console.log(registrationResponse.success)
    if(registrationResponse.success){
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({
        loginError: registrationResponse.message
      })
    }

  }
  render() {
<<<<<<< HEAD

=======
    console.log(this.state, 'THIS IS sssssssstate')
>>>>>>> 9386667e35275ca0ff1434fda3541d965bf12e04
    return (
      <div className="App">
        <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError}/>
        <h1>Hello!</h1>
        <UserSidecard />
        <AllTripsContainer />
      </div>
    )
  }
}

export default App;
