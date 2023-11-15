import styled from 'styled-components';

const FooterPage = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(0,63,147);
    background: linear-gradient(120deg, rgba(0,63,147,1) 35%, rgba(242,14,14,1) 37%, rgba(242,14,14,1) 63%, rgba(0,63,147,1) 65%);
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const FooterText = styled.h3`
    text-decoration: underline;
    margin: 10px 5px 10px 5px;
    color: #f4f7fa;
`;
const FooterButtom = styled.button`
    padding: 10px 15px 10px 15px;
    background-color: red;
    margin: 10px;
    border-radius: 10px;
`;
const FooterLink = styled.ul`
    display: flex;
    list-style: none;
    
`;


const Footer = () => {
    return(
        <FooterPage>
            <Wrap>
                <FooterText>¡Enterate de las ultimas noticias!</FooterText>
                <FooterButtom>Acceder a las noticias</FooterButtom>
            </Wrap>
            <Wrap>
                <FooterLink>
                    <li><a href="https://www.facebook.com/poloitbuenosaires/"><img src="img/social-media/icons8-facebook-32.png" alt="" /></a></li>
                    <li><a href="https://www.instagram.com/poloitbuenosaires/"><img src="img/social-media/icons8-instagram-32.png" alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/company/polo-it-de-buenos-aires/"><img src="img/social-media/icons8-linkedin-32.png" alt="" /></a></li>
                    <li><a href="https://twitter.com/PoloITBsAs"><img src="img/social-media/icons8-twitter-32.png" alt="" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCt0AmOQHBXyYIMXMviCvX5g/featured"><img src="img/social-media/icons8-youtube-32.png" alt="" /></a></li>
                    <li><a href="https://twitter.com/PoloITBsAs"><img src="img/social-media/icons8-whatsapp-32.png" alt="" /></a></li>
                </FooterLink>
            </Wrap>
            <Wrap>
                <FooterText>Diseñado por Grupo 7</FooterText>
            </Wrap>
        </FooterPage>
    );
}

export default Footer;