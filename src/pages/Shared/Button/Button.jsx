import React from 'react';
import '../../../styles/Button.css';

const Button = ({name}) => {
    return (
        <button className='text-white px-3 py-2 rounded-md font-semibold tracking-wider blue-white'>{name}</button>
    );
};

export default Button;