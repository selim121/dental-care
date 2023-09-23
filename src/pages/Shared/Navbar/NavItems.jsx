import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/Navbar.css';

const NavItems = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value);
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('.toggle-element')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className='relative '>
            <div className='flex flex-row items-center gap-6'>
                <NavLink to="/" className="hidden md:block active-link hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px] " onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/services" className="hidden md:block active-link hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px] " onClick={() => setIsOpen(false)}>
                    Services
                </NavLink>
                <NavLink to="/our-projects" className="hidden md:block active-link hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px] " onClick={() => setIsOpen(false)}>
                    Our Project
                </NavLink>
                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                    <label tabIndex={0} className="hidden md:block hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px] cursor-pointer  "><span className='flex flex-row items-center'>Pages <IoMdArrowDropdown /></span> </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-lg w-36 space-y-2">
                        <li>
                            <Link to="/" className="hover:text-[#1376F8] text-[#144760] px-[8px] py-[3px]">
                                Page 01
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px]">
                            Page 02
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px]">
                            Page 03
                            </Link>
                        </li>
                    </ul>
                </div>
                <NavLink to="/about-us" className="hidden md:block active-link hover:text-[#1376F8] text-[#144760] px-[8px] py-[1px] " onClick={() => setIsOpen(false)}>
                    About Us
                </NavLink>
                <div onClick={toggleOpen} className='flex flex-row items-center cursor-pointer hover:shadow-md transition toggle-element rounded-full py-1 px-2 text-[1px] text-[#1376F8] md:hidden'>
                    <AiOutlineMenu color='#000000' size={'30px'} />
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute z-20 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-[#E7F4EA] overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>

                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:text-[#1376F8] text-[#144760] transition font-semibold '
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/services'
                                className='block md:hidden px-4 py-3 hover:text-[#1376F8] text-[#144760] transition font-semibold '
                            >
                                Services
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/our-projects'
                                className='block md:hidden px-4 py-3 hover:text-[#1376F8] text-[#144760] transition font-semibold '
                            >
                                Our Project
                            </Link>
                            <Link onClick={() => setIsOpen(false)} to="/" className="block md:hidden px-4 py-3 hover:text-[#1376F8] text-[#144760] transition font-semibold ">
                                About Us
                            </Link>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default NavItems;