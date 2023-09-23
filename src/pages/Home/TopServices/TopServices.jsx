import React from 'react';
import teeth from '../../../assets/services/teeth.png';
import smile from '../../../assets/services/smile.png';
import implant from '../../../assets/services/implant.png';
import { IoIosArrowDropright } from 'react-icons/io';
import Button from '../../Shared/Button/Button';

const TopServices = () => {
    return (
        <div className='bg-[#E6F6FE] px-4 py-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg space-y-3">
                    <img className='p-4 bg-[#25B4F8] rounded-full' src={teeth} alt="" />
                    <h6 className="font-bold">Root Canal Treatment</h6>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi voluptates dolorem, omnis nulla sequi!</p>
                    <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#1376F8]">
                        <p className="underline">Learn More</p>
                        <IoIosArrowDropright />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg space-y-3">
                    <img className='p-4 bg-[#25B4F8] rounded-full' src={smile} alt="" />
                    <h6 className="font-bold">Root Canal Treatment</h6>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi voluptates dolorem, omnis nulla sequi!</p>
                    <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#1376F8]">
                        <p className="underline">Learn More</p>
                        <IoIosArrowDropright />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg space-y-3">
                    <img className='p-4 bg-[#25B4F8] rounded-full' src={implant} alt="" />
                    <h6 className="font-bold">Root Canal Treatment</h6>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi voluptates dolorem, omnis nulla sequi!</p>
                    <div className="flex flex-row items-center gap-2 cursor-pointer hover:text-[#1376F8]">
                        <p className="underline">Learn More</p>
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <Button name={'See More'} />
            </div>
        </div>
    );
};

export default TopServices;