import Companies from "./Companies";
import styled from "styled-components";

const Wrap = styled.div`
`

const CompaniesList = ({items}) => {

    if(items.lenght === 0) return <p>Cargando... *inserte logo de cargando*</p>

    return(
        <Wrap>
            {
                items.map(item => <Companies key={item._id} name={item.name} logo={item.logo}  />)
            }
        </Wrap>
    )
}

export default CompaniesList;