import styled from 'styled-components';

export const FooterPage = styled.footer`
    display: flex;
    padding: 15px 0;
    flex-direction: column;
    gap:10px;
    background: linear-gradient(120deg, rgba(0, 63, 147, 1) 35%, rgba(242, 14, 14, 1) 37%, rgba(242, 14, 14, 1) 63%, rgba(0, 63, 147, 1) 65%);
    
    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
    }
`

export const Div = styled.div`
    display:flex;
    justify-content:space-evenly;
`
export const Parrafo = styled.p`
    text-align:center;
    color:#fff;
`
export const Span = styled.span`
    color:#000;
`

export const Links = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 768px) {
        gap: 5px;
    }
`

export const Li = styled.li`
    display: flex;
    align-items: center;
`

export const Link = styled.a`
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    @media screen and (max-width: 768px) {
        height: 25px;
    }
`

export const Creditos = styled.p`
    text-decoration: underline;
    margin: 10px 5px 10px 5px;
    color: #f4f7fa;
`
