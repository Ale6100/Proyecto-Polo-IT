import './Footer.css';


const Footer = () => {
    return(
        <footer>
            <div className="flex-footer">
                <div className='flex-derecha'>
                    <h3 className="h3-footer">noticias de la empresa</h3>
                    <button>boton para las noticias</button>
                </div>
                <div>
                    <ul className="menu-redes">
                        <li className="redes">aqui va las redes</li>
                        <li className="redes">aqui va las redes</li>
                        <li className="redes">aqui va las redes</li>
                    </ul>
                </div>
                <div>
                    <h3 className="h3-footer">espacio para contenido de la empresa</h3>
                    <p>aqui el correo de la empresa</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;