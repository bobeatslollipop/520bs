import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { UserOutlined } from '@ant-design/icons'

import Login from './Containers/Login'
import Home from './Containers/Home'
import Signup from './Containers/Signup'
import NotFound from './Containers/NotFound'
import logo from './logo.svg'
import UserCenter from './Containers/UserCenter';
import FrontPage from './Containers/FrontPage'
import { Auth } from './firebase';
import Request from './Containers/Request'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} className="logo"/>
          <Navbar.Brand href="/">520bs</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
            <Nav.Link href="/request">Request</Nav.Link>
          </Nav>
          <Nav className="mr-right">
            <Nav.Link href="/usercenter">
              User center
              <UserOutlined style={{ color: 'white', fontSize: "1.5em" }} className="userCenterIcon"/>
            </Nav.Link>
          </Nav>
        </Container>
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
      <Route exact path="/" render={(props) => Auth.currentUser ? 
        <Home {...props} {...appProps} /> : <FrontPage {...props} {...appProps} /> }/>
      <Route exact path="/login" render={(props) => <Login {...props} {...appProps} />}/>
      <Route exact path="/signup" render={(props) => <Signup {...props} {...appProps} />}/>
      <Route exact path="/usercenter" render={(props) => <UserCenter {...props} {...appProps} />}/>
      <Route exact path="/request" render={(props) => <Request {...props} {...appProps} />}/>
      
      
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
      
    </Switch>
  );
}

export default App;
