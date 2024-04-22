import React from 'react';
import pic1 from './assets/images/cups/Rectangle 10.png';
import pic2 from './assets/images/cups/Rectangle 11.png';
import pic3 from './assets/images/cups/Rectangle 12.png';
import pic4 from './assets/images/cups/Rectangle 13.png';
import pic5 from './assets/images/cups/Rectangle 14.png';
import pic6 from './assets/images/cups/Rectangle 15.png';
import pic7 from './assets/images/cups/Rectangle 16.png';
import pic8 from './assets/images/cups/Rectangle 9.png';

const Gallery = () => {
    return (
        <div className="md:grid grid-cols-4 gap-5 mx-20 mb-20">
            <img className='w-[350px] h-[300px]' src={pic1} alt="Pic 1" />
            <img className='w-[350px] h-[300px]' src={pic3} alt="Pic 3" />
            <img className='w-[350px] h-[300px]' src={pic4} alt="Pic 4" />
            <img className='w-[350px] h-[300px]' src={pic5} alt="Pic 5" />
            <img className='w-[350px] h-[300px]' src={pic2} alt="Pic 2" />
            <img className='w-[350px] h-[300px]' src={pic6} alt="Pic 6" />
            <img className='w-[350px] h-[300px]' src={pic7} alt="Pic 7" />
            <img className='w-[350px] h-[300px]' src={pic8} alt="Pic 8" />
        </div>
    );
};

export default Gallery;