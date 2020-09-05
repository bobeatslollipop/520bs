import React, { useState } from "react";
import Requests from './Requests'
import { Container, Jumbotron } from "react-bootstrap";

//In real practice, every user should have his own object
export default function Request() {
    var Chance = require('chance');
    var chance = new Chance();

    const [state, setState] = useState({
        requests: [],
    });

    //In real practice, it should take in a request object
    function addRequest(name, accuracy)  {
        const newRequest = {
            // id: chance.name(),
            id: chance.name(),
            accu: Math.floor((Math.random() * 100) + 1) + "%"
        }
        setState({requests: [...state.requests, newRequest]})
    }

    function delRequest(id){
        setState(
            {requests: [...state.requests.filter(
                request => request.id !== id
            )]}
        )
    }

    return (
      <Container style={{marginTop: "15px"}}>
        <Jumbotron>
            <h1>This is Request Page
            </h1>
            <button style = {btnStyle} onClick = {addRequest}>Generate Request</button>
            <Requests requests = {state.requests}
                      delRequest = {delRequest}/>
        </Jumbotron>
      </Container>

    )
}

const btnStyle = {
    background: "#0f4d92",
    color: "#fff",
    borderRadius: '50px',
    padding: "1px 15px",
    bordrRadius: "50%",
    cursor: "pointer",
    //float: "right"
}