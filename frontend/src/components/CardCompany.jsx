import React from 'react';
import './cardcompany.css';

const CardCompanie = () => {
    return (
        <div className='container__detail-card'>
            <div>
                <h1>Titulo de la empresa</h1>
                <div>
                    servicios de la empresa
                </div>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TFBfUorLbss?si=eDa-OMiYpqKbZEZO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>      
        </div>
    );
}

export default CardCompanie;
