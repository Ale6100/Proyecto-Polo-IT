import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink><img src="https://static.wixstatic.com/media/f7a32c_1e4c47160de94f15b091352c78489b13~mv2.png/v1/fill/w_193,h_52,al_c,lg_1,q_85,enc_auto/logo.png" alt="Logo de la empresa polo IT" className='logo-nav'/></NavLink>
            <ul className="menu-nav">
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to=''>Nosotros</NavLink></li>
                <li><NavLink to=''>Empresas</NavLink></li>
                <li><NavLink to=''>Servicios</NavLink></li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
