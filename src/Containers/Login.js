import React, { useState } from "react";
import { Button, Form, Container, Col, Jumbotron, Row } from "react-bootstrap";
import "./Login.css";
import { Auth } from "../firebase";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    Auth.signInWithEmailAndPassword(email, password)
    .catch(err => alert(err));
    setIsLoading(false);

    props.history.replace('/');
  }

  return (
    <Container style={{marginTop: "15px"}}>
      <Jumbotron><Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" bsSize="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </Form.Group>
              <Button
                block
                type="submit"
                disabled={isLoading||!validateForm()}
                >
                Login
                </Button>
          </Form>
        </Col>
        <Col></Col>
      
        </Row></Jumbotron>
    </Container>
  );
}
