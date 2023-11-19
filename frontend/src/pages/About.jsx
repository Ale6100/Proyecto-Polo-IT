import { useEffect } from 'react';
import "./about.css";
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        document.title = "Polo IT - Nosotros";
    }, [])
    
    return (
        <section className='section__about-container'>
            <h1>¿A que nos dedicamos?</h1>
            <div className='about__info'>
                En nuestra plataforma web, nos apasiona brindarte asistencia para descubrir la empresa que mejor satisfaga tus necesidades o simplemente para conocer más sobre sus servicios, independientemente del sector. Contamos con un avanzado sistema de filtros que nos permite refinar la búsqueda y ofrecerte opciones que se alineen perfectamente con lo que estás buscando.
            </div>
            <div className='about__valores'>
                <div>
                    <h2 className='subtitle__about'>Nuestro valor</h2>
                    <p>Nuestro compromiso es simplificar el proceso de selección de empresas, garantizando que encuentres la solución que se ajuste a tus expectativas y requerimientos.</p>
                </div>
                <figure className='container__image image-valores'>
                     <img src="https://s1.significados.com/foto/shutterstock-306587402_bg.jpg" alt="varias personas juntado las manos" />
                </figure>
            </div>
            <div className='about__services'>
                <figure className='container__image image-services'>
                     <img src="https://abcfinanzas.com/wp-content/uploads/2016/12/3.-%C2%BFPuedes-acogerte-al-contrato-mercantil-de-prestacion-de-servicios.jpg" alt="dos personas estrechando la mano" />
                </figure>
                <div>
                    <h2 className='subtitle__about'>El servicio que ofrecemos</h2>
                    <p> Ya sea que estés buscando servicios en tecnología, salud, finanzas consultorias u otros sectores, nuestros filtros te permitirán explorar una variedad de opciones, aplicando diferentes filtros que se encontraran en el lado izquierdo de la pantalla</p>
                    <Link className='link-services' to='/company/1'><Button contenido='ver empresas' styleIdContainer='btn_about-container' styleIdBtn='btn_about'/></Link>
                </div>
            </div>
        </section>
    );
}

export default About;
