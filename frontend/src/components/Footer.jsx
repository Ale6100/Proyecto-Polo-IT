import styled from 'styled-components';

const FooterPage = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3164c2;
`;
const FooterText = styled.h3`
    font-size: medium;
    text-decoration: underline;
    margin-bottom: 10px;
`;
const FooterLink = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    font-size: medium;
`;

const Footer = () => {
    return(
        <FooterPage>
            <div>
                <FooterText>noticias de la empresa</FooterText>
                <button>boton para las noticias</button>
            </div>
            <div>
                <FooterLink>
                    <li>aqui va las redes</li>
                    <li>aqui va las redes</li>
                    <li>aqui va las redes</li>
                </FooterLink>
            </div>
            <div>
                <FooterText>espacio para contenido de la empresa</FooterText>
                <p>aqui el correo de la empresa</p>
            </div>
        </FooterPage>
    );
}

export default Footer;