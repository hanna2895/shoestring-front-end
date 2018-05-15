import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister'
import UserSidebar from './UserSidebar'
import AllTripsContainer from './AllTripsContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      loginError: '',
      name: '',
      username: ''
    }
  }

  componentDidMount() {
    this.showUserSidebar()
    .then((user) => {
      this.setState({
        name: user.found_user.name,
        username: user.found_user.username
      })
    })
    .catch((err) => {
      console.log(err);
    })
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

  showUserSidebar = async () => {
    console.log('show user sidebar');

    const userJson = await fetch('http://localhost:9292/user', {
      credentials: 'include'
    });

    const user = await userJson.json();

    // this.setState({user: user})
    // console.log(this.state);
    return user;

  }

  render() {

    return (
      <div className="App">
        {this.state.loggedIn ?
          <div>
            <h1>Hello!</h1>

            <div className="container">
              
              <UserSidebar username={this.state.username} name={this.state.name}/>
              <AllTripsContainer />
            </div>

           

          </div>
          : <LoginRegister login={this.login} register={this.register} loginError={this.state.loginError}/>
        }
      </div>
    )
  }
}

export default App;
