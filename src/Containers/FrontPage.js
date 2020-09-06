import React, {useState} from 'react';
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck } from "react-bootstrap";

export default function FrontPage(props) {
  return (
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <h1>Welcome to Match & Guess!</h1>
        <p>Please log in to see more content. </p>
      </Jumbotron>
    </Container>
  );
}