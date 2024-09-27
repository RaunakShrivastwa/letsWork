import React from 'react';
import './HomeService.scss';
import { BarChart, Battery, Rss } from 'react-feather';

function HomeService() {
    return (
        <div className='service_container  mb-5 d-flex gap-5'>
            <div className='card flex-grow-1 box_shadow'>card</div>
            <div className='phone col-md-2 custome_radius box_shadow custome_border'>
                <div className="mob_header custome_radius">
                    <div className='mid_camara p-1 px-2'>
                        <span className='f9'>09:22pm</span>
                        <p className='d-flex justify-content-end gap-3 flex-grow-1 align-items-center'>
                            <BarChart className='i11' />
                            <Rss className='i11 wifi' />
                            <Battery className='i11' />
                        </p>
                    </div>
                    <div className='screen'>body</div>
                    <div className='buttons'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeService
