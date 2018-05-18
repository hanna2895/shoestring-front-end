import React, { Component } from 'react';
import './style.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserSidebar = (props) => {
  // console.log(props);
//   const user = props.user
//   const userInfo = user((user, i) => {
    return (

      // <div className="container">
      //   <div className="row">
      //     <div className="six columns">
            <Card>
              <CardImg id="userPhoto" src={props.photo} alt="photo" />
              <CardBody>
              <h1>{props.name}</h1>
              <h3>{props.username}</h3>
              <button className= "button button" onClick={props.openModal}>Edit User</button><br /><br />
            </CardBody>
          </Card>
      //     </div>
      //   </div>
      // </div>

        /* <div className="row">
          <div className="four columns">
              <img  />
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
                <button className= "button button" onClick={props.openModal}>Edit User</button><br /><br />
              </div>
            </div> */

    );
  }


export default UserSidebar;
