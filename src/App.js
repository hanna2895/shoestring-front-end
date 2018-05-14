import React, { Component } from 'react';
import './App.css';
import UserSidebar from './UserSidebar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserSidebar />
      </div>
    );
  }
}

export default App;
