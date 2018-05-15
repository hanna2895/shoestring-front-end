import React, { Component } from 'react';
import './style.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const UserSidebar = (props) => {
  console.log(props);
//   const user = props.user
//   const userInfo = user((user, i) => {
    return (

      <div>

        <Card id="userCard">
          <CardImg top width="100%" src={props.photo} alt="photo" />
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.username}</CardSubtitle>
            {/* <CardText>Etc.Etc.</CardText> */}
            <Button onClick={props.openModal}>Edit User</Button>
            <button >Logout</button>
          </CardBody>
        </Card>
      </div>
    );
  }


export default UserSidebar;
