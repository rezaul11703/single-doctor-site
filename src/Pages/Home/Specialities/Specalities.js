import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo6 from "../../../img/c7.png"
import logo7 from "../../../img/c8.png"
import logo8 from "../../../img/inf1.png"
import logo9 from "../../../img/n9.png"
import logo10 from "../../../img/ne10.png"
import logo11 from "../../../img/r1.png"

const Specalities = () => {
  return (
    <div className='my-3'>
       <Container className=' mb-5 '>
       <h2 className='text-center my-3'> Specialities</h2>
       <Row>
    <Col sm={2}>  
    <Card style={{ width: '12rem' , border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo6}/>
  <Card.Body >
    <Card.Title>Cardiology</Card.Title>
  </Card.Body>
</Card>
    </Col>
    <Col sm={2}>  
    <Card style={{ width: '12rem',border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo7}/>
  <Card.Body className='text-center'>
    <Card.Title>Pulmonology</Card.Title>
  </Card.Body>
</Card>
    </Col>
    <Col sm={2}>  
    <Card style={{ width: '12rem',border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo8}/>
  <Card.Body className='text-center'>
    <Card.Title>Infectious disease</Card.Title>
  </Card.Body>
</Card>
    </Col>
    <Col sm={2}>  
    <Card style={{ width: '12rem',border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo9}/>
  <Card.Body className='text-center'>
    <Card.Title>Nephrology</Card.Title>
  </Card.Body>
</Card>
    </Col>
    <Col sm={2}>  
    <Card style={{ width: '12rem',border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo10}/>
  <Card.Body className='text-center'>
    <Card.Title>Neurology</Card.Title>
  </Card.Body>
</Card>
    </Col>
    <Col sm={2}>  
    <Card style={{ width: '12rem',border:"none" }}>
  <Card.Img className="w-50 mx-auto" variant="top" src={logo11}/>
  <Card.Body className='text-center'>
    <Card.Title>Rheumatology</Card.Title>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
    </div>
    
  );
};

export default Specalities;