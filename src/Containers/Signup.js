import React, { useState } from "react";
import { Button, Form, Jumbotron, Row, Col, Container } from "react-bootstrap";
import "./Signup.css";
import { Auth, db } from "../firebase"

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}
  
export default function Signup(props) {
  /*Auth.onAuthStateChanged(() => {
    if (Auth.currentUser) {
      alert("Already logged in!");
      props.history.replace('/');
    }
  });*/

  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.name.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function createUserData() {
    db.collection("Users").doc(fields.email).set({
      name: fields.name,
      email: fields.email
    }).then(() => {
      alert("User '" +fields.name + "' created with email '" + fields.email +"'");
      props.history.replace("/");
    })
    .catch(e => {
      console.error("Error storing data; " + e);
      alert(e);
      setIsLoading(false);
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  
    Auth.createUserWithEmailAndPassword(fields.email, fields.password)
    .then(createUserData)
    .catch(e => {
      console.error("Error creating user; " + e);
      alert(e);
      setIsLoading(false);
    });

    props.history.replace('/');
  }

  return (
    <Container style={{marginTop: "15px"}}>
      <Jumbotron><Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" bsSize="large">
              <Form.Label>Name</Form.Label>
              <Form.Control
                autoFocus
                type="name"
                value={fields.name}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="email" bsSize="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword" bsSize="large">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleFieldChange}
                value={fields.confirmPassword}
              />
            </Form.Group>
            <Button
              block
              type="submit"
              disabled={isLoading||!validateForm()}
            >
              Signup
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row></Jumbotron>
    </Container>
  );
}