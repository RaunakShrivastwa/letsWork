import React from 'react';
import './About.scss';

function About() {
    return (
        <div className='about_container mb-5'>
            <div className='about_img'>
                <img className='w-100' src="./home-page.png.webp" alt="" />
            </div>
            <div className='about_text'>
                <p className='about_btn f20'>About Us</p>
                <h2>Transforming Core Business Activities Digitally</h2>
                <p className='f20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos ducimus inventore rerum suscipit a molestias commodi, natus eveniet ipsum consequatur saepe, quidem labore fuga! Atque tempore corrupti cumque quaerat minima necessitatibus velit molestias dolor asperiores possimus, iste dolorem vitae accusamus, blanditiis sunt rem excepturi. Culpa esse, voluptatem exercitationem nostrum doloremque, nobis earum animi molestias possimus ipsa dolor et, consequatur nam ab dolorum autem suscipit voluptates voluptate pariatur. Perspiciatis, dignissimos!</p>
                <button className='get_in_touch_btn btn'>Get In Touch</button>
            </div>
        </div>
    )
}

export default About