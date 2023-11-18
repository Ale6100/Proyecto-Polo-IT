import './inicio.css';
import Button from '../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus, quis pariatur aperiam animi sint at. Delectus optio officiis, dolorum deleniti cupiditate veritatis assumenda nisi necessitatibus autem sapiente totam id!</p>
                    <Button contenido='Conocenos'/>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>¡Contactar con el Polo IT!</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dicta est necessitatibus iusto aliquid fugit, inventore omnis quidem odit beatae suscipit in distinctio quis nemo repellat nesciunt ducimus vero dolore.</p>
                    <Button contenido='Contactar'/>
                </div>
                <div className='main__home-info'>
                    <h2 className='main__home-title'>Empresas socias</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae magni aperiam aliquam? Maxime commodi, porro nulla deleniti dolores pariatur quibusdam ullam cumque culpa aliquid est quod at beatae saepe accusantium.</p>
                    <Button contenido='Ver Empresas'/>
                </div>
            </main>
        </section>
    );
}

export default Inicio;
