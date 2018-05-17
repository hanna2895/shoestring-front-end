import React, { Component } from 'react';
import './style.css'
// import { Container, Row, Col, Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';


const UserSidebar = (props) => {
  // console.log(props);
//   const user = props.user
//   const userInfo = user((user, i) => {
    return (
    <div id="userCard">
      <div className="container">
        <div className="row">
          <div className="four columns">

          </div>
        </div>

        <div className="row">
          <div className="four columns">
              <img id="userPhoto" src={props.photo} alt="photo" />
            </div>
          </div>

          <div className="row">
            <div className="four columns">
              <h2 id="usersName">{props.name}</h2><br />
            </div>
          </div>

            <div className="row">
              <div className="four columns">
                <h3 id="username">{props.username}</h3><br /><br />
              </div>
            </div>

            <div className="row">
              <div className="four columns">
                <button onClick={props.openModal}>Edit User</button><br /><br />
              </div>
            </div>

        </div>
    </div>



    );
  }


export default UserSidebar;
