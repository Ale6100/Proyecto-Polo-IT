import "./Company.css"
import { Link } from "react-router-dom";

const Company = ({_id, name, logo}) => {
    return (
        <Link className="company" to={`/detail/${_id}`}>
            <div>
                <img src={logo ? (logo.includes("http") ? logo : `/img/logo/${logo}`) : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/2048px-Imagen_no_disponible.svg.png"} alt={`Logo ${name}`} />
            </div>
            
            <p>{name}</p>
        </Link>
    )
};

export default Company;
