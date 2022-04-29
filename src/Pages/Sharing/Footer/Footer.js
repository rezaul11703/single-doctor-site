import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='fixed-bottom mt-5' >
      <Navbar bg="dark">
    <Container >
    <Navbar.Brand className="text-white fs-6" > Contact Us : # 120,Dhanmondi gate, Dhaka -1216 , Mobile No: 07117459006   </Navbar.Brand>
      <Navbar.Brand className="text-white fs-6" > Copright @ {new Date().getFullYear()}  All right reserves to DMJH Health Point  </Navbar.Brand>
      
    </Container>
  </Navbar>
    </footer>
  );
};

export default Footer;