import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LogIn = () => {
  const navigate=useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const reference = useRef()
  const emailName= reference.current.value
  const passNum=reference.current.value 
  const handleLogin= (e)=>{
    e.preventDefult()
    signInWithEmailAndPassword(emailName,passNum)
    if(user){
      navigate('/home')
    }
  }

  return (
    <div>
      <h2 className='text-center fs-2 my-5 border border-warning rounded bg bg-primary w-50 mx-auto text-white p-3'> Please Log In </h2>
      <Form onSubmit={handleLogin} className='w-50 mx-auto mt-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  ref={emailName} type="email" placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  ref={passNum} type="password" placeholder="Password" required/>
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