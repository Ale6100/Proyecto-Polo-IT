import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
    const menuRef = useRef(); // Tomamos como referencia a la etiqueta que luego manipularemos
    const toggler = () => {
        menuRef.current.classList.toggle('nav-visible');
    }

    return (
        <nav className="navbar">
            
            <span className='menu-burger'>
                <NavLink to='/'><img src="https://static.wixstatic.com/media/f7a32c_1e4c47160de94f15b091352c78489b13~mv2.png/v1/fill/w_193,h_52,al_c,lg_1,q_85,enc_auto/logo.png" alt="Logo de la empresa polo IT" className='logo-nav'/></NavLink>
                <img onClick={toggler} src="https://img.icons8.com/ios/30/menu--v1.png" alt="menu--v1"/>
            </span>
            
            <ul className="menu-nav nav-response nav-visible" ref={menuRef}>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/about'>Nosotros</NavLink></li>
                <li><NavLink to='/company/1'>Empresas</NavLink></li>
                <li><NavLink to='/contact'>Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
