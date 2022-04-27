import React from 'react';
import logo5 from "../../img/5.png"
import "../Home/DoctorsBlog.js/DoctorsBlog.css"

const About = () => {
  return (
    <div className='text-center mx-auto'>
      <div className='my-5'>
         <img src={logo5}/> </div>
      <div className='my-3'>
        <h2>About My Self</h2> 
        <p className='container w-50 mx-auto text-center fs-4'>
         Hi , This is Md. Rezaul Karim . I am learning React , Firebase , routes . I am Looking forward to learn database and make my self in a best try for the junior Developer as well as a qualitiful and skillful Web developer in the future. 
 </p>
        
      </div>
    </div>
  );
};

export default About;