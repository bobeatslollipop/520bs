import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

export default function NotFound(props) {
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if (!counter) {
    props.history.replace("/")
  }

  return(
      <Jumbotron fluid>
        <Container>
          <h1>Oops!</h1>
            <p>
              This page requires you to log in first!
            </p>
            <br/>
            <p>
              Redirecting to front page in {counter} seconds...
            </p>
        </Container>
      </Jumbotron>
  );
}