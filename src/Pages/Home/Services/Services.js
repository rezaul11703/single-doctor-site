import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo5 from '../../../img/5.jpg'
import logo6 from '../../../img/6.jpg'
import logo7 from '../../../img/7.jpg'
const Services = () => {
  return (
    <div>
      <Container className='my-5'>
      <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo5} />
  <Card.Body>
    <Card.Title>Make An Appoinment</Card.Title>
    <Card.Title>Price : $10 </Card.Title>
    <Card.Text>
      Here You can Book an appoinment to meet with me Physically.
    </Card.Text>
    <Button as={Link} to ={'/appoinment'} variant="primary">Click for booking</Button>
  </Card.Body>
</Card>
</Col>

    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo6} />
  <Card.Body>
    <Card.Title>Make An Audio Consultation</Card.Title>
    <Card.Title>Price : $20 </Card.Title>
    <Card.Text>
      Here You can Book an audio consultation and a primay level treatment .
    </Card.Text>
    <Button as={Link} to ={'/appoinment'} variant="primary">Click for booking</Button>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={logo7} />
  <Card.Body>
    <Card.Title>Make A Video Consultation</Card.Title>
    <Card.Title>Price : $30 </Card.Title>
    <Card.Text>
      Here You can talk with me through video conference and make a medicine consultancy with a proper prescribed medicine and also if you are a old patient of mine you can show your report .
    </Card.Text>
    <Button as={Link} to ={'/appoinment'} variant="primary">Click for booking</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
</Container>
    </div>
  );
};

export default Services;