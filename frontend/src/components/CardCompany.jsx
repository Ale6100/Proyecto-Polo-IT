import { useEffect, useState } from 'react';
import './cardcompany.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';

const CardCompany = () => {
    const { id } = useParams() // Devuelve el id que viene en la url 

    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/companies/${id}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 
            }
        }).then(res => res.json())
        .then(res => {
            if (res.status === "success") {
                setCompany(res.payload);
            } else {
                navigate("/");
            }
        }).finally(() => setLoading(false));
    }, [id, navigate]);

    if (!company && !loading) {
        return null

    } else if (loading) {
        return <Loader />
    }

    return (
        <div className='container__detail-father'>
            <div className='container__title-company'>
                <h2 className='title-company'>{company.name}</h2>
                <img src={company.logo.includes("http") ? company.logo : `/img/logo/${company.logo}`} alt={`Logo de ${company.name}`} className='image-logo-title' />
            </div>
            <div className='container__detail-card'>
                <div className='container__info'>
                    <div className='container__img-logo'>
                    <img src={company.logo.includes("http") ? company.logo : `/img/logo/${company.logo}`} alt={`Logo de ${company.name}`} className='image-logo' />
                        <div className='container__redes'>
                            
                            {
                                company.linksSocialNetworks.map((obj) => (
                                    <li key={obj.name}>
                                        <a href={obj.url}>
                                            {
                                                obj.name === "facebook" ? <FaFacebook className='icons-red icons-face'/> :
                                                obj.name === "instagram" ? <FaInstagram className='icons-red icons-insta'/> :
                                                obj.name === "linkedin" ? <FaLinkedin className='icons-red icons-link'/> :
                                                obj.name === "x" ? <FaXTwitter className='icons-red icons-x'/> :
                                                obj.name === "youtube" ? <FaYoutube className='icons-red icons-you'/> :
                                                "ERROR, verificar el nombre de la red social"
                                            }
                                        </a>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className='container__info-services'>
                        <div className='title__info-services'>Información General</div>
                        <p>{company.info}</p>
                    </div>
                    <div className='box-email'>
                        <b>Correos:</b>
                        {
                            company.mail.map((mail) => (
                                <li key={mail}>{mail}</li>
                            ))
                        }
                    </div>
                    <div className='container__btn'>
                        <button className='btn contact-btn'>Contactar</button>
                        <a className='btn web-btn' href={company.website} target="_blank" rel="noopener noreferrer">visitar web</a>
                    </div>
                </div>

                <div className='container__video'>
                    {
                        company.video ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${company.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='video-iframe'></iframe> :
                        <img className='video-iframe' src="./img/videoNoDisponible.webp" alt="Video no disponible" />
                    }
                </div>      
            </div>
        </div>
    );
}

export default CardCompany;

