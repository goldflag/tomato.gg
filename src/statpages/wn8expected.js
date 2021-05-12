// NPM
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import WN8Table from "./wn8Components/wn8Table";
import { Loader, FullPageTableWrapper, Info } from "Components";
import { AdsContainer } from "Ads/adsContainer";
import Reload from "Ads/reload";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = LocalizedStrings({
    en: { expected: "WN8 Expected Values", maintained: "Maintained by the {0}", xvm: "XVM team" },
    cs: { expected: "Očekávané hodnoty Wn8", maintained: "Udržuje {0}", xvm: "XVM týmem" },
    de: { expected: "WN8 Erwartungswerte", maintained: "Gepflegt vom {0}", xvm: "XVM Team" },
    es: { expected: "Valores Esperados de WN8", maintained: "Mantenido por {0}", xvm: "Equipo de XVM" },
    fr: { expected: "Valeurs Attendues pour le WN8", maintained: "Maintenu par {0}", xvm: "l'équipe XVM" },
    ko: { expected: "WN8 기댓값", maintained: "관리자 {0}", xvm: "XVM 팀" },
    hr: { expected: "WN8 Očekivane Vrijednosti", maintained: "Održava {0}", xvm: "XVM tim" },
    pl: { expected: "Oczekiwane wartości dla WN8", maintained: "Zarządzane przez {0}", xvm: "XVM team" },
    ru: { expected: "WN8 Ожидаемая статистика", maintained: "Поддерживается {0}", xvm: "командой XVM" },
    tr: { expected: "WN8 Beklenen Değer", maintained: "Sağlayan: {0}", xvm: "XVM team" },
    zh: { expected: "WN8 期望值", maintained: "由 {0} 維護", xvm: "XVM team" },
});

export default function Leaderboards(props) {
    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/wn8");
        Reload();
        fetch(`${backend}/api/wn8`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);


    const content = (
        <>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>{strings.expected}</span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.3rem",
                        color: "rgb(100,100,100)",
                    }}
                >
                    {formatString(
                        strings.maintained,
                        <a target="blank" href="https://modxvm.com/en/wn8-expected-values/">
                            {strings.xvm}
                        </a>
                    )}
                </span>
                <br />
            </Info>
            {data ? <WN8Table data={data} /> : <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />}
        </>
    );

    return (
        <>
            <Helmet>
                <title>{strings.expected} - Tomato.gg</title>
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
                        <div id="nn_sky2"></div>
<div id="nn_sky1"></div>
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1800}>
                <FullPageTableWrapper columns={"180px auto 180px"}>
                    <div>
                        <AdsContainer flexDir={"column"}>
                        <div id="nn_sky1"></div>

                        </AdsContainer>
                    </div>
                    <div>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                        <div id="nn_sky2"></div>

                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
        </>
    );
}
