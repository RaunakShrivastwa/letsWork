import React from 'react';
import StatsCard from './StatsCard.jsx';
import './Stats.scss';

const StatsContainer = () => {
    const data = [{
        message: "Completed Project",
        value: "3000+"
    }, {
        message: "Countries Served",
        value: "70+"
    }, {
        message: "Hours of Coding",
        value: "150000+"
    }, {
        message: "Years of Business",
        value: "14+"
    }]

    return (
        <>
            <div class="row row-cols-1 row-cols-sm-2 g-5">
                {
                    data.map((item, index) => {
                        return <StatsCard key={index} message={item.message} value={item.value} />
                    })
                }
            </div>
        </>
    )
}

export default StatsContainer
