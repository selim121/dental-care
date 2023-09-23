import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Footer.css';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div className="hero footer-bg max-w-screen-2xl mx-auto">
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col">
                    <div className="flex flex-col sm:flex-row md:items-start md:justify-between gap-4 border-b border-[#E7F4EA] md:space-x-9 space-y-6 pb-6 px-4  text-[#E7F4EA]">
                        <div className="space-y-2 text-[#E7F4EA] my-auto">
                            <Link to={'/'} ><h1 className='uppercase text-xl'>Estate Fusion</h1></Link>
                            <p>10/7, Shekhertek, Adabor, Dhaka - 1207</p>
                            <p>+880 1799 468199</p>
                            <p>contact@risgensolution.com</p>
                        </div>
                        <div className="text-[#E7F4EA]">
                            <h3 className="text-2xl tracking-widest mb-3">Our Services</h3>
                            <div className="flex flex-col border-l border-[#E7F4EA] ps-4 space-y-2 uppercase ">
                                <Link to={'/'}>Architecture</Link>
                                <Link to={'/services'}>Interior Design</Link>
                                <Link to={'/our-projects'}>Decoration</Link>
                                <Link to={'/about-us'}>Renovation</Link>
                                <Link to={'/about-us'}>Furniture</Link>
                                <Link to={'/about-us'}>3D Visualization</Link>
                            </div>
                        </div>

                        <div className="">
                            <h3 className="text-2xl tracking-widest mb-3">Quick Link</h3>
                            <div className="flex flex-col border-l border-[#E7F4EA] ps-4 space-y-2 uppercase text-[#E7F4EA]">
                                <Link to={'#reputation'}>Reputation</Link>
                                <Link to={'/about-us'}>About US</Link>
                                <Link to={'/services'}>Services</Link>
                                <Link to={'/our-projects'}>Our Project</Link>
                                <Link to={'#work-process'}>Work Process</Link>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-2xl tracking-widest mb-3">Useful</h3>
                            <div className="flex flex-col border-l border-[#E7F4EA] ps-4 space-y-2 uppercase text-[#E7F4EA]">
                                <Link to={'#reputation'}>Privacy Policy</Link>
                                <Link to={'/about-us'}>Terms of use</Link>
                                <Link to={'/services'}>FAQs</Link>
                                <Link to={'/our-projects'}>Support</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="font-light text-[#E7F4EA] text-sm py-6">Copyright <span>&copy; {currentYear} risGen Solution Ltd.</span></p>
                    </div>
                </div>
        </div>
    );
};

export default Footer;