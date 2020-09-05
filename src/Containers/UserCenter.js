import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck, Modal } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./UserCenter.css";
import { Auth, changeUserMajor, changeUserIntro, changeUserResidence, changeFeedback } from "../firebase";
import { LogoutOutlined } from "@ant-design/icons";
import Feedback from "react-bootstrap/esm/Feedback";
import Select from "react-dropdown-select";
import MultiSelect from "react-multi-select-component"


export default function UserCenter(props) {
  return (
    <Container>
      <Jumbotron style={{marginTop: "25px"}} className="UserCenter">
        <h1 style={{textAlign: "center", marginBottom: "3%"}}>User Center</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="NavList" style={{height: "85%"}}>
              <Nav variant="pills" className="flex-column">
                <Nav.Link eventKey="first">User Profile</Nav.Link>

                <Nav.Link eventKey="second" >你的人设</Nav.Link>

                <Nav.Link eventKey="third" >Feedback</Nav.Link>
              </Nav>
            </Col>
            
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><Profile/></Tab.Pane>

                <Tab.Pane eventKey="second"><Information/></Tab.Pane>

                <Tab.Pane eventKey="third"><Feedback/></Tab.Pane>
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
           <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Placeholder name" disabled/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={Auth.currentUser.email} disabled/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridMajor">
            <Form.Label>Country of residence</Form.Label>
            <Select options={Countries} placeholder={props.userMajor} />
          </Form.Group>

          <Form.Group controlId="formGridIntroduction">
            <Form.Label>Introduce Yourself</Form.Label>
            <Form.Control 
            placeholder={props.userIntro}
            onChange={e=>{setIntro(e.target.value);}}
             />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check this" />
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

  function Information() {
    function FieldOfInterest({field}) {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const handleSave = () => {
        setShow(false);
        // save changes
      }

      // Make this an import
      const options = [
        { label: "Pop", value: 0},
        { label: "Hip hop", value: 1 }
      ]
      const [selected, setSelected] = useState([]);
      console.log(selected)
    
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
                labelledBy={"Select up to 5 items"}
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
          <p><strong>你的人设</strong></p>
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


