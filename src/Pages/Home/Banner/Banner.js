import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from "../../../img/1.png"
import logo1 from "../../../img/2.png"
import logo2 from "../../../img/3.jpg"
import logo3 from "../../../img/4.jpg"
import logo4 from "../../../img/doctor.png"
import "./Banner.css"

const Banner = () => {
    const navigate = useNavigate()
  const DoctorDescription = ()=>{
        navigate('/doctorsBlog')
  }
  return (
    <div>
      <Container>
  <Row>
    <Col sm={6}>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo1}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
</Col>
    <Col sm={6} className="profile-description">
    <div>
         <img src={logo4}/> </div>
      <div>
        <h2>Information About Consultant</h2> 
        <p>Dr. Mohammad Jahangir Talukder is a reputed Internal Medicine specialist in Bangladesh. He is experienced in the treatment of Acute medical emergency, Respiratory, Endocrine, and Infectious diseases.......... </p>
        <Button onClick={DoctorDescription} variant="info">Click here for Details</Button>{' '}
      </div>  
      </Col>
  </Row>
  </Container>
    </div>
  );
};

export default Banner;