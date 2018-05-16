import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
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
        <Container>
          <Row>

            <Nav>

            <Col>
              <NavItem>
                <Button onClick={this.props.renderAddNewTripForm}>Create New Trip!</Button>
              </NavItem>
            </Col>

              <Col>
                <NavItem>
                  <Button onClick={this.props.logout}>Logout</Button>
                </NavItem>
              </Col>

          </Nav>

        </Row>
      </Container>
    )
  }
}


export default Navbar;
