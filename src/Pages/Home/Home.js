import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Specalities from './Specialities/Specalities';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Specalities></Specalities>
    </div>
  );
};

export default Home;