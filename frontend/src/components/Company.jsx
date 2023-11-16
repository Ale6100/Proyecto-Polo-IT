import "./Company.css"
import { Link } from "react-router-dom";

const Company = ({_id, name, logo}) => {
    return (
        <Link className="company" to={`/detail/${_id}`}>
            <div>
                <img src={logo.includes("http") ? logo : `/img/logo/${logo}`} alt={`Logo ${name}`} />
            </div>
            
            <p>{name}</p>
        </Link>
    )
};

export default Company;
