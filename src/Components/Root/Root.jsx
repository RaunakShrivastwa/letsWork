import React from 'react'
import Home from '../Home/Home';
import './Root.scss';
import HomeService from '../Home/Home_Service/HomeService';
import WhyUs from '../Home/WhyUs/WhyUs';

function Root({theme}) {
  return (
      <div className={`vw-100 home_wrapper vh-100 bg-primary p-4 overflow-y-auto ${theme}`}>
      <Home />
      <WhyUs />
      <HomeService />
    </div>
  )
}

export default Root
