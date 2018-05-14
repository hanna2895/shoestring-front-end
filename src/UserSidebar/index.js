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
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.username}</CardSubtitle>
            {/* <CardText>Etc.Etc.</CardText> */}
            <Button>Edit User</Button>
          </CardBody>
        </Card>
      </div>
    );
  }


export default UserSidebar;
