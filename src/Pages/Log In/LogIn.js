import  { React,useRef, useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LogIn.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';

const LogIn = () => {
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const emailName= useRef('')
  const passNum= useRef('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth)
  const handleLogin= (e)=>{
    e.preventDefault()
      const email= emailName.current.value
      const pass= passNum.current.value   
    signInWithEmailAndPassword(email,pass) 
    if(loading){
      return <Spinner animation="border"/>
    }
    if(user){
     return navigate(from, { replace: true });
    }
    if(error){
      return alert('Wrong PassWard !!! Please Enter the right one and Try again')
    }
    
  }
  const ResetPassward =()=>{
    const resetEmail=emailName.current.value
    sendPasswordResetEmail(resetEmail)
  }
  

  return (
    <div>
      <h2 className='text-center fs-2 my-5 border border-warning rounded bg bg-primary w-50 mx-auto text-white p-3'> Please Log In </h2>
      <Form onSubmit={handleLogin} className='w-50 mx-auto mt-4'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailName} type="email" placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passNum} type="password" placeholder="Password" required/>
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