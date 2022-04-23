import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
  return (
    <div>
      <h2 className='text-center fs-2 my-5 border border-warning rounded bg bg-primary w-50 mx-auto text-white p-3'> Please Log In </h2>
      <Form className='w-50 mx-auto mt-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <p>If you are not register ? <Link className='check-register' to={'/register'}> Register here</Link></p>
  </Form.Group>
  <Button className='mx-auto w-100' variant="primary" type="submit">
   Log In
  </Button>
</Form>
    </div>
  );
};

export default LogIn;