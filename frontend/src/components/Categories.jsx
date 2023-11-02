import styled from "styled-components";
import Form from 'react-bootstrap/Form';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`

const Box = styled.div`
    border: 2px solid black;
    
    margin-bottom: 1rem;
`
const Filters = styled.div`
    padding-bottom: 20px;
`
const Buttom = styled.button`
    padding: 10px;
    text-decoration: underline;
`

const Categories = () => {
    return(
        <Wrap>
            <Box>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </Box>
            <Box>
                <h1>Categorias</h1>
                <Filters>
                    <h2>Nombre de los filtros</h2>
                    <Buttom>Si</Buttom>
                    <Buttom>No</Buttom>
                </Filters>
                <h1>Categorias</h1>
                <Filters>
                    <h2>Nombre de los filtros</h2>
                    <Buttom>Si</Buttom>
                    <Buttom>No</Buttom>
                </Filters>
            </Box>
        </Wrap>
    )
};

export default Categories;