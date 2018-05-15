import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const UserSidebar = (props) => {
  console.log(props);
//   const user = props.user
//   const userInfo = user((user, i) => {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}>

              <Card id="userCard">
                <CardImg top width="100%" src={props.photo} alt="photo" />
                <CardBody>
                  <CardTitle>{props.name}</CardTitle>
                  <CardSubtitle>{props.username}</CardSubtitle>
                  {/* <CardText>Etc.Etc.</CardText> */}
                  <Button>Edit User</Button>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>

    );
  }


export default UserSidebar;
