import React from 'react';
import './WhyUs.scss';

function WhyUs() {
    return (
        <div className='mb-4 why_us_container'>
            <div className='right_text'>
                <h1 className='f40'>Why <br />
                    Next Big Technology?</h1>
                <p className='f18'>Next Big Technology Provides top notch Web and Mobile App Solutions, we develop high quality and innovative Web and Mobile Applications which can be easily stand out in competitive market. Our Developers Work on latest and trending technologies and we always deliver requirement specific and user centric applications as per The business needs.

                    Next Big Technology Provides top notch Web and Mobile App Solutions, we develop high quality and innovative Web and Mobile Applications which can be easily stand out in competitive market.</p>
            </div>

            <div className='left_card'>
                <div className='left_items custome_radius box_shadow'>
                    <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Completed-Project.png" alt="" />
                    <h2>100+</h2>
                    <span>Completed Projects</span>
                </div>
                <div className='left_items custome_radius box_shadow'>
                    <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Countries-Served.png" alt="" />
                    <h2>10+</h2>
                    <span>Country Served</span>
                </div>

                <div className='left_items custome_radius box_shadow'>
                    <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png" alt="" />
                    <h2>100000+</h2>
                    <span>hour of coding</span>
                </div>

                <div className='left_items custome_radius box_shadow'>
                    <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Hours-of-Coding.png" alt="" />
                    <h2>2+</h2>
                    <span>Years of Business</span>
                </div>
            </div>
        </div>
    )
}

export default WhyUs