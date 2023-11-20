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
                <SwiperSlide><img src="https://www.enfasys.net/wp-content/uploads/2023/10/Destacada-Polo-IT.jpg" alt="persona dando discurso de capacitacion" className='image-swiper' /></SwiperSlide>
                <SwiperSlide><img src="https://static.wixstatic.com/media/f7a32c_ac8cd6aa86ef4e37bf82b131b0ff770f~mv2.png/v1/fill/w_517,h_312,al_c,q_85,enc_auto/IMG_news.png" alt="pagina del polo a travez de una tablet" className='image-swiper' /></SwiperSlide>
                <SwiperSlide><img src="https://pbs.twimg.com/media/F7mVG7-XYAABHlb?format=jpg&name=large" className='image-swiper' alt="miembros del polo IT" /></SwiperSlide>
            </Swiper>
            <div>
                <h1 className='home__title'>Bienvenidos a las empresas socias del polo IT</h1>
            </div>
            <main className='main__home'>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Empresas socias</h2>
                    <p>Visita el listado de las empresas asociadas al Polo IT. Encuentra oportunidades de acuerdo a tus necesecidades</p>
                    <Link to='/company/1' className='link__home'><Button contenido='Ver Empresas'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Nuestro objetivo</h2>
                    <p>Descubre más sobre nosotros y cuál es la inspiración detrás del desarrollo de este proyecto</p>
                    <Link to='/about' className='link__home'><Button contenido='Conocenos'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Contacto con el Polo IT</h2>
                    <p>No dudes en comunicarte con la empresa utilizando cualquiera de nuestras vías de contacto</p>
                    <Link to='/contact' className='link__home'><Button contenido='Contactar'/></Link>
                </div>
            </main>
            <div className='main__container-polo'>
                <figure>
                    <img src="./img/paginapolo.png" alt="imagen principal de la pagina del polo IT" />
                </figure>

                <div className='main__info-polo'>
                    <h2 className='title__main-polo'>+ Sobre el Polo IT</h2>
                    <p>También podés visitar la página oficial del Polo IT donde encontrarás información sobre eventos, capacitaciones, beneficios de la comunidad, crecimiento de la industria y más.</p>
                    <a href="https://www.poloitbuenosaires.org.ar/" target="_blank" rel="noopener noreferrer"><Button contenido="Visitar sitio" styleIdBtn="btn_home-polo" /></a>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
