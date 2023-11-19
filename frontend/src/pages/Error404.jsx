import './Error404.css';
import { useEffect } from 'react';

const Error404 = () => {
    useEffect(() => {
        document.title = "Polo IT - Error 404";
    }, []);

    return (
        <div className='error404-container'>
            {/* <figure>
                <img src="https://static.vecteezy.com/system/resources/previews/023/809/058/non_2x/404-connection-error-the-assistants-checks-the-situation-sorry-page-not-found-vector.jpg" alt="" width="40%"/>
            </figure> */}
            <h1 className='title-error-404'>Error<span> 404</span></h1>
            <h2>Pagina no encontrada</h2>
            <p>Lo sentimos, la ruta que desea visitar no existe </p>
        </div>
    );
}

export default Error404;
