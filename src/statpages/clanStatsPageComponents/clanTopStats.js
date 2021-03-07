// NPM
import React, { useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Scrollbar from "react-scrollbars-custom";
import LocalizedStrings from "react-localization";

// LOCAL
import { WN8color, WRcolor } from "Functions/colors";
import { Capital, commonStrings } from "Data/localizations";
import BubblePlot from "./bubblePlot";
import { CustomTabs, CustomTab } from "../tabs/customTabs";

const Name = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-template-columns: 100px auto;
    margin: -1rem -0.5rem;
`;
const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0rem -0.5rem 0.5rem;
`;
const BottomGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: -0.5rem 0rem;
`;

const SplitSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0rem -0.5rem 1rem -0.5rem;
`;
const Description = styled.div`
    font-size: 0.5rem;
    background-color: rgba(40, 40, 70, 0.5);
    margin: 0rem 0.5rem;
`;
const StatBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ val, stat }) =>
        stat === "WN8" ? WN8color(val) : stat === "winrate" ? WRcolor(val) : "rgba(70, 70, 110, 0.5)"};
    padding: 1rem;
    margin: 0.5rem 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;
const StatBoxLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    color: rgb(200, 200, 200);
`;
const ClanName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    font-size: 1.5rem;
`;
const ClanIcon = styled.img`
    margin: 1rem;
    max-width: 100px;
`;

const Delta = styled(({ delta, ...props }) =>
    delta ? (
        <span {...props}>
            ({delta > 0 ? "+" : ""}
            {delta})
        </span>
    ) : null
)`
    color: ${({ delta }) => (delta > 0 ? "rgb(34, 199, 66)" : "rgb(255, 41, 94)")};
`;

const RankDelta = ({ rank, delta }) =>
    rank ? (
        <span>
            {Capital(commonStrings.rank)}: {rank} <Delta delta={delta} />
        </span>
    ) : null;

const Percent = ({ value, total }) => (total > 0 ? ((value * 100) / total).toFixed(2) + "%" : "-");

const StatCard = ({ stat, label, value, rankKey, total, rankings }, i) => (
    <StatBox val={value} stat={stat}>
        <StatBoxLabel>{label}</StatBoxLabel>
        {total ? null : rankKey ? rankings[rankKey].value : value}
        {rankKey && rankings[rankKey].rank && (
            <StatBoxLabel>
                <RankDelta rank={rankings[rankKey].rank} delta={rankings[rankKey].rank_delta} />
            </StatBoxLabel>
        )}
        {total && (
            <>
                <Percent value={value} total={total} />
                <StatBoxLabel>
                    {value}/{total}
                </StatBoxLabel>
            </>
        )}
    </StatBox>
);

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        created: "Created: {0}",
        recent: "Recent {0}",
        overall: "Overall {0}",
        clanRating: "Clan Rating",
        avgDaily: "Avg. Daily Battles",
        avgPR: "Avg. PR",
        playerCount: "Players",
        globELO: "Global Map ELO",
        provinces: "Provinces",
    },
});

export default function ClanTopStats({
    image,
    tag,
    name,
    created_at,
    motto,
    clanColor,
    members_count,
    overallWN8,
    overallWinrate,
    recentWN8,
    recentWinrate,
    rankings,
    description,
    globalMap,
    strongholdX,
    skirmish,
    bubbleRecent,
    bubbleOverall,
}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const topCards = [
        {
            stat: "WN8",
            label: formatString(strings.recent, commonStrings.wn8),
            value: parseInt(recentWN8),
        },
        {
            stat: "winrate",
            label: formatString(strings.recent, Capital(commonStrings.longWR)),
            value: recentWinrate.toFixed(2) + "%",
        },
        {
            stat: "WN8",
            label: formatString(strings.overall, commonStrings.wn8),
            value: parseInt(overallWN8),
        },
        {
            stat: "winrate",
            label: formatString(strings.overall, Capital(commonStrings.longWR)),
            value: overallWinrate.toFixed(2) + "%",
        },
        {
            label: strings.clanRating,
            rankKey: "efficiency",
        },
        {
            label: strings.avgDaily,
            rankKey: "battles_count_avg_daily",
        },
        {
            label: strings.avgPR,
            rankKey: "global_rating_weighted_avg",
        },
        {
            label: strings.playerCount,
            value: members_count,
        },
    ];

    const bottomCards = [
        {
            label: strings.globELO,
            rankKey: "gm_elo_rating_10",
        },
        {
            label: "SH Tier X ELO",
            rankKey: "fb_elo_rating_10",
        },
        {
            label: "SH Tier VIII ELO",
            rankKey: "fb_elo_rating_8",
        },
        {
            label: "SH Tier VI ELO",
            rankKey: "fb_elo_rating_6",
        },
        {
            label: "Global Map WR",
            value: globalMap.wins_10_level,
            total: globalMap.battles_10_level,
        },
        {
            label: "SH X WR",
            value: strongholdX.win_10,
            total: strongholdX.total_10,
        },
        {
            label: "SH VIII WR",
            value: skirmish.win_8,
            total: skirmish.total_8,
        },
        {
            label: "SH VI WR",
            value: skirmish.win_6,
            total: skirmish.total_6,
        },
        {
            label: strings.provinces,
            value: globalMap.provinces_count,
        },
        {
            label: "28D SH X WR",
            value: strongholdX.win_10_in_28d,
            total: strongholdX.total_10_in_28d,
        },
        {
            label: "28D SH VIII WR",
            value: skirmish.win_8_in_28d,
            total: skirmish.total_8_in_28d,
        },
        {
            label: "28D SH VI WR",
            value: skirmish.win_6_in_28d,
            total: skirmish.total_6_in_28d,
        },
    ];

    return (
        <div style={{ marginBottom: "1rem" }}>
            <Name>
                <ClanIcon src={image} alt={tag} />
                <ClanName>
                    <span>
                        {" "}
                        <span style={{ color: clanColor, textShadow: "1px 1px 1px rgba(0, 0, 0, 0.75)" }}>
                            [{tag}]
                        </span>{" "}
                        {name}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "rgb(200, 200, 200)", padding: "0.4rem" }}>
                        {formatString(strings.created, created_at)}
                    </span>
                    <span style={{ fontSize: "0.9rem" }}>{motto}</span>
                </ClanName>
            </Name>
            <TopGrid>
                {topCards.map((props, i) => (
                    <StatCard rankings={rankings} {...props} key={i} />
                ))}
            </TopGrid>
            <SplitSection>
                <Description>
                    <Scrollbar noScrollX>
                        <div style={{ padding: "1rem" }}>{parse(description)}</div>
                    </Scrollbar>
                </Description>
                <BottomGrid>
                    {bottomCards.map((props, i) => (
                        <StatCard rankings={rankings} {...props} key={i} />
                    ))}
                </BottomGrid>
            </SplitSection>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="OVERALL" />
                <CustomTab label="RECENT" />
            </CustomTabs>
            <BubblePlot mode={value} data={value === 0 ? bubbleOverall : bubbleRecent} />
        </div>
    );
}
