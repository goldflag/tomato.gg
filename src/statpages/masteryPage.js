// NPM
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import LocalizedStrings from "react-localization";

// LOCAL
import { ServerContext } from "Context";
import MasteryTable from "./masteryPageComponents/masteryTable";
import { serverConv } from "Data/conversions";
import { Loader, FullPageTableWrapper, Info } from "Components";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const strings = new LocalizedStrings({
    en: {
        mastery: "Mastery Badge Requirements",
        dataFrom: "Data from the creators of the {0}",
        moeMod: "Marks of Excellence mod",
        expand: "Expand rows to see 30 days of mastery history",
    },
    fr: {
        mastery: "Obtention Maîtrises de Char",
        dataFrom: "Données venant des créateurs du {0}",
        moeMod: "mod des Marques d'Excellence",
        expand: "Cliquez sur les lignes pour voir l'historique des maîtrises des 30 derniers jours",
    },
    tr: {
        mastery: "Mükemmellik İşaretleri Gereksinimleri",
        dataFrom: "{0} tarafından oluşturulan veriler.",
        moeMod: "Mükemmellik İşaretleri modu",
        expand: "30 günlük Tank Asları geçmişini görmek için satırları aç",
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

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/mastery");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `${backend}/api/abcd/mastery/${server}`;
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

    return (
        <FullPageTableWrapper>
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
                    {strings.formatString(
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
        </FullPageTableWrapper>
    );
}
