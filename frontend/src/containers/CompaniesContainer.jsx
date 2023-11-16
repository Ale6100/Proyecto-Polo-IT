import { useState, useEffect } from "react"
import "./CompaniesContainer.css"
import Company from "../components/Company";

const CompaniesContanier = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [queryParams, setQueryParams] = useState("");
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + `/api/companies/${page}?${queryParams}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 
            }
        }).then(res => res.json())
        .then(res => {
            setData(res.payload);
            setTotalPages(res.total_pages);
            console.log(res.payload)
        }).finally(() => setLoading(false))
    }, [page, queryParams]);

    const Loader = () => {
        return (
        <div className="container-loader">
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
            <div className="cube-loader"><div className="cube__inner-loader"></div></div>
        </div>
    )}

    return (
        <>
            {
                loading ? <Loader /> : 
                
                data.length === 0 ? <p>No hay empresas disponibles en esta página de acuerdo a los filtros solicitados</p> :
                
                <>
                <section>
                    <div className="container-search">
                    {
                        Array(totalPages).fill(0).map((_, index) => (
                            <button key={index} onClick={() => setPage(index+1)}>{index+1}</button>
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
                </>
            }
        </>
    )
}

export default CompaniesContanier;
