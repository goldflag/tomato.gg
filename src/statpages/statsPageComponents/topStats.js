// NPM
import React from "react";
import styled from "styled-components";

// LOCAL
import { WN8color, WRcolor, PRcolor, battlesColor } from "Functions/colors";

const Root = styled.div`
    flex-grow: 1;
    padding: 1rem 0rem 0.5rem 0rem;
`;

const Square = styled.div`
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    color: white;
`;

const StatCard = styled(Square)`
    padding: 1.5rem 0rem;
    text-align: center;
    font-family: roboto;
    width: 11%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    @media screen and (max-width: 1000px) {
        width: 15%;
        padding: 1rem 0rem 1rem 0rem;
        font-size: 0.6rem;
    }
`;

const PlayerName = styled(Square)`
    text-align: left;
    font-family: roboto;
    line-height: 1.2em;
    width: 350px;
    height: 92.5px;
    padding: 1.1rem 1rem 1.5rem 1rem;
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
        margin: 0rem 0rem 1rem 0rem;
    }
`;

const StatsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
`;

const ClanTag = styled.span`
    font-weight: 600;
    color: ${({ color }) => color};
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

export default function TopStats(props) {
    const date = new Date(props.accountCreationDate * 1000);
    const creationDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    const playerInfo =
        props.clanStats !== "NO CLAN" ? (
            <>
                <Username>{props.username}</Username>
                {props.clanStats.role_i18n} at <ClanTag {...props.clanStats.clan}>[{props.clanStats.clan.tag}]</ClanTag>
                <br />
                <AccountCreated>Account created {creationDate}</AccountCreated>
            </>
        ) : null;

    const statCards = [
        { label: "Overall WN8", value: props.data.overallWN8, colorFn: WN8color },
        { label: "Overall WR", value: props.data.overallWinrate + '%', colorFn: WRcolor },
        { label: "Recent WN8", value: props.data.recentWN8, colorFn: WN8color },
        { label: "Recent WR", value: props.data.recentWinrate + '%', colorFn: WRcolor },
        { label: "WG Rating", value: props.WGRating, colorFn: PRcolor },
        { label: "Battles", value: props.stats.battles, colorFn: battlesColor },
    ];

    return (
        <Root>
            <MobilePlayerName backgroundColor={WN8color(props.data.overallWN8)}>{playerInfo}</MobilePlayerName>
            <StatsRow>
                <PlayerName backgroundColor={WN8color(props.data.overallWN8)}>{playerInfo}</PlayerName>
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
