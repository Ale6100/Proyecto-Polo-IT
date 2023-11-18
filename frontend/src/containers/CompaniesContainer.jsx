import "./CompaniesContainer.css"
import Company from "../components/Company";
import Loader from "../components/Loader";
import { NavLink } from "react-router-dom";

const CompaniesContanier = ({ loading, data, totalPages, page }) => {
    return (
        <>
            {
                loading ? <Loader /> : 
                
                data.length === 0 ? <p>No hay empresas disponibles de acuerdo a los filtros solicitados</p> :
                
                <section>
                    <div className="container-search">
                    {
                        Array(totalPages).fill(0).map((_, index) => (
                            <NavLink key={index} className={(index+1) === page ? "btnActive" : ""} to={`/company/${index+1}`}>{index+1}</NavLink>
                        ))
                    }
                    </div>

                    <div className="container-companies">
                        {
                        data.map(data => (
                            <Company key={data._id} {...data} />
                        ))
                        }
                    </div>                        
                </section>
            }
        </>
    )
}

export default CompaniesContanier;
