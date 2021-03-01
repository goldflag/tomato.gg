// NPM
import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LocalizedStrings from "react-localization";

// LOCAL
import { menuRoutes } from "./routes";
import TomatoLogo from "Assets/tomato.png";
import background from "Assets/sidebar.jpg";
import { NewIcon } from "Components";

const strings = new LocalizedStrings({
    en: {
        support: "Support Tomato.gg",
        donations: `Tomato.gg runs entirely on user donations. If you find value in the website, 
        consider chipping in to help keep the servers running.`,
        kofi: "Support on Ko-fi",
        paypal: "Support on Paypal",
        partnered: "Partnered Websites",
        herhor: "MoE rankings and image generator",
        createdBy: "Tomato.gg is a website created by",
        notAffiliated: "and is not affiliated with Wargaming.net.",
    },
    es: {
        support: "Apoya a Tomato.gg",
        donations: `Tomato.gg funciona completamente con donaciones. Si encuentras valor en el sitio, considere hacer una donación para ayudar a mantener los servidores.`,
        kofi: "Apoya en Ko-fi",
        paypal: "Apoya en Paypal",
        partnered: "Sitios asociados",
        herhor: "Generador de imágenes y rankings de MoE",
        createdBy: "Tomato.gg es un sitio creado por",
        notAffiliated: "y no está afiliado a Wargaming.net.",
    },
    fr: {
        support: "Soutenez Tomato.gg",
        donations: `Tomato.gg fonctionne pleinement sur les dons par utilisateurs. Si vous trouvez de 
        la valeur sur ce site web, considérez de faire un don pour aider à maintenir les serveurs.`,
        kofi: "Soutenez avec Ko-fi",
        paypal: "Soutenez avec Paypal",
        partnered: "Site web partenaire",
        herhor: "Classement des marques d'excellence et générateur d'image",
        createdBy: "Tomato.gg est un site web créé par",
        notAffiliated: "et n'est pas affilié avec Wargaming.net.",
    },
    pl: {
        support: "Wesprzyj Tomato.gg",
        donations: `Tomato.gg jest utrzymywane całkowicie z darowizn użytkowników. Jeśli uważasz witrynę za wartościową, rozważ pomoc
        w utrzymaniu działania serwerów.`,
        kofi: "Wesprzyj na Ko-fi",
        paypal: "Wesprzyj na Paypal",
        partnered: "Witryny partnerskie",
        herhor: "Rankingi i generator obrazków biegłości",
        createdBy: "Tomato.gg to witryna stworzona przez",
        notAffiliated: "i nie jest powiązana z Wargaming.net.",
    },
    tr: {
        support: "Tomato.gg'yi destekleyin",
        donations: `Tomato.gg tamamen kullanıcı bağışlarıyla çalışır. Web sitesinde bir değer bulursanız, 
        sunucuların çalışmaya devam etmesine yardımcı olmak için bağış yapabilirsiniz.`,
        kofi: "Ko-fi'den Bağış",
        paypal: "Paypal'dan Bağış",
        partnered: "Ortak Web Siteleri",
        herhor: "MoE sıralaması ve görüntü oluşturucu",
        createdBy: "Tomato.gg sitesini yapan kişi ",
        notAffiliated: "ve Wargaming.net ile bağlantılı değildir.",
    },
    zh: {
        support: "支持 Tomato.gg",
        donations: `Tomato.gg 完全依靠用戶們捐贈來運行。 如果您在網站上找到了價值，請考慮加入以幫助維護網站運作。`,
        kofi: "使用Ko-fi贊助",
        paypal: "使用Paypal贊助",
        partnerd: "合作網站",
        herhor: "M牌排行榜及圖片產生器",
        createdBy: "Tomato.gg 創自於",
        notAffiliated: "網站不隸屬於 Wargaming.net.",
    },
});

const StyledSidebar = styled.div`
    font-family: "Roboto";
    font-weight: 500;
    margin-top: 0rem;
    margin-bottom: 10rem;
    z-index: 0;
    height: 100%;
    width: 14rem;
    margin-right: 14rem;
    position: fixed;
    left: 0;
    background: url(${background}) no-repeat fixed;
    background-size: cover;
    overflow-x: hidden;

    @media screen and (max-width: 1000px) {
        width: 0px;
        padding-top: 15px;
    }
`;

