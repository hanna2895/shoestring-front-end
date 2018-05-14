import React, { Component } from 'react';
import './App.css';
import UserSidcard from './UserSidecard'
import AllTripsContainer from './AllTripsContainer';


class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserSideCard/>

        <AllTripsContainer />

      </div>
    );
  }
}

export default App;
