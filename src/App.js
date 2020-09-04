import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Login from './Containers/Login'
import Home from './Containers/Home'
import Signup from './Containers/Signup'
import NotFound from './Containers/NotFound'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
           <img src={logo} class="logo"/>
        <Navbar.Brand href="/">520bs</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Log in</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Router>
        <Routes />
      </Router>
      
    </div>
  );
}

function Routes(appProps) {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} {...appProps} />}/>
      <Route exact path="/login" render={(props) => <Login {...props} {...appProps} />}/>
      <Route exact path="/signup" render={(props) => <Signup {...props} {...appProps} />}/>

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
      
    </Switch>
  );
}

export default App;
