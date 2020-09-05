import React, { useState } from "react";
import Matchs from './Matchs'
import { Container, Jumbotron } from "react-bootstrap";

export default function Match() {
    var Chance = require('chance');
    var chance = new Chance()

    function delResult(id){
        setState(
            {results: [...state.results.filter(
                result => result.id !== id
            )]}
        )
    }

    function refresh(){
        setState({results:
            [
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                }
            ]
        })
    }


    const [state, setState] = useState(
        {
            results:[
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                },
                {
                    id: chance.name(),
                    per: Math.floor((Math.random()*10 + 90)) + "%"
                }
            ]
        }
    )

    


    return (
        <Container style={{marginTop: "15px"}}>
            <Jumbotron>
                <h1>Match Result:</h1>
                <button onClick = {refresh}>Refresh</button>
                <Matchs results = {state.results}
                        refresh = {refresh}/>
            </Jumbotron>
        </Container>
    )
}
