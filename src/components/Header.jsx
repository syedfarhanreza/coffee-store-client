import React from 'react';
import logo from '../assets/images/logo/logo1.png';
import image from '../assets/images/banner/15.jpg';
import banner from '../assets/images/banner/3.png';
import icon1 from '../assets/images/icons/1.png';
import icon2 from '../assets/images/icons/2.png';
import icon3 from '../assets/images/icons/3.png';
import icon4 from '../assets/images/icons/4.png';

const Header = () => {
    return (
        <div className='mb-20' >
            <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", height: 80 }} className='h-[120px] flex justify-center'>
                <img className='w-[60px] h-[60px] mt-1 mr-2' src={logo} alt="" />
                <h1 className='text-4xl rancho-regular text-center text-white mt-4'>Espresso Emporium</h1>
            </div>
            <div className='flex justify-end' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 700 }} >
                <div className='w-[724px] h-[224px] pt-64'>
                    <h1 className='text-white text-4xl rancho-regular mb-2'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-base-100 mb-2'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn rancho-regular  text-[#331A15] text-xl bg-[#E3B577] flex items-center'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className='flex justify-center gap-5 mx-20 py-10'>
                    <div className='space-y-2'>
                        <img src={icon1} className='w-[60px]' alt="" />
                        <h1 className='rancho-regular text-3xl'>Awesome Aroma</h1>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon2} className='w-[60px]' alt="" />
                        <h1 className='rancho-regular text-3xl'>High Quality</h1>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon3} className='w-[60px]' alt="" />
                        <h1 className='rancho-regular text-3xl'>Pure Grades</h1>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='space-y-2'>
                        <img src={icon4} className='w-[60px]' alt="" />
                        <h1 className='rancho-regular text-3xl'>Proper Roasting</h1>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;