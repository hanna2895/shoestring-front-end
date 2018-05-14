import React, { Component } from 'react';
import './App.css';
import UserSidecard from './UserSidecard'



class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserSidecard />
      </div>
    );
  }
}

export default App;
