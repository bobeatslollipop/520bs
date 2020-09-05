import React, { useState, useEffect } from "react";
import { Col, Row, Tab, Nav, Container, Route, Link, Jumbotron, Card, ListGroup, Form, Button, CardDeck, Modal } from "react-bootstrap";
import { useFormFields } from "../libs/hooksLib";
import "./Match.css";
import { Auth, changeUserMajor, changeUserIntro, changeUserResidence, changeFeedback } from "../firebase";
import { LogoutOutlined } from "@ant-design/icons";
import Feedback from "react-bootstrap/esm/Feedback";
import Select from "react-dropdown-select";
import MultiSelect from "react-multi-select-component"
import { getUserById } from '../firebase'
import MatchUser from './Guess'


export default function Match(props) {
  const [bobWindow, setBW] = useState(false)
  const [huaWindow, setHW] = useState(false)
  const [samWindow, setSW] = useState(false)
  
  console.log(props)
  
  return (
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <h1>Users that match you</h1>
        <p>Names and stuff</p>
      </Jumbotron>
    </Container>
  );


}