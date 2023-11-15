import React from 'react';
import './cardcompany.css';

const CardCompanie = () => {







    return (
        <div className='container__detail-father'>
            <h2 className='title-company'>Titulo de la empresa</h2>
            <div className='container__detail-card'>
                <div className='container__info'>
                    <div className='container__img-logo'>
                        <img src="https://enciclopediaeconomica.com/wp-content/uploads/2018/09/muestra-estadistica-icono.jpg" alt="logo de la empresa" className='image-logo' />
                        <div className='container__redes'>
                            <li><a href="https://www.facebook.com/poloitbuenosaires/"><img src="img/social-media/icons8-facebook-32.png" alt=""  className='image-red'/></a></li>
                            <li><a href="https://www.instagram.com/poloitbuenosaires/"><img src="img/social-media/icons8-instagram-32.png" alt="" className='image-red' /></a></li>
                            <li><a href="https://www.linkedin.com/company/polo-it-de-buenos-aires/"><img src="img/social-media/icons8-linkedin-32.png" alt="" className='image-red' /></a></li>
                            <li><a href="https://twitter.com/PoloITBsAs"><img src="img/social-media/icons8-twitter-32.png" alt=""  className='image-red'/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCt0AmOQHBXyYIMXMviCvX5g/featured"><img src="img/social-media/icons8-youtube-32.png" alt="" className='image-red' /></a></li>
                        </div>
                    </div>
                    <div>
                        <div>Servicio de la empresa</div>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint fuga incidunt nihil tenetur nostrum vel voluptates, excepturi qui sequi autem reprehenderit veritatis officiis rem nam nobis non obcaecati voluptatem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sed doloremque magni ducimus, exercitationem nihil blanditiis voluptate tempore beatae, placeat illum deserunt quae voluptatem ipsa possimus iure. Minus, dolor voluptates!</p>
                    </div>
                    <div className='container__btn'>
                        <button className='btn contact-btn'>Contacto</button>
                        <button className='btn web-btn'>avisitar sitio web</button>
                    </div>
                </div>
                <div className='container__video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TFBfUorLbss?si=eDa-OMiYpqKbZEZO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                </div>      
            </div>
        </div>
    );
}

export default CardCompanie;
