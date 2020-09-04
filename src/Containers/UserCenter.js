import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./UserCenter.css";
import { Auth, changeUserMajor, changeUserIntro, changeUserResidence } from "../firebase";
import { LogoutOutlined } from "@ant-design/icons";

export default function UserCenter(props) {
  return (
    <Container>
      <Jumbotron style={{marginTop: "25px"}} className="UserCenter">
        <h1 style={{textAlign: "center"}}>User Center</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="NavList" style={{height: "85%"}}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">User Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" >Feedback</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  What
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        <Button variant='danger' onClick={() => handleLogout()} style={{marginTop: "1em", width: "20%"}}>
          Log out
        </Button>
      </Jumbotron>
    </Container>
  );

  function handleLogout() {
    Auth.signOut()
    props.history.replace('/')
  }
  
}
