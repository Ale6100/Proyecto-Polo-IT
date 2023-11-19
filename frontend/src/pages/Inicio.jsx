import './inicio.css';
import Button from '../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

const Inicio = () => {

    useEffect(() => {
        document.title = "Polo IT - Inicio";
    }, [])

    return (
        <section className='section__home-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i0.wp.com/tecnopymes.com.ar/wp-content/uploads/2023/10/Destacada-Polo-IT.jpg?fit=1000%2C600&ssl=1&resize=350%2C200" alt="" className='image-swiper' /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/f7a32c_ac8cd6aa86ef4e37bf82b131b0ff770f~mv2.png/v1/fill/w_517,h_312,al_c,q_85,enc_auto/IMG_news.png" alt="" className='image-swiper' /></SwiperSlide>
                <SwiperSlide><img src="https://www.poloitcorrientes.com.ar/assets/images/poloitcorrientes__.jpg" className='image-swiper' alt="" /></SwiperSlide>
            </Swiper>
            <div>
                <h1 className='home__title'>Bienvenidos a las empresas socias del polo IT</h1>
            </div>
            <main className='main__home'>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Empresas socias</h2>
                    <p>Visita el listado de las empresas socias al Polo IT. Encuentra oportunidades y conéctate de acuerdo a tus necesecidades</p>
                    <Link to='/company/1' className='link__home'><Button contenido='Ver Empresas'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Nuestro Objetivo</h2>
                    <p>Descubre más sobre nosotros y cuál es la inspiración detrás de la creación de este proyecto.</p>
                    <Link to='/about' className='link__home'><Button contenido='Conocenos'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>¡Contactar con el Polo IT!</h2>
                    <p>Si estas interesado en conocer mas, no dudes en ponerte en contacto directo con la empresa utilizando cualquiera de nuestras vías de comunicación.</p>
                    <Link to='/contact' className='link__home'><Button contenido='Contactar'/></Link>
                </div>
            </main>
            <div className='main__container-polo'>
                <figure>
                    <img src="./img/paginapolo.png" alt="imagen principal de la pagina del polo IT" />
                </figure>

                <div className='main__info-polo'>
                    <h2 className='title__main-polo'>+ Sobre el Polo IT</h2>
                    <p>Tambien podes conocer la pagina oficial del polo IT donde encontraras mas informacion sobre eventos , el crecimiento de la indusctria, eventos de capacitacion beneficios por ser parte de la comunida IT y mas.</p>
                    <a href="https://www.poloitbuenosaires.org.ar/" target="_blank" rel="noopener noreferrer"><Button contenido="Visitar sitio" styleIdBtn="btn_home-polo" /></a>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
