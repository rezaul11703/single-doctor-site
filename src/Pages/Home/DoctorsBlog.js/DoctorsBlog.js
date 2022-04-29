import React from 'react';
import logo4 from "../../../img/doctor.png"
import "./DoctorsBlog.css"

const DoctorsBlog = () => {
  return (
    <div className='text-center mx-auto mt-5'>
      <div>
         <img src={logo4}/> </div>
      <div className='container w-50 mx-auto text-center fs-4'>
        <h2>Information About Consultant</h2> 
        <p>
          Dr. Mohammad Jahangir Talukder is a reputed Internal Medicine specialist in Bangladesh. He is experienced in the treatment of Acute medical emergency, Respiratory, Endocrine, and Infectious diseases. He has a long 40 years’ experience in this field. He successfully completed his MBBS from MAG Osmani Medical College, Sylhet under Chittagong University in 1978. After he successfully finished his internship at Sir Salimullah Medical College. He was served as a medical consultant for 7 years under the Ministry of Health, Bangladesh. He worked in the Ministry of Health Saudi Arabia from 1986-2001. After he joined Al Rass General Hospital in 2001 and worked till 2008. In these 8 years, he has gained experience in the field of Cardiology, Neurology, Pulmonology, Infectious disease, Rheumatology, Nephrology, Intensive Care, A&E, and Toxicology.
 </p>
        
      </div>
    </div>
  );
};

export default DoctorsBlog;