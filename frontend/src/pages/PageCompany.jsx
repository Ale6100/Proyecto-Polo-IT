import './pageCompany.css';
import Filter from '../components/Filter';
import CompaniesContanier from '../containers/CompaniesContainer';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PageCompany = () => {
    const [queryParams, setQueryParams] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [filterVisible, setFilterVisible] = useState(false);
    
    const { page } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Polo IT - Empresas";
    }, [])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/companies/page/${page}?${queryParams}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 
            }
        }).then(res => res.json())
        .then(res => {
            if (res.status === "error") {
                navigate("/");
            }

            setData(res.payload);
            setTotalPages(res.total_pages);
        }).finally(() => setLoading(false));
        // eslint-disable-next-line
    }, [page, queryParams]);

    return (
        <div className='pageCompany-div' >
            <img onClick={() => setFilterVisible(!filterVisible)} className={`pageCompany-img ${filterVisible ? 'filter-visible' : ''}`} src="./img/configuration.svg" alt="" />
            <section className='pageCompany-section'>
                <Filter setQueryParams={setQueryParams} filterVisible={filterVisible} />
                <CompaniesContanier loading={loading} data={data} totalPages={totalPages} page={page} />
            </section>
        </div>
    );
}
    
export default PageCompany;
