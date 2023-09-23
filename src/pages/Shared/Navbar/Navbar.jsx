import React, { useEffect } from 'react';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            document.querySelector('nav').classList.add('bg-[#E6F6FE]', 'fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
            document.querySelector('nav').classList.remove('relative', 'z-40');
        } else {
            document.querySelector('nav').classList.add('bg-[#E6F6FE]', 'relative', 'z-40');
            document.querySelector('nav').classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
        }
    };

    return (
        <>
            <nav className='bg-[#E6F6FE] relative z-40 border-b-2 border-[#c1eafe]'>
                <div className="px-4">
                    <div className='flex flex-row py-2 items-center justify-between gap-3 md:gap-0'>
                        <Link to={'/'} ><h1 className='uppercase text-xl'>Dental Care</h1></Link>
                        <NavItems />
                        <Button name={'Book Now'} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;