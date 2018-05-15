import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './style.css'



const Navbar  = (props) => {
  return (
      <div className="container">
        <div className="row">

          <Nav>

          <div className="col">
            <NavItem>
              <NavLink href="#" onClick>My Trips</NavLink>
            </NavItem>
            </div>

            <div className="col">
              <NavItem>
                <NavLink href="#" onClick="">Logout</NavLink>
              </NavItem>
            </div>

        </Nav>

      </div>
    </div>
  )
}


export default Navbar;
