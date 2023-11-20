import { FooterPage, Div, Links, Li, Link, Icon, Creditos, Parrafo, Span} from "./footer.styles";

const Footer = () => {
    return (
        <FooterPage>
            <Div>
                <Links>
                    <Li><Link target="_blank" href="https://www.facebook.com/poloitbuenosaires/"><Icon src="img/social-media/icons8-facebook-32.png" alt="" /></Link></Li>
                    <Li><Link target="_blank" href="https://www.instagram.com/poloitbuenosaires/"><Icon src="img/social-media/icons8-instagram-32.png" alt="" /></Link></Li>
                    <Li><Link target="_blank" href="https://www.linkedin.com/company/polo-it-de-buenos-aires/"><Icon src="img/social-media/icons8-linkedin-32.png" alt="" /></Link></Li>
                    <Li><Link target="_blank" href="https://twitter.com/PoloITBsAs"><Icon src="img/social-media/icons8-twitter-32.png" alt="" /></Link></Li>
                    <Li><Link target="_blank" href="https://www.youtube.com/channel/UCt0AmOQHBXyYIMXMviCvX5g/featured"><Icon src="img/social-media/icons8-youtube-32.png" alt="" /></Link></Li>
                    <Li><Link target="_blank" href="https://wa.me/5491157826061"><Icon src="img/social-media/icons8-whatsapp-32.png" alt="" /></Link></Li>
                </Links>
                <Creditos>Diseñado por Grupo 7</Creditos>
            </Div>
            <Parrafo>© Todos los derechos reservados<Span> - poloit@poloitbuenosaires.org.ar</Span></Parrafo>
        </FooterPage> 
    );
}

export default Footer;
