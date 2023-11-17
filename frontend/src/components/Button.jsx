import React from 'react';
import './button.css';

const Button = ({styleIdContainer,styleIdBtn,contenido}) => {
    return (
        <div className='style-default-container' id={`${styleIdContainer}`}>
            <button className='style-default' id={`${styleIdBtn}`}>
                {contenido}
            </button>
        </div>
    );
}

export default Button;
