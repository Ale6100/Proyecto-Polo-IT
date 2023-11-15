import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';


const Navbar = () => {

    const [btn , btnState] = useState(false);
    const menuRef = useRef();//tomo como referencia a la etiqueta que le quiero agregar la clase.
    const toggler = () =>{
        menuRef.current.classList.toggle('nav-response');//al hacer click, agrego la clase con sus estilos.
    }
    const active = ()=>{
        btnState(true)
    }
    return (
        <nav className="navbar">
            <span className='menu-burger'>
                <NavLink><img src="https://static.wixstatic.com/media/f7a32c_1e4c47160de94f15b091352c78489b13~mv2.png/v1/fill/w_193,h_52,al_c,lg_1,q_85,enc_auto/logo.png" alt="Logo de la empresa polo IT" className='logo-nav'/></NavLink>
                <a href="#" className='icons-burger' onClick={toggler}><img width="30" height="30" src="https://img.icons8.com/ios/30/menu--v1.png" alt="menu--v1"/></a>
            </span>
            <ul className="menu-nav" ref={menuRef}>
                <li><NavLink to='/' onClick={active} className={btn && "active"}>Inicio</NavLink></li>
                <li><NavLink to='/about' onClick={active}>Nosotros</NavLink></li>
                <li><NavLink to='/company' onClick={active}>Empresas</NavLink></li>
                <li><NavLink to='/services' onClick={active}>Servicios</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
