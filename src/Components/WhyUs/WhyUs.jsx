import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhyUs.scss';

import WhyUsContent from './content/WhyUsContent.jsx';
import StatsContainer from './stats/StatsContainer.jsx';

const WhyUs = () => {
    return (
        <>
            <div className='containers container-xxl'>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100 border border-0 bg-transparent">
                            <WhyUsContent />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border border-0 bg-transparent">
                            <StatsContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs;