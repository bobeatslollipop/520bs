import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

export default function NotFound(props) {
    return(
        <Jumbotron fluid>
          <Container>
            <h1>Oops!</h1>
              <p>
                The page you are looking for is not found!
              </p>
          </Container>
        </Jumbotron>
    );
}