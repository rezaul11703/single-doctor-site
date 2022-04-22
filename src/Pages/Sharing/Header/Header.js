import React from 'react';
import "./Header.css"
import logo from "../../../img/Home_pic.png"
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
      <Nav.Link as={Link} to="login">Log In</Nav.Link>
      <Nav.Link  as={Link} to="register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="blog">
        Blog
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;