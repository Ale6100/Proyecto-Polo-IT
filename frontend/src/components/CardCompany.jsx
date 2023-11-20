import { useEffect, useState } from 'react';
import './cardcompany.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';
import Swal from 'sweetalert2';
import disabledButton from '../assets/disabledButton';

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
        return (
        <div className='container__detail-loader'>
            <Loader />
        </div>
        )
    }

    const openFormContact = async (e) => {
        if (!company.mail[0]) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este sitio no tiene correo de contacto',
            })
        }

        const response = await Swal.fire({
            title: 'Escriba su correo',
            html: `
            <div class="sweet-alert-custom">
                <div>
                    <label for="swal-inputName" class="swal2-label">Nombre</label>
                    <input id="swal-inputName" class="swal2-input">
                </div>
                
                <div>
                    <label for="swal-inputEmail" class="swal2-label">Email</label>
                    <input id="swal-inputEmail" class="swal2-input" type="email">
                </div>
                
                 <div>
                    <label for="swal-inputPhone" class="swal2-label">Teléfono</label>
                    <input id="swal-inputPhone" class="swal2-input" type="number">
                </div>

                <div>
                    <label for="swal-inputMessage" class="swal2-label">Mensaje</label>
                    <textarea id="swal-inputMessage" class="swal2-textarea"></textarea>
                </div>                
            </div>
            `,
            preConfirm: () => {
                const inputName = document.getElementById("swal-inputName");
                const inputEmail = document.getElementById("swal-inputEmail");
                const inputPhone = document.getElementById("swal-inputPhone");
                const inputMessage = document.getElementById("swal-inputMessage");

                if (inputName instanceof HTMLInputElement && inputEmail instanceof HTMLInputElement && inputPhone instanceof HTMLInputElement && inputMessage instanceof HTMLTextAreaElement) {
                    const name = inputName.value.trim();
                    const email = inputEmail.value.trim();
                    const phone = inputPhone.value.trim();
                    const message = inputMessage.value.trim();

                    if (name && email && message) {
                        return {
                            name: name,
                            email: email,
                            phone: phone,
                            message: message
                        }
                    }
                }

                return "";
            },
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Enviar",            
        })

        const value = await response.value

        if (value) {
            const { name, email, phone, message } = value

            const body = {
                from: email,
                to: company.mail[0], //! Cuidado, es el mail real
                subject: `(Ignorar) - Contacto`,
                html: `
                <h2>Por favor, ignore este mail</h2>
                
                <p>Este mensaje ha sido enviado desde el botón "CONTACTAR" del detalle de una empresa de <a href="https://proyecto-polo-it.netlify.app/" target="_blank" rel="noopener noreferrer">este</a> sitio web.</p>
    
                <p>El sitio se ha desarrollado con propósitos exclusivamente académicos como parte del proyecto "Aceleradora IT". Este proyecto involucra a egresados asociados con diversas empresas educativas, incluida EMPUJAR, a la cual nosotros (Grupo 7) pertenecemos.</p>
    
                <p>A continuación se mostrarán los datos introducidos</p>
    
                <div>
                    <p>Nombre: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Teléfono: ${phone || "No propocionado (es el único campo opcional)"}</p>
                    <p>Mensaje: ${message}</p>
                </div>
                `
            }

            const button = e.target;
            disabledButton(button, true);
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/mail`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            disabledButton(button, true);

            if (res.status === "success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Enviado',
                    text: 'Se ha enviado el correo exitósamente',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error al enviar el correo',
                })
            }
        
        } else if (!response.isDismissed) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor llena todos los campos',
            });
        }
    }

    return (
        <div className='container__detail-father'>
            <div className='container__title-company'>
                <h2 className='title-company'>{company.name}</h2>
                <img src={company.logo ? (company.logo.includes("http") ? company.logo : `/img/logo/${company.logo}`) : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/2048px-Imagen_no_disponible.svg.png"} alt={`Logo de ${company.name}`} className='image-logo-title' />
            </div>
            <div className='container__detail-card'>
                <div className='container__info'>
                    <div className='container__img-logo'>
                    <img src={company.logo ? (company.logo.includes("http") ? company.logo : `/img/logo/${company.logo}`) : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/2048px-Imagen_no_disponible.svg.png"} alt={`Logo de ${company.name}`} className='image-logo' />
                        <div className={`container__redes ${company.linksSocialNetworks.length >= 4 ? "smallGap" : ""}`}>
                            
                            {
                                company.linksSocialNetworks.map((obj) => (
                                    <li key={obj.name}>
                                        <a href={obj.url} target="_blank" rel="noopener noreferrer">
                                            {
                                                obj.name === "facebook" ? <FaFacebook className={`icons-red icons-face ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                obj.name === "instagram" ? <FaInstagram className={`icons-red icons-insta ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                obj.name === "linkedin" ? <FaLinkedin className={`icons-red icons-link ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                obj.name === "x" ? <FaXTwitter className={`icons-red icons-x ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                obj.name === "youtube" ? <FaYoutube className={`icons-red icons-you ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                obj.name === "whatsapp" ? <FaWhatsapp className={`icons-red icons-wsp ${company.linksSocialNetworks.length >= 4 ? "smallIcon" : ""}`}/> :
                                                `${obj.name}`
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
                        {
                            company.mail.length === 0 ? <p>No hay correos para mostrar</p> : 
                            company.mail.length === 1 ? <p>Correo:</p> :
                            <p>Correos:</p>
                        }
                        {
                            company.mail.map((mail) => (
                                <li key={mail}>{mail}</li>
                            ))
                        }
                    </div>
                    <div className='container__btn'>
                        <button onClick={openFormContact} className='btn contact-btn'>Contactar</button>
                        <a className='btn web-btn' href={company.website} target="_blank" rel="noopener noreferrer">visitar web</a>
                    </div>
                </div>

                <div className='container__video'>
                    {
                        company.video ? <iframe src={`https://www.youtube.com/embed/${company.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='video-iframe'></iframe> :
                        <img className='video-iframe' src="./img/videoNoDisponible.webp" alt="Video no disponible" />
                    }
                </div>      
            </div>
        </div>
    );
}

export default CardCompany;
