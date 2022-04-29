import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo12 from '../../../img/google.png'
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate= useNavigate()
  const HandleLoginGoogle =()=>{
    signInWithGoogle()
    if (error){
      return alert("Please Try again")
    }
    if (loading){
        return <Spinner animation="border"/>
    }
    if(user){
     return navigate('/') 
    }
  }

  return (
    <div>
      <Button className='container w-80' variant="dark" onClick={HandleLoginGoogle}>
    <div>
    <img src={logo12}/>
     <span> Sign in with Google</span>
    </div>
    </Button>{' '}
    </div>
  );
};

export default SocialLogin;