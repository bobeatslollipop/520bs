import React from 'react';
import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap'
import profile1 from './../profile1.jpg'
import profile2 from './../profile2.jpg'
import profile3 from './../profile3.jpg'

export default function Friends(props) {

  return(
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <h1 style={{marginBottom: "35px"}}>Friends</h1>
        <Row>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile1} />
              <Card.Body>
                <Card.Title>Bob</Card.Title>
                <Card.Text>
                  The brief self introduction of Bob. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile2} />
              <Card.Body>
                <Card.Title>Sam</Card.Title>
                <Card.Text>
                  The brief self introduction of Sam. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
          <Col><Card style={{ width: '18rem', height: '30rem' }} >
              <Card.Img variant="top" src={profile3} />
              <Card.Body>
                <Card.Title>Chen</Card.Title>
                <Card.Text>
                  The brief self introduction of Chen. 
                </Card.Text>
                <Button variant="primary">Contact info</Button>
              </Card.Body>
          </Card></Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}