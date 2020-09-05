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
              The page you are looking for is not found!
            </p>
            <p>
            Redirecting to front page in {counter} seconds...
          </p>
        </Container>
      </Jumbotron>
  );
}