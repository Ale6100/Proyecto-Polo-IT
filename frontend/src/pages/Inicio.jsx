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
                    <h2 className='main__home-title'>Nuestro Objetivo</h2>
                    <p>Descubre quiénes somos y cuál es la inspiración detrás de la creación de este proyecto.</p>
                    <Link to='/about' className='link__home'><Button contenido='Conocenos'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>¡Contactar con el Polo IT!</h2>
                    <p>Puedes ponerte en contacto directo con la empresa utilizando cualquiera de nuestras vías de comunicación o visitando nuestras oficinas centrales.</p>
                    <Link to='/contact' className='link__home'><Button contenido='Contactar'/></Link>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Empresas socias</h2>
                    <p>Visita el listado las excepcionales empresas socias al Polo IT. Conéctate con la excelencia y encuentra oportunidades emocionantes que solo estas colaboraciones pueden ofrecerte.</p>
                    <Link to='/company' className='link__home'><Button contenido='Ver Empresas'/></Link>
                </div>
            </main>
        </section>
    );
}

export default Inicio;
