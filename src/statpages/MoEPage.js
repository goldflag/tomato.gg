// NPM
import React, { useEffect, useState, useContext } from "react";
import ReactGA from "react-ga";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { ServerContext } from "Context";
import MoETable from "./MoEPageComponents/MoETable";
import MoETracker from "./MoEPageComponents/MoETracker";
import { TabPanel, CustomTabs, CustomTab } from "./tabs/customTabs";
import { Loader, FullPageTableWrapper, Info } from "Components";
import { serverConv } from "Data/conversions";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        moe: "Marks of Excellence Requirements",
        dataFrom: "Data from the creators of the {0}",
        moeMod: "Marks of Excellence mod",
        expand: "Expand rows to see 30 days of MoE history",
        avg: "*MoE change is calculated using 3-day averages to minimize noise",
        expected: "EXPECTED VALUES",
        exp95change: "95% EXP. VAL CHANGE",
        exp85change: "85% EXP. VAL CHANGE",
        exp65change: "65% EXP. VAL CHANGE",
    },
    cs: {
        moe: "Nároky na vítězné znaky",
        dataFrom: "Data od vývojářů",
        moeMod: "Modifikace na vítězné znaky",
        expand: "Rozbalením řádků zobrazíte 30 dní historie vítězných znaků",
        avg: "*Změna ve vítězných znacích je kalkulována použitím třídenních průměrů, aby se redukovala chybovost",
        expected: "OČEKÁVANÉ HODNOTY",
        exp95change: "ZMĚNA OČEKÁVANÝCH HODNOT PRO 95%",
        exp85change: "ZMĚNA OČEKÁVANÝCH HODNOT PRO 85%",
        exp65change: "ZMĚNA OČEKÁVANÝCH HODNOT PRO 65%",
    },
    de: {
        moe: "Erfolgsmarkierungen Anforderungen",
        dataFrom: "Werte bereitgestellt vom Ersteller des",
        moeMod: "Marks of Excellence Mods",
        expand: "Wähle eine Zeile aus um die Anforderungen der letzen 30 Tage zu sehen",
        avg: "*Veränderungen werden mit dem 3-Tages Mittel berechnet um Rauschen zu minimieren",
        expected: "ERWARTUNGSWERTE",
        exp95change: "95% ERW. VERÄNDERUNG",
        exp85change: "85% ERW. VERÄNDERUNG",
        exp65change: "65% ERW. VERÄNDERUNG",
    },
    es: {
        moe: "Requisitos de Las Marcas de Excelencia",
        dataFrom: "Datos de los creadores de",
        moeMod: "Mod de marcas de excelencia",
        expand: "Expanda las filas para ver los 30 días de historial de las marcas de excelencia",
        avg: `*El cambio de las marcas de excelencia se calcula utilizando el promedio de 3 días 
        para minimizar el ruido`,
        expected: "VALORES ESPERADOS",
        exp95change: "95% DE CAMBIO DE VALOR ESPERADO",
        exp85change: "85% DE CAMBIO DE VALOR ESPERADO",
        exp65change: "65% DE CAMBIO DE VALOR ESPERADO",
    },
    fr: {
        moe: "Obtention des Marques d'Excellence",
        dataFrom: "Données venant des créateurs du {0}",
        moeMod: "mod des Marques d'Excellence",
        expand: "Cliquez sur les lignes pour voir l'historique des marques des 30 derniers jours",
        avg: `*Le changement des marques est calculé en utilisant les moyennes des 3 derniers jours
         pour réduire les erreurs`,
        expected: "VALEURS ATTENDUES",
        exp95change: "CHANGEMENT ATTENDU 95%",
        exp85change: "CHANGEMENT ATTENDU 85%",
        exp65change: "CHANGEMENT ATTENDU 65%",
    },
    ko: {
        moe: "화력의 증표 요구사양",
        dataFrom: " 데이터 출처는 ",
        moeMod: " 화력의 증표 모드",
        expand: " 펼처서 30일 화력의 증표 요구사양 보기 ",
        avg: "*화력의 증표는 노이즈를 줄이기 위해 3일 평균값으로 계산됩니다",
        expected: "기댓값",
        exp95change: "95% 경험치 기댓값",
        exp85change: "85% 경험치 기댓값",
        exp65change: "65% 경험치 기댓값 ",
    },

    tr: {
        moe: "Mükemmellik İşaretleri Gereksinimleri",
        dataFrom: "{0} tarafından oluşturulan veriler.",
        moeMod: "Mükemmellik İşaretleri modu",
        expand: "30 günlük MoE geçmişini görmek için satırları aç",
        avg: "*MoE değişiklikleri hatayı en aza indirgemek için 3-gün ortalaması alınarak hesaplanır",
        expected: "BEKLENEN DEĞERLER",
        exp95change: "95% BEK. DEG DEĞİŞİM",
        exp85change: "85% BEK. DEG DEĞİŞİM",
        exp65change: "65% BEK. DEG DEĞİŞİM",
    },
    pl: {
        moe: "Wymagania biegłości",
        dataFrom: "Dane od twórców {0}",
        moeMod: "moda Marks of Excellence",
        expand: "Rozszerz rzędy aby zobaczyć 30-dniową historię zmian wartości oczekiwanych",
        avg: "*Zmiana oczekiwanych jest liczona 3-dniową średnią, żeby zminimalizować zakłócenia",
        expected: "OCZEKIWANE WARTOŚCI",
        exp95change: "Zmiany oczekiwanych dla 95%",
        exp85change: "Zmiany oczekiwanych dla 85%",
        exp65change: "Zmiany oczekiwanych dla 65%",
    },
    ru: {
        moe: "Требования к отличительным знакам",
        dataFrom: "Информация от создателей",
        moeMod: "Информация от создателей",
        expand: "Разверните, чтобы увидеть историю MG за 30 дней",
        avg: "*Изменение MG рассчитывается с использованием средних значений за 3 дня для минимизации шума.",
        expected: "ОЖИДАЕМЫЕ ЗНАЧЕНИЯ",
        exp95change: "95% EXP. VAL CHANGE",
        exp85change: "85% EXP. VAL CHANGE",
        exp65change: "65% EXP. VAL CHANGE",
    },
    zh: {
        moe: "卓越印記",
        dataFrom: "數據源自",
        moeMod: "卓越印記 mod",
        expand: "顯示更多過去30天所得的卓越印記",
        avg: "*使用3天平均值計算出卓越印記變化，以最大程度地減少變異",
        expected: "期望值",
        exp95change: "三卓",
        exp85change: "二卓",
        exp65change: "一卓",
    },
});

