import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Friends(props) {

  return(
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <h1>Friends</h1>
        <p>This is supposed to be a list of friends you made with this app. </p>
        <Row>
          <Col><Card style={{ width: '18rem' }} fluid>
              <Card.Img variant="top" src='./logo.svg' />
              <Card.Body>
                <Card.Title>YourNameHere</Card.Title>
                <Card.Text>
                  The brief self introduction of YourNameHere. 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }} fluid>
              <Card.Img variant="top" src='./logo.svg' />
              <Card.Body>
                <Card.Title>YourNameHere</Card.Title>
                <Card.Text>
                  The brief self introduction of YourNameHere. 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem' }} fluid>
              <Card.Img variant="top" src='./logo.svg' />
              <Card.Body>
                <Card.Title>YourNameHere</Card.Title>
                <Card.Text>
                  The brief self introduction of YourNameHere. 
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card></Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}