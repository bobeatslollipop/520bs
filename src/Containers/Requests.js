import React, { Component } from 'react'
import RequestsItem from './RequestsItem'
import { Card, Accordion, Button } from 'react-bootstrap'

export class Requests extends Component {
  render() {
    var counter = 1;
    const btnstyle = {
      margin: "15px",
      marginLeft: "5px",
      marginBottom: "5px"
    }
    return (
      <Accordion defaultActiveKey="0">
        {this.props.requests.map(request =>
        (<Card>
          <Card.Header>
            Request from {request.id} with {request.accu} accuracy. 
            <Accordion.Toggle as={Button} variant="link" eventKey={counter}>
              Expand
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={counter++}>
            <Card.Body>
              Details of the request and the sender's guesses. 
              <br/> More details. <br/>
              <Button style={btnstyle} >Accept</Button>
              <Button style={btnstyle} variant="danger">Decline</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>))}
      </Accordion>
    );  
  }
}

export default Requests
