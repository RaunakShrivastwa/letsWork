import React from 'react';
import './HomeService.scss';

function HomeService() {
    return (
        <div className='w-100 d-flex flex-column gap-4 mt-5 mb-5 parent' >
            <p className='h3'>Our Services</p>
            <div className='home_service'>
                <div className="service_items box_shadow custome_radius">item-1</div>
                <div className="service_items box_shadow custome_radius">item-2</div>
                <div className="service_items box_shadow custome_radius">item-3</div>
                <div className="service_items box_shadow custome_radius">item-4</div>
                <div className="service_items box_shadow custome_radius">item-4</div>
            </div>

        </div>
    )
}

export default HomeService