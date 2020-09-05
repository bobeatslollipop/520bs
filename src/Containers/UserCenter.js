import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./UserCenter.css";
import { Auth, changeUserMajor, changeUserIntro, changeUserResidence, changeFeedback } from "../firebase";
import { LogoutOutlined } from "@ant-design/icons";
import Feedback from "react-bootstrap/esm/Feedback";
import Select from "react-dropdown-select";


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
                  <Profile/>                  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Feedback/>
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
  


  function Profile() {
    const [major, setMajor] = useState(null);
    const [intro, setIntro] = useState(null);
    const [residence, setResidence] = useState(null);
    const [year, setYear] = useState(null);
    const [zip, setZip] = useState(null);
    const Countries = [
      { label: "Albania", value: 355 },
      { label: "Argentina", value: 54 },
      { label: "Austria", value: 43 },
      { label: "Cocos Islands", value: 61 },
      { label: "Kuwait", value: 965 },
      { label: "Sweden", value: 46 },
      { label: "Venezuela", value: 58 }
    ];

    function handleSubmit(e){
      var msg="";
      if (major != null){
        console.log(major);
        changeUserMajor(props.userEmail, major);
        msg = msg + "Major ";
      }
      if (intro != null){
        console.log(intro);
        changeUserIntro(props.userEmail, intro);
        msg = msg + "Intro "
      }
      if (residence != null){
        console.log(residence);
        changeUserResidence(props.userEmail, residence);
        msg = msg + "Residence "
      }
      if (year != null){
        console.log(year);
      }
      if (zip != null){
        console.log(major);
      }
      if (msg!=""){
        alert(msg + "Updated");
      } else {
        alert("Nothing Updated");
        e.preventDefault();
      }

    }

    return(
      <Container style={{backgroundColor:"white", borderRadius:"15px", padding: "15px"}}>
        <Container style={{textAlign: "center"}}>
          <p><strong>User Profile</strong></p>
        </Container>
        <hr></hr>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" disabled/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" disabled/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridMajor">
            <Form.Label>Major</Form.Label>
            <Select options={Countries} placeholder={props.userMajor} />
          </Form.Group>

          <Form.Group controlId="formGridIntroduction">
            <Form.Label>Introduce Yourself</Form.Label>
            <Form.Control 
            placeholder={props.userIntro}
            onChange={e=>{setIntro(e.target.value);}}
             />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridResidence">
              <Form.Label>Dorm/Residence</Form.Label>
              <Form.Control 
              placeholder={props.userResidence}
              onChange={e=>{setResidence(e.target.value);}}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Control 
              placeholder={props.userYear}
              onChange={e=>{setYear(e.target.value);}}
              disabled
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>What to put here?</Form.Label>
              <Form.Control 
              disabled/>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button 
          variant="primary" 
          type="submit"
          onClick={e =>{handleSubmit(e)}}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }


  function Feedback() {
    const [feedback, setFeedback] = useState(null);
    function handleSubmit(e){
      var msg="";
      if (feedback != null){
        console.log(feedback);
        changeFeedback(props.userFeedback, feedback);
        msg = msg + "Major ";
      }
      if (msg!=""){
        alert(msg + "Updated");
      } else {
        alert("Nothing Updated");
        e.preventDefault();
      }
    }
    return(
      <Container style={{backgroundColor:"white", borderRadius:"15px", padding: "15px"}}>
        <Container style={{textAlign: "center"}}>
          <p><strong>Feedback</strong></p>
        </Container>
        <hr></hr>
        <Form>
          <Form.Group controlId="formGridMajor">
            <Form.Label>Your Feedback</Form.Label>
            <Form.Control 
            placeholder={props.userFeedback} 
            onChange={e=>{setFeedback(e.target.value);}}
            />
          </Form.Group>

          <Button 
          variant="primary" 
          type="submit"
          onClick={e =>{handleSubmit(e)}}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }

}


