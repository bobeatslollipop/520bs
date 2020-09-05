import React, { useState } from "react";
import Requests from './Requests'

//In real practice, every user should have his own object
export default function Request() {
    var Chance = require('chance');
    var chance = new Chance();

    const [state, setState] = useState({
        requests: [],
    });

    //In real practice, it should take in a request object
    function addRequest()  {
        const newRequest = {
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
        <div>
            <h1>This is Request Page
            </h1>
            <buttun style = {btnStyle} onClick = {addRequest}>Add Request</buttun>
            <Requests requests = {state.requests}
                      delRequest = {delRequest}/>
        </div>

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