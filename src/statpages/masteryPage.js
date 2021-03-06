// NPM
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import { ServerContext } from "Context";
import MasteryTable from "./masteryPageComponents/masteryTable";
import { serverConv } from "Data/conversions";
import { Loader, FullPageTableWrapper, Info } from "Components";
import Ad from "Ads/ads";
import { useWindowSize } from "Functions/hooks";
import { AdsContainer } from "Ads/adsContainer";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        mastery: "Mastery Badge Requirements",
        dataFrom: "Data from the creators of the {0}",
        moeMod: "Marks of Excellence mod",
        expand: "Expand rows to see 30 days of mastery history",
    },
    cs: {
        mastery: "Nároky na vzorného tankistu",
        dataFrom: "Data od vývojářů",
        moeMod: "Modifikace na vítězné znaky",
        expand: "Rozbalením řádků zobrazíte 30 dní historie vzorného tankisty",
    },
    de: {
        mastery: "Überlegenheitsabzeichen Werte",
        dataFrom: "Werte bereitgestellt vom Ersteller des",
        moeMod: "Marks of Excellence Mods",
        expand: "Wähle eine Zeile aus um die Anforderungen der letzen 30 Tage zu sehen",
    },
    es: {
        mastery: "Requisitos de las medallas de Maestría",
        dataFrom: "Datos de los creadores de",
        moeMod: "Mod de marcas de excelencia",
        expand: "Expanda las filas para ver 30 días del historial de maestría",
    },
    fr: {
        mastery: "Obtention Maîtrises de Char",
        dataFrom: "Données venant des créateurs du {0}",
        moeMod: "mod des Marques d'Excellence",
        expand: "Cliquez sur les lignes pour voir l'historique des maîtrises des 30 derniers jours",
    },
    ko: {
        mastery: "에이스 전차 요구사양",
        dataFrom: "데이터 출처는 ",
        moeMod: "화력의 증표 모드",
        expand: "펼처서 30일 에이스 전차 요구사양 보기",
    },
    hr: {
        mastery: "Zahtjevi Značke Majstorstva",
        dataFrom: "Podaci kreatora",
        moeMod: "Znakovi Izvrsnosti mod",
        expand: "Proširite redove da biste vidjeli 30 dana povijesti majstorstva",
    },
    pl: {
        mastery: "Wymagania na odznakę mistrzowską",
        dataFrom: "Dane twórców {0}",
        moeMod: "moda Marks of Excellence",
        expand: "Kliknij aby zobaczyć historię zmian w Odznakach Mistrzowskich",
    },
    ru: {
        mastery: "Требования к значку мастерства",
        dataFrom: "Информация от создателей",
        moeMod: "Информация от создателей",
        expand: "Разверните, чтобы увидеть историю мастерства за 30 дней",
    },
    tr: {
        mastery: "Tank Ası Gereksinimleri",
        dataFrom: "{0} tarafından oluşturulan veriler.",
        moeMod: "Mükemmellik İşaretleri modu",
        expand: "30 günlük Tank Asları geçmişini görmek için satırları aç",
    },
    zh: {
        mastery: "戰車王牌",
        dataFrom: "數據源自",
        moeMod: "戰車王牌 mod",
        expand: "顯示更多過去30天所得的M牌",
    },
});

export default function MasteryPage(props) {
    const { server } = React.useContext(ServerContext);

    const [data, setData] = useState();
    const windowSize = useWindowSize();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/mastery");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `${backend}/api/mastery/${server}`;
            const raw = await fetch(url);
            let res = await raw.json();
            setData(res);
        }
        getData();
    }, [server]);

    let table = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />;

    if (data) {
        table = <MasteryTable data={data} />;
    }

    const content = (
        <>
            <div>
                <Info>
                    <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                        {serverConv[server]} {strings.mastery}
                    </span>
                    <br />
                    <br />
                    <span
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: "1rem",
                            color: "rgb(130,130,130)",
                        }}
                    >
                        {formatString(
                            strings.dataFrom,
                            <a target="blank" href="https://mastery.poliroid.ru/">
                                {" "}
                                {strings.moeMod}{" "}
                            </a>
                        )}{" "}
                        &#47;&#47;&#47; {strings.expand}
                    </span>{" "}
                    <br />
                </Info>
                {table}
            </div>
            {windowSize.width > 1000 ? (
                <div style={{ padding: "0 0 0 1rem" }}>
                    <Ad slot={"mastery_sidebar_1"} styles={"responsive"} />{" "}
                    <Ad slot={"mastery_sidebar_1"} styles={"responsive"} />
                </div>
            ) : null}
        </>
    );

    return (
        <>
            <Helmet>
                <title>{strings.mastery} - Tomato.gg</title>
            </Helmet>
            <MediaQuery maxWidth={1000}>
                <FullPageTableWrapper columns={"auto"}>
                    <div>{content}</div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1001} maxWidth={1799}>
                <FullPageTableWrapper columns={"auto 180px"}>
                    <div>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <Ad slot={"mastery_sidebar_1"} styles={"160x600"} />
                            <Ad slot={"mastery_sidebar_2"} styles={"160x600"} />
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1800}>
                <FullPageTableWrapper columns={"180px auto 180px"}>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <Ad slot={"mastery_sidebar_1"} styles={"160x600"} />
                            <Ad slot={"mastery_sidebar_2"} styles={"160x600"} />
                        </AdsContainer>
                    </div>
                    <div>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <Ad slot={"mastery_sidebar_1"} styles={"160x600"} />
                            <Ad slot={"mastery_sidebar_2"} styles={"160x600"} />
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
        </>
    );
}
