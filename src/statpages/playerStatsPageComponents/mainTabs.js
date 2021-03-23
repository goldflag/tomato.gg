// NPM
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";
import LocalizedStrings from "Functions/localizedStrings";
import styled from "styled-components";
import MediaQuery from 'react-responsive'

// LOCAL
import { TabPanel } from "../../components/customTabs";
import TopStats from "./topStats";
import TopTable from "./topTable.js";
import AllTankStats from "./allTankStats";
import Charts from "./charts";
import SessionsLogParent from "./sessions/sessionsLogParent";
import HallOfFame from "./hallOfFame";
import Treemap from "./treemap/treemap";
import { NewIcon } from "Components";
import { useURLState } from "Functions/hooks";
import { worryrun } from "Assets/loaders";
import { worryexcited } from "Assets/staticfrogs";
import Ad from "Ads/ads";
import { useWindowSize } from "Functions/hooks";

const CustomTabs = withStyles({
    root: {
        elevation: 10,
        borderBottom: "1px solid rgb(200, 200, 200)",
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(200, 200, 200)",
    },
})(Tabs);

const CustomTab = withStyles((t) => ({
    root: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.9rem",
        marginRight: t.spacing(4),
        fontFamily: "Segoe UI, Futura",
        color: "rgb(240, 240, 240)",
        "&:hover": {
            color: "rgb(142, 147, 245)",
            opacity: 1,
        },
        "&$selected": {
            color: "rgb(191, 185, 250)",
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const strings = LocalizedStrings({
    en: {
        main: "MAIN STATS",
        hof: "HALL OF FAME",
        sessions: "SESSIONS",
        infographics: "INFOGRAPHICS",
        treemap: "TREEMAP",
        cached: "Stats displayed are cached. Fetching real-time updated stats.",
        blameWG: "If this message doesn't go away, blame Wargaming's GARBAGE API.",
        realTime: "Real-time stats now loaded!",
    },
    cs: {
        main: "HLAVNÍ STATISTIKY",
        hof: "SÍŇ SLÁVY",
        sessions: "ZÁZNAM",
        infographics: "INFOGRAFIKA",
        treemap: "TREEMAP",
        cached: "Zobrazené statistiky se ukládají do mezipaměti. Načítání aktualizovaných statistik z reálného času.",
        blameWG: "Pokud tato zpráva nezmizí, může za to debilní API Wargamingu.",
        realTime: "Statistiky z reálného času jsou nyní načteny!",
    },
    es: {
        main: "ESTADÍSTICAS PRINCIPALES",
        hof: "SALÓN DE LA FAMA",
        sessions: "SESIONES",
        infographics: "INFOGRAFÍA",
        treemap: "TREEMAP",
        cached: `Las estadísticas mostradas son las que se encuentran en la cache. Obteniendo las 
        estadísticas actualizadas en tiempo real.`,
        blameWG: "Si este mensaje no se quita, quéjate con la API DE PORQUERÍA de Wargaming.",
        realTime: "Se han cargado las estadísticas en tiempo real!",
    },
    de: {
        main: "ALLGEMEINE STATISTIKEN",
        hof: "HALL OF FAME",
        sessions: "SESSIONS",
        infographics: "INFOGRAFIKEN",
        treemap: "TREE MAP",
        cached: "Dargestellte Statistiken sind gecached. Frage aktuelle Daten an.",
        blameWG: "Wenn diese Nachricht nicht nicht verschwindet gibt es ein Problem mit der WG-API.",
        realTime: "Daten wurden aktualisiert!",
    },
    fr: {
        main: "STATS PRINCIPALES",
        hof: "PANTHÉON",
        sessions: "SESSIONS",
        infographics: "INFOGRAPHIE",
        treemap: "TREEMAP", // No translation
        cached: "Les stats affichées sont mises en cache. Mise-à-jour en temps réel des stats en cours.",
        blameWG: "Si ce message ne part pas, blâmez la mauvaise API de WARGAMING.",
        realTime: "Stats en temps réelles chargées!",
    },
    ko: {
        main: "메인 통계",
        hof: "명예의 전당",
        sessions: "세션",
        infographics: "인포그래픽",
        treemap: "트리맵",
        cached: "보여지는 통계는 캐쉬되어있습니다. 실시간 업데이트 된 통계를 가져오는 중입니다.",
        blameWG: "혹시 이 메시지가 사라지지 않는다면 쓰레기같은 워게이밍의 API를 탓 하십시오.",
        realTime: "실시산 통계가 반영되였습니다.",
    },
    hr: {
        main: "GLAVNA STATISTIKA",
        hof: "KUĆA SLAVNIH",
        sessions: "SEZONA",
        infographics: "INFOGRAFIKA",
        treemap: "KARTA",
        cached: `Prikazane statistike se pohranjuju u predmemoriju. Dohvaćanje ažuriranih statistika u 
        stvarnom vremenu.`,
        blameWG: "Ako ova poruka ne nestane, okrivite Wargaming SMEĆE API.",
        realTime: "Statistike u stvarnom vremenu učitane!",
    },
    pl: {
        main: "GŁÓWNE STATYSTYKI",
        hof: "ALEJA SŁAW",
        sessions: "SESJE",
        infographics: "INFOGRAFIKI",
        treemap: "MAPA DRZEWEK", // tbd
        cached: "Wyświetlone dane pochodzą z pamięci podręcznej. Trwa pobieranie aktualnych statystyk.",
        blameWG: "Jeśli ta wiadomość nie zniknie, należy winić ŚMIECIOWE API Wargamingu.",
        realTime: "Świeże statystyki zostały załadowane!",
    },
    ru: {
        main: "ОСНОВНАЯ СТАТИСТИКА",
        hof: "ЗАЛ СЛАВЫ",
        sessions: "СЕССИИ",
        infographics: "ИНФОГРАФИКА",
        treemap: "ДИАГРАММЫ",
        cached: "Отображаемая статистика кэшируется. Получение обновленной статистики в реальном времени.",
        blameWG: "Если это сообщение не исчезает, вините плохой API от Wargaming..",
        realTime: "Статистика в реальном времени загружена!",
    },
    tr: {
        main: "ANA İSTATİSTİKLER",
        hof: "ŞÖHRET SALONU",
        sessions: "OTURUMLAR",
        infographics: "BİLGİ GRAFİKLERİ",
        treemap: "YOĞUNLUK HARİTASI",
        cached: "Görüntülenen istatistikler önbelleğe alındı. Gerçek zamanlı güncel istatistikler alınıyor. ",
        blameWG: "Eğer bu mesaj gitmiyorsa, Wargaming'e ait çöp oğlu çöp API'yi suçlayın.",
        realTime: "Gerçek zamanlı istatistikler yüklendi!",
    },
    zh: {
        main: "所有統計",
        hof: "名人堂",
        sessions: "每日統計",
        infographics: "綜合圖表",
        treemap: "矩陣圖",
        cached: "顯示統計已儲存，正取得即時更新統計。",
        blameWG: "如果此訊息尚未消失， 可以知道WG的API是個笑話。",
        realTime: "即時統計已加載!",
    },
});

const AdsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const tabs = [
    {
        label: strings.main,
        value: "main",
        body: [
            (props) => <TopTable data={props.graphData.overallStats} />,
            (props) => 
                <AdsContainer>            
                    <MediaQuery maxWidth={999}>
                        <Ad slot={"main_stats_banner"} styles={"300x50"} />
                    </MediaQuery>
                    <MediaQuery minWidth={1000}>
                        <Ad slot={"main_stats_banner"} styles={"728x90"} />
                    </MediaQuery>
                </AdsContainer>,
            (props) => (
                <AllTankStats overall={props.recentStats.overallStats.tankWN8} recents={props.recentStats.recents} />
            ),
        ],
    },
    {
        label: strings.hof,
        icon: <NewIcon />,
        value: "hall-of-fame",
        body: [
            (props) => 
                <AdsContainer>            
                    <MediaQuery maxWidth={999}>
                        <Ad slot={"main_stats_banner"} styles={"300x50"} />
                    </MediaQuery>
                    <MediaQuery minWidth={1000}>
                        <Ad slot={"main_stats_banner"} styles={"728x90"} />
                    </MediaQuery>
                </AdsContainer>,
            (props) => (
                <HallOfFame
                    id={props.recentStats.id}
                    server={props.recentStats.server}
                    hofData={props.hofData}
                    hofmainData={props.hofmainData}
                />
            ),
        ],
    },
    {
        label: strings.sessions,
        value: "sessions",
        body: [
            (props) => 
            <AdsContainer>            
                <MediaQuery maxWidth={999}>
                    <Ad slot={"main_stats_banner"} styles={"300x50"} />
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <Ad slot={"main_stats_banner"} styles={"728x90"} />
                </MediaQuery>
            </AdsContainer>,
            (props) => <SessionsLogParent data={props.recentStats.sessions} />
        ],
    },
    {
        label: strings.infographics,
        value: "infographics",
        body: [
            (props) => 
            <AdsContainer>            
                <MediaQuery maxWidth={999}>
                    <Ad slot={"main_stats_banner"} styles={"300x50"} />
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <Ad slot={"main_stats_banner"} styles={"728x90"} />
                </MediaQuery>
            </AdsContainer>,
            (props) => (
                <Charts
                    data={props.graphData}
                    clanData={props.clanHistory}
                    currentClan={props.clanStats}
                    stats={props.summary}
                />
            ),
        ],
    },
    {
        label: strings.treemap,
        icon: <NewIcon />,
        value: "treemap",
        body: [
            (props) => 
            <AdsContainer>            
                <MediaQuery maxWidth={999}>
                    <Ad slot={"main_stats_banner"} styles={"300x50"} />
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <Ad slot={"main_stats_banner"} styles={"728x90"} />
                </MediaQuery>
            </AdsContainer>,
            (props) => <Treemap data={props.recentStats.tree} />
        ],
    },
];

const Container = styled.div`
    padding: ${({ padding }) => padding};
    max-width: 2200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
`;

const LoadingStyle = styled.div`
    display: flex;
    min-height: 55px;
    align-items: center;
    width: 100%;
    background: ${({ color }) => color};
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 3px rgb(20, 20, 30);
    border-radius: 20px;
    transition: color 2s;
    @media screen and (max-width: 1000px) {
        margin: 1rem 0rem 0rem 0rem;
    }
`;

const TrashAPI = styled.span`
    font-size: 0.7rem;
    color: rgb(200, 200, 200);
`;


const LoadingHeader = ({ stage }) => {
    let color, icon, content;
    if (stage === 1) {
        color = "linear-gradient(90deg, rgba(135,47,152,1) 0%, rgba(84,37,199,1) 53%, rgba(25,101,223,1) 100%)";
        icon = { src: worryrun, alt: "worryrun" };
        content = (
            <div>
                {strings.cached}
                <br />
                <TrashAPI>{strings.blameWG}</TrashAPI>
            </div>
        );
    } else if (stage === 2) {
        color = "linear-gradient(90deg, rgba(72,152,47,1) 0%, rgba(37,199,168,1) 53%, rgba(0,255,245,1) 100%)";
        icon = { src: worryexcited, alt: "worryexcited" };
        content = strings.realTime;
    } else return null;
    return (
        <LoadingStyle color={color}>
            <img src={icon.src} style={{ width: "30px", marginRight: "0.5rem" }} alt={icon.alt} />
            {content}
        </LoadingStyle>
    );
};

export default function MainTabs(props) {
    const [page, setPage] = useURLState("page", "main");
    const windowSize = useWindowSize();
    return (
        <Container
            columns={windowSize.width > 1000 ? "auto 180px" : "auto"}
            padding={windowSize.width > 1000 ? "1rem" : "0.5rem"}
        >
            <div style={{ minWidth: 0 }}>
                <LoadingHeader stage={props.stage} />
                <TopStats
                    username={props.username}
                    WGRating={props.WGRating}
                    battles={props.battles}
                    data={props.graphData}
                    clanStats={props.clanStats}
                    accountCreationDate={props.accountCreationDate}
                    lastPlayedTime={props.lastPlayedTime}
                    server={props.server}
                />
                <CustomTabs
                    value={page}
                    indicatorColor="primary"
                    styles={{ backgroundColor: "rgb(76, 90, 166)" }}
                    onChange={(e, val) => setPage(val)}
                    aria-label="tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {tabs.map(({ label, icon, value }, i) =>
                        // prettier-ignore
                        <CustomTab label={<div>{label} {icon}</div>} value={value} key={i} />
                    )}
                </CustomTabs>
                {tabs.map(({ body, value }, i) => (
                    <TabPanel value={page} index={value} key={i}>
                        {body.map((Section, i) => (
                            <div style={{ marginTop: "1rem" }} key={i}>
                                <Section {...props}/>
                            </div>
                        ))}
                    </TabPanel>
                ))}
            </div>
            {windowSize.width > 1000 ? (
                <div style={{ padding: "0 0 0 1rem" }}>
                    {/* <AdSense.Google
                        client={"ca-pub-1358649580645755"}
                        slot={`4142533563`}
                        
                        format="responsive"
                    /> */}
                    <Ad slot={"player_sidebar_1"} styles={"160x600"} />{" "}
                    <Ad slot={"player_sidebar_2"} styles={"160x600"} />
                </div>
            ) : null}
        </Container>
    );
}
