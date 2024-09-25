import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='home_container'>

      <div className="home_items home_left">
        <p className='h5 f28'>Always Give, More than Expected</p>
        <h1 className='f60 overflow-hidden'>Best Web & Mobile App Development Company</h1>
        <p className='f20'>
          High Quality Web & Mobile Application Design & Development Solution, that will help you to achieve new heights in your business.
        </p>
      </div>

      <div className="home_items home_right">
        {/* <div className='p-4 wrapper'> */}
        <div className='items'>
          <img width={'100%'} src="./gardening.png" alt="" />
        </div>
        <div className='items bg-danger'>
          hello
          {/* <img width={'100%'} src="./gardening.png" alt="" /> */}
        </div>
        <div className='items'>
          <img width={'100%'} src="./gardening.png" alt="" />
        </div>
        <div className='items'>
          <img width={'100%'} src="./gardening.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home