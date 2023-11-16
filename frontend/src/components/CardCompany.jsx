import React from 'react';
import './cardcompany.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CardCompanie = () => {


    return (
        <div className='container__detail-father'>
            <h2 className='title-company'>Titulo de la empresa</h2>
            <div className='container__detail-card'>
                <div className='container__info'>
                    <div className='container__img-logo'>
                        <img src="https://enciclopediaeconomica.com/wp-content/uploads/2018/09/muestra-estadistica-icono.jpg" alt="logo de la empresa" className='image-logo' />
                        <div className='container__redes'>
                            <li><a href="https://www.facebook.com/poloitbuenosaires/"><FaFacebook className='icons-red icons-face'/></a></li>
                            <li><a href="https://www.instagram.com/poloitbuenosaires/"><FaInstagram className='icons-red icons-insta'/></a></li>
                            <li><a href="https://www.linkedin.com/company/polo-it-de-buenos-aires/"><FaLinkedin className='icons-red icons-link'/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCt0AmOQHBXyYIMXMviCvX5g/featured"><FaXTwitter className='icons-red icons-x'/></a></li>
                            <li><a href="https://twitter.com/PoloITBsAs"><FaYoutube className='icons-red icons-you'/></a></li>
                        </div>
                    </div>
                    <div className='container__info-services'>
                        <div className='title__info-services'>Información General</div>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sint fuga incidunt nihil tenetur nostrum vel voluptates, excepturi qui sequi autem reprehenderit veritatis officiis rem nam nobis non obcaecati voluptatem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sed doloremque magni ducimus, exercitationem nihil blanditiis voluptate tempore beatae, placeat illum deserunt quae voluptatem ipsa possimus iure. Minus, dolor voluptates!</p>
                    </div>
                    <div className='box-email'>
                        <b>Correos:</b>
                        <li>ejemplo@gmail.com</li>
                        <li>ejemplo2@gmail.com</li>
                    </div>
                    <div className='container__btn'>
                        <button className='btn contact-btn'>Contactar</button>
                        <button className='btn web-btn'>visitar sitio web</button>
                    </div>
                </div>
                <div className='container__video'>
                    <iframe src="https://www.youtube.com/embed/xD5zPGo-SQw?si=GbCIFjp2N15HP4nE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='video-iframe'></iframe>
                </div>      
            </div>
        </div>
    );
}

export default CardCompanie;
