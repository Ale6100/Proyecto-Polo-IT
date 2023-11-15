import styled from "styled-components";

const Wrap = styled.div`

`
const BoxCompanies = styled.div`

`
const ImgCompanies = styled.div`

`
const TitleCompanies = styled.h1`

`

const Companies = ({name, logo}) => {
    return(
        <Wrap>
            <BoxCompanies>
                <ImgCompanies>
                    <img src={logo} alt="..." />
                </ImgCompanies>
                <TitleCompanies>{name}</TitleCompanies>
            </BoxCompanies>
        </Wrap>
    )
};

export default Companies;