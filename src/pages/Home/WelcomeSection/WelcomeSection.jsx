import React from 'react';
import img from '../../../assets/welcome/welcome.png';
import smile from '../../../assets/welcome/smile.png';
import dental from '../../../assets/welcome/dental.png';
import { AiOutlineFileProtect } from 'react-icons/ai';
import Button from '../../Shared/Button/Button';

const WelcomeSection = () => {
    return (
        <>
            <div className='py-20 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">We&apos;re <span className="text-underline">Welcoming</span> New Patients And Can&apos;t Wait To Meet You.</h1>
                        <p className="font-light text-sm">We use only the best quality materials on the market in order to provide the best products to our patients, So don&apos;t worry about anything and book yourself.</p>
                        <div className="flex">
                            <input className='border px-4 py-2 rounded-ss-lg rounded-es-lg w-3/5 text-xs md:text-md' placeholder='Enter Your Number' type="text" name="number" id="" />
                            <button className='px-4 py-2 bg-gradient-to-r from-[#73adf9] to-[#1376F8] text-white uppercase tracking-widest font-semibold rounded-ee-lg rounded-se-lg'>Submit</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full h-[400px] md:w-[350px] lg:w-[400px] relative px- py-5 bg-gradient-to-br from-[#8abbf9] to-[#1376F8] rounded-xl">
                            <img className='w-full h-full absolute md:-left-7 -bottom-7' src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#E6F6FE] py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                    <div className="flex justify-center">
                        <img src={smile} alt="" />
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">Why Choose <span className="text-underline">Smile</span> For All Your Dental Treatments?</h1>
                        <p className="font-light text-sm">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <AiOutlineFileProtect color='#1376F8' />
                                <p>Top quality dental team</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <AiOutlineFileProtect color='#1376F8' />
                                <p>State of the art dental services</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <AiOutlineFileProtect color='#1376F8' />
                                <p>Discount on all dental treatment</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <AiOutlineFileProtect color='#1376F8' />
                                <p>Enrollment is quick and easy</p>
                            </div>
                        </div>
                        <Button name={'Book an appointment'} />
                    </div>
                </div>
            </div>
            <div className='py-20 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">Leave your worries at the door and enjoy a healthier, more <span className="text-underline"> precise smile</span></h1>
                        <p className="font-light text-sm">We use only the best quality materials on the market in order to provide the best products to our patients, So don&apos;t worry about anything and book yourself.</p>
                        <Button name={'Book an appointment'} />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full h-[400px] md:w-[350px] lg:w-[400px] relative px- py-5 bg-gradient-to-br from-[#8abbf9] to-[#1376F8] rounded-xl">
                            <img className='w-full h-full absolute md:-left-7 -bottom-7' src={dental} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeSection;