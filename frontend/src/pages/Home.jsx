import './Home.css';
import Filter from '../components/Filter';
// import Companies from '../components/Companies';
import styled from 'styled-components';
import CompaniesContanier from '../containers/CompaniesContainer';
import { useEffect, useState } from 'react';

const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0px;
`

const Home = () => {
    const [page, setPage] = useState(1);
    const [queryParams, setQueryParams] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/companies/${page}?${queryParams}`, {
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}` 
            }
        }).then(res => res.json())
        .then(res => {
            setData(res.payload);
            setTotalPages(res.total_pages);
        }).finally(() => setLoading(false))
    }, [page, queryParams]);

    return (
        <Wrap>
            <Filter setQueryParams={setQueryParams} setPage={setPage} />
            <CompaniesContanier loading={loading} data={data} totalPages={totalPages} page={page} setPage={setPage} />
        </Wrap>
    );
}
    
export default Home;