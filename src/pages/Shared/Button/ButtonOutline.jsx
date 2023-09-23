import React from 'react';
import '../../../styles/Button.css';

const ButtonOutline = ({name}) => {
    return (
        <button className='text-[#144760] hover:text-white blue-white-outline px-3 py-2 rounded-md font-semibold tracking-wider'>{name}</button>
    );
};

export default ButtonOutline;