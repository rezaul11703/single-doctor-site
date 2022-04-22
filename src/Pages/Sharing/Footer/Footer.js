import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='fixed-bottom' >
      <Navbar bg="dark">
    <Container >
      <Navbar.Brand className="text-white fs-6" >Copright @</Navbar.Brand>
    </Container>
  </Navbar>
    </footer>
  );
};

export default Footer;