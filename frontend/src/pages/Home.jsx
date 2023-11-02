import './Home.css';
import Categories from '../components/Categories';
import Companies from '../components/Companies';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px; 
    margin-bottom: 10px;
`

const Home = () => {
    return (
        <Wrap>
            <Categories></Categories>
            <Companies></Companies>
        </Wrap>
    );
}
    
export default Home;