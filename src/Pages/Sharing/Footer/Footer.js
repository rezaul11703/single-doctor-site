import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='fixed-bottom mt-5' >
      <Navbar bg="dark">
    <Container  >
    <Row>
    <Col sm><Navbar.Brand className="text-white fs-6 text-center" > Contact Us : # 120,Dhanmondi gate, Dhaka -1216 , Mobile No: 07117459006   </Navbar.Brand>
    </Col>
    <Col sm>
    <Navbar.Brand className="text-white fs-6 text-center" > Copright @ {new Date().getFullYear()}  All right reserves to DMJH Health Point  </Navbar.Brand>
    </Col>
  </Row>
    
      
      
    </Container>
  </Navbar>
    </footer>
  );
};

export default Footer;