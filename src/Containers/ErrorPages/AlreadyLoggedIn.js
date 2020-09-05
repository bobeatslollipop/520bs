import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'

export default function AlreadyLoggedIn(props) {
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
    <Container style={{marginTop: "15px"}}>
      <Jumbotron>
        <h1>Oops!</h1>
        <p>
          You are already logged in!
        </p>
        <br/>
        <p>
          Redirecting to home page in {counter} seconds...
        </p>
      </Jumbotron>
      </Container>
  );
}