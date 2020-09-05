import React, { useState, useEffect } from 'react';
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
import { Auth, getUserById } from './firebase';
import Request from './Containers/Request'
import NotFound from './Containers/ErrorPages/NotFound'
import AlreadyLoggedIn from './Containers/ErrorPages/AlreadyLoggedIn'
import NotLoggedIn from './Containers/ErrorPages/NotLoggedIn'
import Match from './Containers/Match';
import MatchUser from './Containers/Guess';
import Friends from './Containers/Friends';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  var user = Auth.currentUser;
  const emptydata = {
    name: null,
    email: null,
    gender: null,
    introduction: null
  };
  const [data, setData] = useState(emptydata)

  Auth.onAuthStateChanged(() => {
    if (Auth.currentUser !== user) {
      user = Auth.currentUser;
      setIsLoading(true);
    }
  });

  useEffect(() => {console.log("I'm here")
    if (user != null) {
      getUserById(user.email)
      .then(doc => {
        setIsLoading(false)
        setData(doc);
      }).catch(err => alert(err));
    } else {
      setIsLoading(false)
  }}, [isLoading]);

  console.log(user)
  console.log(isLoading)

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
        <Route exact path="/match" render={(props) => user ?
          <Match {...props} {...appProps} /> : <NotLoggedIn {...props} {...appProps} />}/>    
        <Route exact path="/guess" render={(props) => user ?
          <MatchUser {...props} {...appProps} /> : <NotLoggedIn {...props} {...appProps} />}/>   
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
        
      </Switch>
    );
  }
  
  return ( !isLoading &&
    <div className="App">
      {user ? <NavLoggedIn /> : <NavNotLoggedIn />}

      <Router>
        <Routes name={data.name} email={data.email} gender={data.gender} introduction={data.intro} />
      </Router>
    </div>
  );
}

function NavLoggedIn() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <img src={logo} className="logo"/>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/request" className="NavItem">Requests</Nav.Link>
          <Nav.Link href="/friends" className="NavItem">Friends</Nav.Link>
          <Nav.Link href="/match" className="NavItem">Match</Nav.Link>
          <Nav.Link href="/guess" className="NavItem">Guess</Nav.Link>
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
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login" className="NavItem">Log in</Nav.Link>
          <Nav.Link href="/signup" className="NavItem">Sign up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
