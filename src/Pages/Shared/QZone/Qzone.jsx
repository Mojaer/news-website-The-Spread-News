import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div>
            <img className='mb-2 w-100' src={QZone1} alt="img" />
            <img className='mb-2 w-100' src={QZone2} alt="img" />
            <img className='mb-2 w-100' src={QZone3} alt="img" />
        </div>
    );
};

export default Qzone;