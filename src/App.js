import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { UserOutlined } from '@ant-design/icons'

import Login from './Containers/Login'
import Home from './Containers/Home'
import Signup from './Containers/Signup'
import logo from './logo.svg'
import UserCenter from './Containers/UserCenter';
import FrontPage from './Containers/FrontPage'
import { Auth } from './firebase';
import Request from './Containers/Request'
import NotFound from './Containers/ErrorPages/NotFound'
import AlreadyLoggedIn from './Containers/ErrorPages/AlreadyLoggedIn'
import NotLoggedIn from './Containers/ErrorPages/NotLoggedIn'
import Friends from './Containers/Friends';

export default function App() {
  const [user, setUser] = useState(Auth.currentUser)
  Auth.onAuthStateChanged(() => {
    if (Auth.currentUser != user)
      setUser(Auth.currentUser);
  });

  function Routes(appProps) {
    return (
      <Switch>
        <Route exact path="/" render={(props) => user ? 
          <Home {...props} {...appProps} /> : <FrontPage {...props} {...appProps} /> }/>
        <Route exact path="/login" render={(props) => user ? 
          <AlreadyLoggedIn {...props} {...appProps} /> : <Login {...props} {...appProps} />}/>
        <Route exact path="/signup" render={(props) => user ?
          <AlreadyLoggedIn {...props} {...appProps} /> : <Signup {...props} {...appProps} />}/>
        <Route exact path="/usercenter" render={(props) => user ? 
          <UserCenter {...props} {...appProps} /> : <NotLoggedIn {...props} {...appProps} />} />
        <Route exact path="/request" render={(props) => user ?
          <Request {...props} {...appProps} /> : <NotLoggedIn {...props} {...appProps} />}/>
        <Route exact path="/friends" render={(props) => user ?
          <Friends {...props} {...appProps} /> : <NotLoggedIn {...props} {...appProps} />}/>
        
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
        
      </Switch>
    );
  }
  
  return (
    <div className="App">
      {user ? <NavLoggedIn /> : <NavNotLoggedIn />}

      <Router>
        <Routes />
      </Router>
    </div>
  );
}

function NavLoggedIn() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="logo"/>
        <Navbar.Brand href="/">520bs</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/request" className="NavItem">Requests</Nav.Link>
          <Nav.Link href="/friends" className="NavItem">Friends</Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Link href="/usercenter" className="NavItem">
            User center
            <UserOutlined style={{ color: 'white', fontSize: "1.5em" }} className="userCenterIcon"/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function NavNotLoggedIn() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="logo"/>
        <Navbar.Brand href="/">520bs</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login" className="NavItem">Log in</Nav.Link>
          <Nav.Link href="/signup" className="NavItem">Sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
