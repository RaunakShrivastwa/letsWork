import React from 'react'
import './Member.scss';


const Member = () => {
  return (
    <div className="member d-flex bg-danger">
      <img className='box_shadow' src="http://localhost:3000/programming.png" alt="" />
      <img className='box_shadow'
        src="https://cdn-icons-png.flaticon.com/256/8904/8904881.png"
        alt=""
      />

      <img className='box_shadow'
        src="https://lets-work-two.vercel.app/new-Mask-group-3.webp"
        alt=""
      />
    </div>
  );
}

export default Member