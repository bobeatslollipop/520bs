import React, {useState} from 'react';
import Request from './Request'
import Modal from 'react-modal'
import firebase from './../firebase';
import Match from "./Components/Match"
import { Col, Row, Nav, Container, Jumbotron, Card, ListGroup, Form, Button } from "react-bootstrap";
import profile1 from './../profile4.jpg'
import profile2 from './../profile5.jpg'
import profile3 from './../profile6.jpg'

export default function Home(props) {
  const [requestWindow, setRW] = useState(false)
  const [matchWindow, setMW] = useState(false)
  const [contactWindow, setCW] = useState(false)

  const handleMore = () => props.history.replace('/match');
  
  return (
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <Row>
          <Col>
            <h1>Welcome, {props.name}!</h1>
          </Col>
          <Col>
            <Form inline>
              <Form.Control type="text" placeholder="Search people" style={{width: "70%"}} />
              <Button variant="success">Search</Button>
            </Form>
          </Col>
        </Row>
        <hr/>
        <h2 style={{margin: '25px', marginLeft: '0'}}>People you might want to know</h2>
        <Button style={{ float: 'right'}} onClick={handleMore}>More></Button>
        <Row>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile1} />
              <Card.Body>
                <Card.Title>Dan</Card.Title>
                <Card.Text>
                  The brief self introduction of Dan. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile2} />
              <Card.Body>
                <Card.Title>Tony</Card.Title>
                <Card.Text>
                  The brief self introduction of Tony. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile3} />
              <Card.Body>
                <Card.Title>Andrew</Card.Title>
                <Card.Text>
                  The brief self introduction of Andrew. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
        </Row>

        <Modal isOpen={requestWindow} onRequestClose={() => setRW(false)}>
          <Request/>
          <button onClick = {()=>setRW(false)}>Close</button>
        </Modal>

        <Modal isOpen={contactWindow} onRequestClose={() => setCW(false)}>
          <Nav.Link href="/request" className="NavItem">Friends</Nav.Link>
          <button onClick = {()=>setCW(false)}>Close</button>
        </Modal>

        <Modal isOpen={matchWindow} onRequestClose={() => setMW(false)}>
          <Match/>
          <button onClick = {()=>setMW(false)}>Close</button>
        </Modal>

      </Jumbotron>
    </Container>
  );
}