import React from 'react'
import './Root.scss';
import HomeService from '../Home/Home_Service/HomeService';
import WhyUs from '../Home/WhyUs/WhyUs';
import Home from '../Home/FirstLook/Home';
import About from '../Home/About/About';
import Roadmap from '../Home/Roadmap/Roadmap';
import OurArea from '../Home/OurArea/OurArea';
import Blog  from '../Blog/Blog';
import Contact from '../Home/Contact/Contact';

function Root({theme}) {
  return (
      <div className={`vw-100 home_wrapper py-5 vh-100 bg-primary overflow-y-auto ${theme}`}>
        <div className='social_connect'>
              <div className='social_connect_item'>
                  <img className='social' src="./social.png" alt="" />
                  <img className='social' src="./telegram.png" alt="" />
              </div>
              <div className='social_connect_item'></div>
              <div className='social_connect_item'></div>
        </div>
      {/* <Home />
      <WhyUs />
      <HomeService />
      <About />
      <Roadmap />
      <OurArea /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}

export default Root
