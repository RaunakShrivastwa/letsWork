import React from 'react'
import Home from '../Home/Home';
import './Root.scss';
import HomeService from '../Home/Home_Service/HomeService';

function Root({theme}) {
  return (
      <div className={`vw-100 home_wrapper vh-100 overflow-y-auto ${theme}`}>
      <Home />
      <HomeService />
    </div>
  )
}

export default Root
