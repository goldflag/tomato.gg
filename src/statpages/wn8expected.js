// NPM
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import LocalizedStrings from "react-localization";

// LOCAL
import WN8Table from "./wn8Components/wn8Table";
import { Loader, FullPageTableWrapper, Info } from "Components";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        expected: "WN8 Expected Values",
        maintained: "Maintained by the {0}",
        xvm: "XVM team",
    },
    cs: {
        expected: "Očekávané hodnoty Wn8",
        maintained: "Udržuje {0}",
        xvm: "XVM týmem",
    },
    de: {
        expected: "WN8 Erwartungswerte",
        maintained: "Gepflegt vom {0}",
        xvm: "XVM Team",
    },
    es: {
        expected: "Valores Esperados de WN8",
        maintained: "Mantenido por {0}",
        xvm: "Equipo de XVM",
    },
    fr: {
        expected: "Valeurs Attendues pour le WN8",
        maintained: "Maintenu par {0}",
        xvm: "l'équipe XVM",
    },
    pl: {
        expected: "Oczekiwane wartości dla WN8",
        maintained: "Zarządzane przez {0}",
        xvm: "XVM team",
    },
    ru: {
        expected: "WN8 Ожидаемая статистика",
        maintained: "Поддерживается {0}",
        xvm: "командой XVM",
    },
    tr: {
        expected: "WN8 Beklenen Değer",
        maintained: "Sağlayan: {0}",
        xvm: "XVM team",
    },
    zh: {
        expected: "WN8 期望值",
        maintained: "由 {0} 維護",
        xvm: "XVM team",
    },
});

export default function Leaderboards(props) {
    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/wn8");
    }, []);

    useEffect(() => {
        fetch(`${backend}/api/wn8`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <FullPageTableWrapper>
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
        </FullPageTableWrapper>
    );
}
