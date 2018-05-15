import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import './style.css'

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      // showNewTrip: false,
      logout: false
    }
  }


  render(){
    return (
        <div className="container">
          <div className="row">

            <Nav>

            <div className="col">
              <NavItem>
                <Button onClick={this.props.renderAddNewTripForm}>Create New Trip!</Button>
              </NavItem>
              </div>

              <div className="col">
                <NavItem>
                  <Button href="#" onClick="THIS WILL BE LOGOUT FUNCTION">Logout</Button>
                </NavItem>
              </div>

          </Nav>

        </div>
      </div>
    )
  }
}


export default Navbar;
