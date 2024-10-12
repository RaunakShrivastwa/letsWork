import React from 'react'
import './Root.scss';
import HomeService from '../Home/Home_Service/HomeService';
import WhyUs from '../Home/WhyUs/WhyUs';
import Home from '../Home/FirstLook/Home';
import About from '../Home/About/About';
import Roadmap from '../Home/Roadmap/Roadmap';
import Testomonial from '../Home/Testomonial/Testomonial';

function Root({theme}) {
  return (
      <div className={`vw-100 home_wrapper py-5 vh-100 bg-primary overflow-y-auto ${theme}`}>
      <Home />
      <WhyUs />
      <HomeService />
      <About />

      <Roadmap />
      <Testomonial />
    </div>
  )
}

export default Root
