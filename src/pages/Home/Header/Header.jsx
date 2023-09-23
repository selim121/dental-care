import React from 'react';
import img from '../../../assets/header/home-header.png';
import '../../../styles/Header.css';
import Button from '../../Shared/Button/Button';
import {BiLogoLinkedin, BiSolidPhoneCall} from 'react-icons/bi';
import p1 from '../../../assets/profile/p1.png';

const Header = () => {
    return (
        <div className='header-bg px-4 pt-10 md:pt-0 md:h-screen'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="w-full md:w-[55%] space-y-5">
                    <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">Get Ready For Your Best Ever Dental Experience!</h1>
                    <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias animi sint aliquid fugiat, dolores impedit et, eum fugit necessitatibus suscipit? Labore veritatis earum, placeat quaerat dolor quis!</p>
                    <div className="flex flex-col md:flex-row items-center justify-start gap-4">
                        <Button name={'Book an appointment'} />
                        <div className="flex items-center justify-start gap-4">
                            <div className="p-3 border border-[#1376F8] rounded-lg">
                                <BiSolidPhoneCall color='#1376F8' />
                            </div>
                            <p className="">
                                <span className="text-[#1376F8]">Dental 24H Emergency</span> <br /> 0900-78601
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 md:w-[60%] rounded-lg space-y-3">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-4">
                                <img className='rounded-full w-[40px] h-[40px]' src={p1} alt="" />
                                <div className="flex flex-col">
                                    <h6 className="text-xl font-semibold">Thomas Deniel</h6>
                                    <p className="text-sm font-light">Sr Dental</p>
                                </div>
                            </div>
                            <div className="bg-[#1376F8]">
                            <BiLogoLinkedin color='white' />
                            </div>
                        </div>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam optio nesciunt sint aliquid magni!</p>
                    </div>
                </div>
                <div className=" md:h-screen md:w-[45%]">
                    <img className='h-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;