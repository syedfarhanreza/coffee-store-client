import React from 'react';
import logo from '../assets/images/logo/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image from '../assets/images/banner/24.jpg'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div>
            <div className='mx-20 grid grid-cols-5'>
                <div className='col-span-3'>
                    <div>
                        <img className='w-[60px] h-[60px]' src={logo} alt="" />
                        <h1 className='text-4xl rancho-regular font-bold text-[#331A15] mt-4 mb-4'>Espresso Emporium</h1>
                        <p className='mb-4'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4 text-[#331A15]'>
                            <FontAwesomeIcon icon={faFacebookF} size="2x" />
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />

                        </div>
                        <h2 className='text-3xl rancho-regular font-extrabold text-[#331A15] mt-4 mb-2'>Get in Touch</h2>

                        <div className='space-y-1'>
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +88 01533 333 333</p> 
                            <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 pt-14'>
                    <h1 className='text-3xl rancho-regular font-extrabold text-[#331A15] mt-4 ml-8'>Connect with Us</h1>
                    <div>
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Message" className="input input-bordered" required />
                            </div>
                            <div >
                                <button className="text-[#331A15] text-xl rancho-regular btn btn-outline border-2 border-[#331A15]">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", height: 40 }}>
                <p className='rancho-regular text-center text-white pt-2'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;