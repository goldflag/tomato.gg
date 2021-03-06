// NPM
import React from "react";
import styled from "styled-components";
import LocalizedStrings from "Functions/localizedStrings";
import { Link } from "react-router-dom";

// LOCAL
import { Capital, clanPositions, commonStrings } from "Data/localizations";
import { serverConv } from "Data/conversions";
import Colors, { WN8Color, WRColor, PRColor } from "Styling/colors";

const Root = styled.div`
    flex-grow: 1;
    padding: 0rem 0rem 0.5rem 0rem;
`;

const Square = styled.div`
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    color: white;
`;

const StatCard = styled(Square)`
    padding: 1.5rem 0rem;
    text-align: center;
    font-family: roboto;
    margin-left: 1rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    @media screen and (max-width: 1000px) {
        padding: 1rem 0rem 1rem 0rem;
        font-size: 0.6rem;
        margin: 0;
    }
`;

const PlayerName = styled(Square)`
    text-align: left;
    font-family: roboto;
    line-height: 1.2em;
    padding: 1rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const MobilePlayerName = styled(Square)`
    display: none;
    padding: 1rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    @media screen and (max-width: 1000px) {
        display: block;
        font-size: 0.7em;
        margin: 0.5rem 0rem;
    }
`;

const StatsRow = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 100%;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;

const ClanTag = styled.span`
    font-weight: 600;
    color: ${({ color }) => color};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
`;

const Username = styled.div`
    font-size: 1.5em;
    font-weight: 500;
    color: white;
    padding-bottom: 5px;
`;

const AccountCreated = styled.span`
    color: white;
    font-size: 0.8rem;
`;

const StatCardLabel = styled.span`
    font-size: 0.8rem;
`;

const StatCardValue = styled.span`
    font-size: 1.3rem;
    font-weight: 500;
`;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        at: "{0} at {1}",
        created: "Account created {0}",
        overallWN8: "Overall WN8",
        overallWR: "Overall WR",
        recentWN8: "Recent WN8",
        recentWR: "Recent WR",
        wgRating: "WG Rating",
    },
    cs: {
        at: "{0} v {1}",
        created: "Účet vytvořen {0}",
        overallWN8: "Celkové Wn8",
        overallWR: "Celková míra vítězství",
        recentWN8: "Nedávné Wn8",
        recentWR: "Nedávná míra vítězství",
        wgRating: "WG hodnocení",
    },
    de: {
        at: "{0} bei {1}",
    },
    es: {
        at: "{0} a {1}",
        created: "Cuenta creada el {0}",
        overallWN8: "WN8 Total",
        overallWR: "%Victorias Total",
        recentWN8: "WN8 Reciente",
        recentWR: "%Victorias Reciente",
        wgRating: "Clasificación WG",
    },
    fr: {
        at: "{0} á {1}",
        created: "Compte créé le {0}",
        overallWN8: "WN8 Global",
        overallWR: "Taux de Victoire Global",
        recentWN8: "WN8 Récent",
        recentWR: "Taux de Victoire Récent",
        wgRating: "Côte WG",
    },
    ko: {
        at: "{1}의 {0}",
        created: "계정 생성일 {0}",
        overallWN8: "전체 WN8",
        overallWR: "Overall 승률",
        recentWN8: "최근 WN8",
        recentWR: "최근 승률",
        wgRating: "개인 순위",
    },
    hr: {
        at: "{0} u {1}",
        created: "Račun kreiran {0}",
        overallWN8: "Ukupno WN8",
        overallWR: "Ukupno WR",
        recentWN8: "Nedavno WN8",
        recentWR: "Nedavno WR",
        wgRating: "WG Ocjena",
    },
    pl: {
        at: "{0} w {1}",
        created: "Konto stworzone {0}",
        overallWN8: "Ogólne WN8",
        overallWR: "Ogólny % Zwycięstw",
        recentWN8: "Bieżące WN8",
        recentWR: "Bieżący % Zwycięstw",
        wgRating: "Klasyfikacja WG",
    },
    ru: {
        at: "{0} в {1}",
        created: "Аккаунт создан {0}",
        overallWN8: "Общий WN8",
        overallWR: "Общий WR",
        recentWN8: "Недавний WN8",
        recentWR: "Недавний WR",
        wgRating: "Рейтинг WG",
    },
    tr: {
        at: "{1} klanında {0}",
        created: "Hesap {0} tarihinde oluşturuldu",
        overallWN8: "Genel WN8",
        overallWR: "Genel WR",
        recentWN8: "Son günler WN8",
        recentWR: "Son günler WR",
        wgRating: "WG Rating",
    },
    zh: {
        created: "建立帳號 {0}",
        overallWN8: "整體 WN8",
        overallWR: "整體勝率",
        recentWN8: "近期 WN8",
        recentWR: "近期勝率",
        wgRating: "WG 評價",
    },
});

export default function TopStats(props) {
    const date = new Date(props.accountCreationDate * 1000);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };

    let clanInfo = null;
    if (props.clanStats !== "NO CLAN") {
        const { role, clan } = props.clanStats;
        clanInfo = formatString(
            strings.at,
            clanPositions[role],
            <Link to={`/clan-stats/${serverConv[props.server]}/${clan.tag}=${clan.clan_id}`}>
                <ClanTag {...clan}>[{clan.tag}]</ClanTag>
            </Link>
        );
    }

    const playerInfo = (
        <>
            <Username>{props.username}</Username>
            {clanInfo}
            <br />
            <AccountCreated>
                {formatString(strings.created, date.toLocaleDateString(navigator.languages[0], dateOptions))}
            </AccountCreated>
        </>
    );

    const statCards = [
        { label: strings.overallWN8, value: props.data.overallWN8, colorFn: WN8Color },
        { label: strings.overallWR, value: props.data.overallWinrate + "%", colorFn: WRColor },
        { label: strings.recentWN8, value: props.data.recentWN8, colorFn: WN8Color },
        { label: strings.recentWR, value: props.data.recentWinrate + "%", colorFn: WRColor },
        { label: strings.wgRating, value: props.WGRating, colorFn: PRColor },
        { label: Capital(commonStrings.battles), value: props.battles, colorFn: () => Colors.battles },
    ];

    return (
        <Root>
            <MobilePlayerName backgroundColor={WN8Color(props.data.recentWN8)}>{playerInfo}</MobilePlayerName>
            <StatsRow>
                <PlayerName backgroundColor={WN8Color(props.data.recentWN8)}>{playerInfo}</PlayerName>
                {statCards.map(({ label, value, colorFn }, i) => (
                    <StatCard backgroundColor={colorFn(value)} key={i}>
                        <StatCardLabel>{label}</StatCardLabel>
                        <br />
                        <StatCardValue>{value}</StatCardValue>
                    </StatCard>
                ))}
            </StatsRow>
        </Root>
    );
}
