import { useEffect } from 'react';
import "./about.css";

const About = () => {
    useEffect(() => {
        document.title = "Polo IT - Nosotros";
    }, [])
    
    return (
        <section className='section__about-container'>
            <h1>Conocé mas sobre nosotros y lo que ofrecemos</h1>
            <div>
                En nuestro sitio web, nos dedicamos con pasión a ayudarte a encontrar la compañía que mejor se adapte a tus diversas necesidades o simplemente conocer u poco mas sobre sus servicios, independientemente del sector. Contamos con un sistema de filtros avanzados que nos permite afinar la búsqueda y proporcionarte opciones que se alineen perfectamente con lo que estás buscando.
            </div>
            <h1>los valores</h1>
            <div>
                 Nuestro compromiso es simplificar el proceso de selección de empresas, garantizando que encuentres la solución que se ajuste a tus expectativas y requerimientos.
            </div>
            <h1>Nuestros servicios</h1>
            <div>
                Ya sea que estés buscando servicios en tecnología, salud, finanzas consultorias u otros sectores, nuestros filtros te permitirán explorar una variedad de opciones. <br />
                ¡Te animas a conocerlas!
                <button>Ver empresas</button>
            </div>
        </section>
    );
}

export default About;
