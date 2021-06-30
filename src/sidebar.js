// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LocalizedStrings from "Functions/localizedStrings";
import Switch from "@material-ui/core/Switch";

// LOCAL
import { menuRoutes } from "./routes";
import TomatoLogo from "Assets/newlogo.png";
// import TomatoLogo from "Assets/tomato.png";
import background from "Assets/sidebar.jpg";
import { NewIcon } from "Components";
import { BackgroundContext } from "Context";

const strings = LocalizedStrings({
    en: {
        boomer: "Toggle Boomer Background",
        boomerAria: "toggle background color",
        support: "Support Tomato.gg",
        donations: `Tomato.gg runs entirely on user donations. If you find value in the website, 
        consider chipping in to help keep the servers running.`,
        kofi: "Support on Ko-fi",
        paypal: "Support on Paypal",
        partnered: "Partnered Websites",
        herhor: "MoE rankings and image generator",
        createdBy: "Tomato.gg is a website created by",
        notAffiliated: "and is not affiliated with Wargaming.net.",
        privacy: "Privacy Policy",
    },
    cs: {
        boomer: "Přepnout odstín pozadí",
        boomerAria: "řepnout barvu pozadí",
        support: "Podpořte Tomato.gg",
        donations: `Tomato.gg funguje jen díky dárcovství jeho uživatelů. Pokud v našem webu 
        vidíte význam, zvažte příspěvek ,který by mohl zabezpečit chod serverů.`,
        kofi: "Podpořte nás přes Ko-fi",
        paypal: "Podpořte nás přes Paypal",
        partnered: "Partnerské weby",
        herhor: "Žebříček vítězných znaků a generátor obrázků",
        createdBy: "Tomato.gg vytvořil",
        notAffiliated: "a není jakkoliv spojen s Wargaming.net.",
        privacy: "Privacy Policy",
    },
    de: {
        boomer: "Wechsel zu dunklem Hintergrund",
        boomerAria: "Ändere Hintergrundfarbe",
        support: "Unterstütze Tomato.gg",
        donations: `Tomato.gg finanziert sich ausschließlich über Spenden.
        Wenn du diese Website nützlich findest, überlege dir ob du Tomato.gg unterstützen möchtest,
        um die Server am laufen zu halten.`,
        kofi: "Spende via Ko-fi",
        paypal: "Spende via Paypal",
        partnered: "Usere Partner",
        herhor: "MoE Ränge und Bild Generator",
        createdBy: "Tomato.gg ist ein Projekt von",
        notAffiliated: "und steht nicht in Verbindung mit Wargaming.net.",
        privacy: "Privacy Policy",
    },
    es: {
        boomer: "Alternar Fondo Oscuro",
        boomerAria: "alternar color de fondo",
        support: "Apoya a Tomato.gg",
        donations: `Tomato.gg funciona completamente con donaciones. Si encuentras valioso este 
        sitio web, considera hacer una donación para ayudar a mantener los servidores.`,
        kofi: "Apoya en Ko-fi",
        paypal: "Apoya en Paypal",
        partnered: "Sitios Asociados",
        herhor: "Generador de imágenes y rankings de las marcas de excelencia",
        createdBy: "Tomato.gg es un sitio web creado por",
        notAffiliated: "y no está afiliado a Wargaming.net.",
        privacy: "Privacy Policy",
    },
    fr: {
        boomer: "Changer l'arrière-plan",
        boomerAria: "Changer la couleur d'arrière-plan",
        support: "Soutenez Tomato.gg",
        donations: `Tomato.gg fonctionne pleinement sur les dons par utilisateurs. Si vous trouvez de 
        la valeur sur ce site web, considérez de faire un don pour aider à maintenir les serveurs.`,
        kofi: "Soutenez avec Ko-fi",
        paypal: "Soutenez avec Paypal",
        partnered: "Site web partenaire",
        herhor: "Classement des marques d'excellence et générateur d'image",
        createdBy: "Tomato.gg est un site web créé par",
        notAffiliated: "et n'est pas affilié avec Wargaming.net.",
        privacy: "Privacy Policy",
    },
    hr: {
        boomer: "Uključi / Isključi pozadinu Boomer",
        boomerAria: "uključi / isključi boju pozadine",
        support: "Podrška Tomato.gg",
        donations: `Tomato.gg u potpunosti radi na donacijama korisnika. Ako na stranici pronađete vrijednosti,
        razmislite o podršci kako bi poslužitelji ostali aktivni.`,
        kofi: "Podrška na Ko-fi",
        paypal: "Podrška na Paypal",
        partnered: "Stranice u partnerstvu",
        herhor: "Poredak Znakova Izvrsnosti i generator slika",
        createdBy: "Tomato.gg je web stranica koju je izradio",
        notAffiliated: "i nije povezana s Wargaming.net.",
        privacy: "Privacy Policy",
    },
    ko: {
        boomer: "어두운 배경",
        boomerAria: " 어두운 배경",
        support: "토마토 지원하기",
        donations: ` 토마토는 유저 도네이션으로 운영됩니다. 저희 사이트가 유용하셨다면 도네이션으로 
        계속 서버운영을 할 수 있겠끔 지원해주세요.`,
        kofi: "Ko-fi로 지원",
        paypal: "Paypal로 지원",
        partnered: "파트너 사이트",
        herhor: "화력의 증표와 이미지 생성",
        createdBy: "토마토 계발자는",
        notAffiliated: "Wargaming.net와 제휴하지 않습니다.",
        privacy: "Privacy Policy",
    },
    pl: {
        boomer: "Przełącz Boomerowe Tło",
        boomerAria: "Przełącz kolor tła",
        support: "Wesprzyj Tomato.gg",
        donations: `Tomato.gg jest utrzymywane całkowicie z darowizn użytkowników. Jeśli uważasz 
        witrynę za wartościową, rozważ pomoc w utrzymaniu działania serwerów.`,
        kofi: "Wesprzyj na Ko-fi",
        paypal: "Wesprzyj na Paypal",
        partnered: "Witryny partnerskie",
        herhor: "Rankingi i generator obrazków biegłości",
        createdBy: "Tomato.gg to witryna stworzona przez",
        notAffiliated: "i nie jest powiązana z Wargaming.net.",
        privacy: "Privacy Policy",
    },
    ru: {
        boomer: "Переключить темный фон",
        boomerAria: "переключить цвет фона",
        support: "Помочь tomato.gg",
        donations: `Tomato.gg полностью работает на пожертвования пользователей. Если вы находите 
        ценность в веб-сайте, подумайте о пожертвовании для серверов.`,
        kofi: "Поддержать через по Ko-fi",
        paypal: "Поддержать через по Paypal",
        partnered: "Сайты-партнеры",
        herhor: "Рейтинги МoE и генератор изображений",
        createdBy: "Tomato.gg - это веб-сайт, созданный",
        notAffiliated: "и не связан с Wargaming.net.",
        privacy: "Privacy Policy",
    },
    tr: {
        boomer: "Boomer Arkaplanını Değiştir",
        boomerAria: "arkaplan rengini değiştir",
        support: "Tomato.gg'yi destekleyin",
        donations: `Tomato.gg tamamen kullanıcı bağışlarıyla çalışır. Web sitesinde bir değer bulursanız, 
        sunucuların çalışmaya devam etmesine yardımcı olmak için bağış yapabilirsiniz.`,
        kofi: "Ko-fi'den Bağış",
        paypal: "Paypal'dan Bağış",
        partnered: "Ortak Web Siteleri",
        herhor: "MoE sıralaması ve görüntü oluşturucu",
        createdBy: "Tomato.gg sitesini yapan kişi ",
        notAffiliated: "ve Wargaming.net ile bağlantılı değildir.",
        privacy: "Privacy Policy",
    },
    zh: {
        boomer: "切換為深色模式",
        boomerAria: "切換背景顏色",
        support: "支持 Tomato.gg",
        donations: `Tomato.gg 完全依靠用戶們捐贈來運行。 如果您在網站上找到了價值，請考慮加入以幫助維護網站運作。`,
        kofi: "使用Ko-fi贊助",
        paypal: "使用Paypal贊助",
        partnerd: "合作網站",
        herhor: "M牌排行榜及圖片產生器",
        createdBy: "Tomato.gg 創自於",
        notAffiliated: "網站不隸屬於 Wargaming.net.",
        privacy: "Privacy Policy",
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
    background: rgb(28, 41, 79);
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid rgb(100, 95, 129);
    @media screen and (max-width: 1000px) {
        width: 0px;
    }
`;

const Logo = styled.div`
    padding: 10px 10px 10px 10px;
    width: auto;
    height: 4em;
    border-bottom: 1px solid rgb(100, 95, 129);
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

const Background = styled.div`
    padding: 1px;
    font-size: 0.8rem;
    font-weight: 300;
    color: rgb(230, 230, 240);
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


const Sidebar = withRouter((props) => {
    const { background, toggleBackground } = useContext(BackgroundContext);
    return (
        <StyledSidebar>
            <Layer>
                <Link to="/">
                    <Logo>
                        <LogoImg src={TomatoLogo} alt="logo" />
                    </Logo>
                </Link>
                <Menu>
                    {menuRoutes.map(({ path, title, Icon, isNew }) => (
                        <MenuLink
                            to={path}
                            key={path}
                            style={title().length + isNew * 5 > 20 ? { fontSize: "12px" } : {}}
                        >
                            <nobr>
                                <Icon />
                                &nbsp;&nbsp;{title()} {isNew ? <NewIcon /> : null}
                            </nobr>
                        </MenuLink>
                    ))}
                </Menu>
                <Bottom>
                    <Background>
                        <Switch
                            checked={background === "black"}
                            onChange={() => toggleBackground(background === "black" ? "blue" : "black")}
                            color="primary"
                            name="background"
                            inputProps={{ "aria-label": strings.boomerAria }}
                        />
                        {strings.boomer}
                    </Background>
                    <Support>
                        <h2>{strings.support}</h2>
                        {/* {strings.donations} */}
                        <a target="blank" href="https://ko-fi.com/goldflag">
                            <Kofi>{strings.kofi}</Kofi>
                        </a>
                        <a target="blank" href="https://www.paypal.com/donate/?hosted_button_id=U457SKR8EQTSQ">
                            <PayPal className="donationButton paypal">{strings.paypal}</PayPal>
                        </a>
                    </Support>
                    <Partnered>
                        {/* <span style={{ fontWeight: "500" }}>{strings.partnered}</span>
                        <span>
                            <br />
                            <a target="blank" href="https://herhor.net/wot/">
                                herhor.net
                            </a>{" "}
                        </span>
                        - {strings.herhor}
                        <br /> */}
                        <Link to="/privacy">{strings.privacy}</Link>
                        {" • "}
                        <a target="blank" href="https://herhor.net/wot/">
                            herhor.net
                        </a>
                        {" • "}
                        <a target="blank" href="https://herhor.net/wot/moe/top/">
                            MoE Leaderboards
                        </a>
                    </Partnered>
                    <Line />
                    <CopyrightNotice>
                        {strings.createdBy} <Link to="/stats/NA/goldflag=1011694618">Goldflag</Link> +{" "}
                        <Link to="/stats/NA/Superdude3800=1007264827">Superdude3800</Link> {strings.notAffiliated}
                        <br />
                        Zeyu Yang © 2021
                    </CopyrightNotice>
                </Bottom>
            </Layer>
        </StyledSidebar>
    );
});

export default Sidebar;
