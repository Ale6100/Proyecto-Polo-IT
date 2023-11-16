import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
    border: 2px solid black;
    
    margin-bottom: 1rem;
`
const Filters = styled.div`
    margin: 5px 10px 5px 10px; 
`
const Buttom = styled.button`
    padding: 10px;
    text-decoration: underline;
`

const Categories = () => {
    return(
        <Wrap>
            <Box>
                <h2>Filtros</h2>

                <Filters>
                    <h3>Análisis de Datos</h3>
                    <Buttom></Buttom>
                </Filters>
            </Box>
        </Wrap>
    )
};

export default Categories;
