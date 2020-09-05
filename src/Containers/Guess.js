import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck, Modal } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./UserCenter.css";
import { Auth } from "../firebase";
import { LogoutOutlined } from "@ant-design/icons";
import Feedback from "react-bootstrap/esm/Feedback";
import Select from "react-dropdown-select";
import MultiSelect from "react-multi-select-component"
import { getUserById } from '../firebase'


export default function Guess(props) {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    getUserById(Auth.currentUser.email)
    .then(doc => {
      setData(doc);
      setIsLoading(false);
    }).catch(err => alert(err));
  }, [])

  return (
    <Container>
      <Jumbotron style={{marginTop: "15px"}} className="MatchUser">
        <h1 style={{textAlign: "center", marginBottom: "3%"}}>Let's Guess</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="NavList" style={{height: "85%"}}>
              <Nav variant="pills" className="flex-column">

                <Nav.Link eventKey="interests" >Her/His interests</Nav.Link>

                <Nav.Link eventKey="personalities" >Her/His personalities</Nav.Link>

              </Nav>
            </Col>
            
            <Col sm={9}>
              <Tab.Content>

                <Tab.Pane eventKey="interests"><Interests /></Tab.Pane>

                <Tab.Pane eventKey="personalities"><Interests /></Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

      </Jumbotron>
    </Container>
  );



  function Interests() {
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
    
      return (
        <>
          <Button variant="primary" onClick={handleShow} block>
            {field}
          </Button>
    
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Select your guess for {field}!</Modal.Title>
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
          <p><strong>Her/his Interests</strong></p>
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



}


