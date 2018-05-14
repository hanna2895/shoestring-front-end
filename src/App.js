import React, { Component } from 'react';
import './App.css';
import UserSidebar from './UserSidebar'
import AllTripsContainer from './AllTripsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserSidebar />
        
        <AllTripsContainer />

      </div>
    );
  }
}

export default App;
