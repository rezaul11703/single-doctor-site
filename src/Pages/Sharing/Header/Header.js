import React from 'react';
import "./Header.css"
import logo from "../../../img/Home_pic.png"
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user]=useAuthState(auth)
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth)
    navigate('/login')
  }
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"> 
  <div className='d-flex'>
  <img src={logo}/> 
  <div className='ms-3 gap-2'>
  <p>DMJH</p> 
   <small>HEALTH CARE</small>
  </div>
  </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link  as={Link} to="appoinment">
        Appoinment
      </Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="blog">
        Blog
      </Nav.Link>
      { !user ? <Nav.Link as={Link} to="login">Log In</Nav.Link>
      :
      <Button onClick={handleSignout}> SignOut</Button>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;