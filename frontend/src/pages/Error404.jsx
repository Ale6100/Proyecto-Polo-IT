import './Error404.css';
import { useEffect } from 'react';

const Error404 = () => {
    useEffect(() => {
        document.title = "Polo IT - Error 404";
    }, []);

    return (
        <div className='error404'>
            <h1>Error 404 | Sitio no encontrado</h1>
        </div>
    );
}

export default Error404;
