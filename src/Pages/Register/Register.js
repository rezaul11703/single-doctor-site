import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Log In/LogIn.css'

const Register = () => {
  const navigate = useNavigate()
  
    const [agree,setAgree]=useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
   const setRegEmail=(event)=>{
     setEmail(event.target.value)
   }
   const setPass=(event)=>{
      setPassword(event.target.value)}
     
   const handleRegister= (event) =>{
     event.preventDefault()
     //for creating new user
     createUserWithEmailAndPassword(email, password)
     // for sentEmailveirfcation

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <Spinner animation="grow" />;
    }
    if (user) {
      navigate('/login')
      alert("Successfully registered")
    }

  }
    
  return (
    <div>
     <h2 className='text-center fs-2 my-5 border border-warning rounded bg bg-primary w-50 mx-auto text-white p-3'> Please Register </h2>
     <Form className='w-50 mx-auto mt-4' onSubmit={handleRegister}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={setRegEmail} type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={setPass} type="password" placeholder="Password" required />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter your Village,Upazilla, District, Division" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

    <input onClick={()=>setAgree(!agree)} type='checkbox' id='terms' className='my-4'/>
    <label  className={`ps-2 ${agree? 'text-primary':'text-danger'}`} htmlFor='terms'>Accept All terms and Conditions</label>
    <p>If already Registered ? <Link className='check-register' to={'/login'}> LogIn Here</Link></p>
  <Button disabled={!agree} className='mx-auto w-100' variant="primary" type="submit">
    Register
  </Button>
</Form>
    </div>
  );
};

export default Register;