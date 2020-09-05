import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck, Modal } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./UserCenter.css";
import { Auth, db } from "../firebase";
import MultiSelect from "react-multi-select-component"
import { getUserById } from '../firebase'


export default function UserCenter(props) {

  return (
    <Container>
      <Jumbotron style={{marginTop: "15px"}} className="UserCenter">
        <h1 style={{textAlign: "center", marginBottom: "3%"}}>User Center</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="NavList" style={{height: "85%"}}>
              <Nav variant="pills" className="flex-column">
                <Nav.Link eventKey="first">User Profile</Nav.Link>

                <Nav.Link eventKey="interests" >Your interests</Nav.Link>

                <Nav.Link eventKey="personalities" >Your personalities</Nav.Link>

                <Nav.Link eventKey="feedback" >Feedback</Nav.Link>
              </Nav>
            </Col>
            
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><Profile /></Tab.Pane>

                <Tab.Pane eventKey="interests"><Interests /></Tab.Pane>

                <Tab.Pane eventKey="personalities"><Personalities /></Tab.Pane>

                <Tab.Pane eventKey="feedback"><Feedback /></Tab.Pane>
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
    const [gend, setGend] = useState(props.gender ? props.gender : "");
    const [intro, setIntro] = useState(props.introduction ? props.introduction : "");

    function handleSubmit(e){
      if (intro !== props.introduction || gend !== props.gender)
        db.collection("Users").doc(Auth.currentUser.email).update({gender: gend, intro: intro})
        .then(e => window.location.reload())
        .catch(e => alert(e));
    }

    return(
      <Container style={{backgroundColor: "white", borderRadius:"15px", padding: "15px"}}>
        <Container style={{textAlign: "center"}}>
          <p><strong>User Profile</strong></p>
        </Container>
        <hr></hr>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder={props.name} disabled/>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder={props.email} disabled/>
            </Form.Group> 
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control 
                placeholder="It's the 21st century now, gender doesn't have to be selected"
                value={gend}
                onChange={e => setGend(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridIntroduction">
            <Form.Label>Briefly introduce yourself!</Form.Label>
            <Form.Control 
            as="textarea"
            value={intro}
            onChange={e => setIntro(e.target.value)}
            rows="4"
            />
          </Form.Group>
          <Button 
          variant="primary"
          onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }

  function Interests() {
    function FieldOfInterest({field}) {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const handleSave = () => {
        setShow(false);
        // save changes
      }

      // Pre-set this for every field of interest. 
      const options = [
        { label: "Pop", value: 0},
        { label: "Hip hop", value: 1 }
      ]
      const [selected, setSelected] = useState([]);
    
      return (
        <>
          <Button variant="primary" onClick={handleShow} block>
            {field}
          </Button>
    
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Select your favorite {field}!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
              />
              <br/>
              <Form.Control as="textarea" rows="5" placeholder="Descriptions and examples and stuff"/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    return (
      <Container style={{backgroundColor:"white", borderRadius:"15px", padding: "15px"}}>
        <Container style={{textAlign: "center"}}>
          <p><strong>Your Interests</strong></p>
        </Container>
        <hr></hr>

        <Row>
          <Col><FieldOfInterest field="Music" /></Col>
          <Col><FieldOfInterest field="Books" /></Col>
          <Col><FieldOfInterest field="Movies" /></Col>
        </Row>

      </Container>
    );
  }

  function Personalities() {
    function FieldOfInterest({field}) {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const handleSave = () => {
        setShow(false);
        // save changes
      }

      // Pre-set this for every field of interest. 
      const options = [
        { label: "Choice 1", value: 0},
        { label: "Choice 2", value: 1 }
      ]
      const [selected, setSelected] = useState([]);
    
      return (
        <>
          <Button variant="primary" onClick={handleShow} block>
            {field}
          </Button>
    
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{field}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description of {field}. </p>
              <p>More description of {field}. </p>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
              />
              <br/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    return (
      <Container style={{backgroundColor:"white", borderRadius:"15px", padding: "15px"}}>
        <Container style={{textAlign: "center"}}>
          <p><strong>Your Interests</strong></p>
        </Container>
        <hr></hr>

        <Row>
          <Col><FieldOfInterest field="Question 1" /></Col>
          <Col><FieldOfInterest field="Question 2" /></Col>
          <Col><FieldOfInterest field="Question 3" /></Col>
        </Row>

      </Container>
    );
  }

  function Feedback() {
    const [feedback, setFeedback] = useState(null);
    function handleSubmit(e){
      // do stuff
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
              as="textarea" rows="5" 
              placeholder="We'd love to hear your suggestions!"
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