export default function MoEPage(props) {
    const { server } = useContext(ServerContext);

    const [data, setData] = useState();
    const [changeData, setChangeData] = useState();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/moe");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `${backend}/api/moe/${server}`;
            const url2 = `${backend}/api/moetracker/get/${server}`;

            try {
                Promise.all([fetch(url), fetch(url2)])
                    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                    .then(([data1, data2]) => {
                        setData(data1);
                        setChangeData(data2);
                    });
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, [server]);

    let table = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={40} top={20} />;

    if (data) {
        table = <MoETable data={data} />;
    }

    let changeTable95 = <></>;
    let changeTable85 = <></>;
    let changeTable65 = <></>;

    if (changeData) {
        changeTable95 = <MoETracker data={changeData} moe={"95"} />;
        changeTable85 = <MoETracker data={changeData} moe={"85"} />;
        changeTable65 = <MoETracker data={changeData} moe={"65"} />;
    }

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {serverConv[server]} {strings.moe}
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
                        <a target="blank" href="https://gunmarks.poliroid.ru/">
                            {" "}
                            {strings.moeMod}{" "}
                        </a>
                    )}{" "}
                    &#47;&#47;&#47; {strings.expand}
                    <br />
                    {strings.avg}
                </span>
                <br />
            </Info>
            <CustomTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                <CustomTab label={strings.expected} />
                <CustomTab label={strings.exp95change} />
                <CustomTab label={strings.exp85change} />
                <CustomTab label={strings.exp65change} />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                {table}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {changeTable95}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {changeTable85}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {changeTable65}
            </TabPanel>
        </FullPageTableWrapper>
    );
}
