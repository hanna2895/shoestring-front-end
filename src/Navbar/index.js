import React, { Component } from 'react';
import './style.css'

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      logout: false
    }
  }


  render(){
    return (
        <div className="container">
          <div className="row">

            <div className="four columns">
              <button className="button button-primary" onClick={this.props.navigateToIndex}>Home</button>
            </div>


            <div className="four columns">
                  <button className="button button-primary" onClick={this.props.renderAddNewTripForm}>Create New Trip!</button>
            </div>


            <div className="four columns">
              <button className="button button" onClick={this.props.logout}>Logout</button>
            </div>

          </div>
        </div>
    )
  }
}


export default Navbar;
