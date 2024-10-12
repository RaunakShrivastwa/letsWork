import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Testimonial() {
    const testimonialData = [
        {
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2017/12/Layer-22.jpg',
            name: 'Laura',
            description: 'Founder, Finding Trusted Care',
            aboutUs: 'This development team cares about the customer and does everything to make their clients happy and satisfied with their work. They deliver on their promises, no matter how long it takes, and provide daily, detailed updates of their work upon request.'
        },
        {
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2018/12/Layer-4.jpg',
            name: 'John',
            description: 'CEO, Trusted Partners',
            aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
        },
        {
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2017/11/Layer-1.jpg',
            name: 'Anna',
            description: 'CTO, Innovative Solutions',
            aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
        }
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container my-5">
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={true} className='p-4 border border-4 border-dark rounded-lg' >
                {
                    testimonialData.map((data, idx) => (
                        <Carousel.Item key={idx}>
                            <div class="row g-4">
                                <div class="col-sm-6 col-md-4">
                                    <div class="card h-100 p-0 bg-transparent border border-0">
                                        <div class="card-body m-0 p-0 bg-transparent border border-0">
                                            <img src={data.imageUrl} alt={data.name} className='w-100 h-100' style={{ borderRadius: '10%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-8 ">
                                    <div className="card h-100 p-0 border border-0 bg-transparent ">
                                        <div className="card-body border border-0">
                                            <h1 className="card-title fw-bold display-4">{data.name}</h1>
                                            <p className="card-text text-danger f16">{data.description}</p>
                                            <p className="f18">{data.aboutUs}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Testimonial;


/* 
    <img
        className = "d-block w-100 h-100"
        src = { data.imageUrl }
        alt = { data.name }
        style = {{ objectFit: 'cover' }}
    />
    < Carousel.Caption >
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>{data.aboutUs}</p>
    </Carousel.Caption >

*/