const LogoImg = styled.img`
    height: 110%;
    width: auto;
    display: flex;
    alignitems: center;
    padding: 0rem;
`;

const Layer = styled.div`
    backdrop-filter: blur(2px);
    background-color: rgba(24, 25, 92, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    width: 100%;
    height: 0%;
    border-bottom: 1px solid rgb(100, 95, 129);
    @media screen and (max-width: 1000px) {
        width: 0px;
    }
`;

const Logo = styled.div`
    padding: 10px 10px 10px 10px;
    width: auto;
    height: 4em;
`;

const Menu = styled.div`
    font-size: 14px;
    padding-top: 10px;
    a {
        text-decoration: none;
        color: #dddddd !important;
        display: block;
    }
    a:hover {
        color: rgb(207, 12, 116) !important;
    }
`;

const MenuLink = styled(Link)`
    padding: 10px 20px 10px 20px;
    font-size: 16px;
    color: #dddddd;

    svg {
        vertical-align: middle;
        padding: 0px 1px 2px 1px !important;
    }
`;

const Bottom = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const DonationButton = styled.div`
    width: 100%;
    margin: 10px 0;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 0.9rem;
`;
const Kofi = styled(DonationButton)`
    background-color: rgb(232, 37, 79);
    &hover {
        background-color: rgb(245, 60, 110);
    }
`;
const PayPal = styled(DonationButton)`
    background-color: rgb(34, 97, 179);
    &hover {
        background-color: rgb(50, 110, 200);
    }
`;

const Support = styled.div`
    background-color: rgba(40, 40, 60, 0.4);
    margin: 10px 10px 0px 10px;
    padding: 10px;
    font-size: 0.8rem;
    font-weight: 400;
    color: rgb(161, 181, 214);
    backdrop-filter: blur(4px);
    h2 {
        font-size: 1.1rem;
        font-weight: 500;
        color: white;
        margin-top: 0;
    }
`;

const Partnered = styled.div`
    font-size: 0.8rem;
    font-weight: 300;
    color: #96a7c7;
    padding: 15px;
    a {
        color: white;
    }
`;

const CopyrightNotice = styled.div`
    font-size: 0.8rem;
    font-weight: 300;
    color: #96a7c7;
    padding: 15px;
    a {
        color: white;
    }
`;

const Sidebar = withRouter((props) => (
    <StyledSidebar>
        <Layer>
            <Link to="/">
                <Logo>
                    <LogoImg src={TomatoLogo} alt="logo" />
                </Logo>
            </Link>
            <Line />
            <Menu>
                {menuRoutes.map(({ path, title, Icon, isNew }) => (
                    <MenuLink to={path} key={path}>
                        <Icon />
                        &nbsp;&nbsp;{title}&nbsp;&nbsp;
                        {isNew ? <NewIcon /> : null}
                    </MenuLink>
                ))}
            </Menu>
            <Bottom>
                <Support>
                    <h2>{strings.support}</h2>
                    {strings.donations}
                    <a target="blank" href="https://ko-fi.com/goldflag">
                        <Kofi>{strings.kofi}</Kofi>
                    </a>
                    <a target="blank" href="https://www.paypal.com/donate/?hosted_button_id=U457SKR8EQTSQ">
                        <PayPal className="donationButton paypal">{strings.paypal}</PayPal>
                    </a>
                </Support>
                <Partnered>
                    <span style={{ fontWeight: "500" }}>{strings.partnered}</span>
                    <span>
                        <br />
                        <a target="blank" href="https://herhor.net/wot/">
                            herhor.net
                        </a>{" "}
                    </span>
                    - {strings.herhor}
                    <br />
                </Partnered>
                <Line />
                <CopyrightNotice>
                    {strings.createdBy} <Link to="/stats/NA/goldflag=1011694618">Goldflag</Link> {strings.notAffiliated}
                    <br />
                    Zeyu Yang © 2021
                </CopyrightNotice>
            </Bottom>
        </Layer>
    </StyledSidebar>
));

export default Sidebar;
