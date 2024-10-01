import React from 'react'
import './Root.scss';
import HomeService from '../Home/Home_Service/HomeService';
import WhyUs from '../Home/WhyUs/WhyUs';
import Home from '../Home/FirstLook/Home';
import About from '../Home/About/About';

function Root({theme}) {
  return (
      <div className={`vw-100 home_wrapper vh-100 bg-primary p-4 overflow-y-auto ${theme}`}>
      <Home />
      <WhyUs />
      <HomeService />
      <About />
    </div>
  )
}

export default Root
