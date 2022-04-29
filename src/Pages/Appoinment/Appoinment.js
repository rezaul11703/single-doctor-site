import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Appoinment = () => {
  const [submit,setSubmit]= useState(false)
  const navigate= useNavigate()
const handleInfoSubmit=event=>{
  event.preventDefault()
  if(true){
      navigate('/')
    return alert('Thank you For Your Response')
  }

}
  return (
    <Form className='container w-50 mx-auto my-3' onSubmit={handleInfoSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Full Name</Form.Label>
    <Form.Control type="Name" placeholder="Enter Your Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea" label="Describe Your Problem" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <Button variant="primary"  type="submit">
    Submit
  </Button>
</Form>
  );
};

export default Appoinment;