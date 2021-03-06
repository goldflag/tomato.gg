// NPM
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Scrollbar from "react-scrollbars-custom";

// LOCAL
import { WN8color, WRcolor } from "Functions/colors";

const Name = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-template-columns: 100px auto;
    margin: -1rem -0.5rem;
`
const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0rem -0.5rem;
`
const BottomGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: -0.5rem 0rem;
`

const SplitSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0rem -0.5rem 1rem -0.5rem;
`

const Description = styled.div`
    font-size: 0.5rem;
    background-color: rgba(40, 40, 70, 0.5);
    margin: 0rem 0rem 0rem 0.5rem;
    height: 330px;
`
const StatBox = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    background-color: ${({val, stat}) => stat === "WN8" ? WN8color(val) : stat === "winrate" ? WRcolor(val) : "rgba(70, 70, 110, 0.5)"};
    padding: 1rem;
    margin: 1rem 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`
const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(70, 70, 110, 0.5);
    padding: 1rem;
    margin: 0.5rem 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`

const StatBoxLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    color: rgb(200, 200, 200);
`

const ClanName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    font-size: 1.5rem;
`

const ClanIcon = styled.img`
    margin: 1rem;
    max-width: 100px;
`

let rankDelta = ({ rank, delta }) => <span>
    {rank === null ? "" :
        <span>Rank: {rank} {delta === null || delta === 0 ? ""
            :
            delta > 0 ? <span style={{ color: "rgb(34, 199, 66)" }}>{`(+${delta})`}</span> 
            : 
            <span style={{ color: "rgb(255, 41, 94)" }}>{`(${delta})`}</span>
        }
        </span>
    }
</span>


function statBox({stat, label, value, rank, delta}) {
    return (
        <StatBox val={value} stat={stat} key={label}>
            <StatBoxLabel>{label}</StatBoxLabel> 
            {value}
            <StatBoxLabel>{rankDelta({ rank: rank, delta: delta })}</StatBoxLabel>                 
        </StatBox>
    )
}


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
    skirmish
}) {

    const statBoxObj = [
        {
            stat: "WN8",
            label: "Recent WN8",
            value: parseInt(recentWN8),
            rank: null, 
            delta: null
        },
        {
            stat: "winrate",
            label: "Recent Winrate",
            value: recentWinrate.toFixed(2) + "%",
            rank: null, 
            delta: null
        },
        {
            stat: "WN8",
            label: "Overall WN8",
            value: parseInt(overallWN8),
            rank: null, 
            delta: null
        },
        {
            stat: "winrate",
            label: "Overall Winrate",
            value: overallWinrate.toFixed(2) + "%",
            rank: null, 
            delta: null
        },
        {
            stat: "other",
            label: "Clan Rating",
            value: rankings.efficiency.value,
            rank: rankings.efficiency.rank, 
            delta: rankings.efficiency.rank_delta
        },
        {
            stat: "other",
            label: "Avg. Daily Battles",
            value: rankings.battles_count_avg_daily.value,
            rank: rankings.battles_count_avg_daily.rank, 
            delta: rankings.battles_count_avg_daily.rank_delta
        },
        {
            stat: "other",
            label: "Avg. PR",
            value: parseInt(rankings.global_rating_weighted_avg.value),
            rank: rankings.global_rating_weighted_avg.rank, 
            delta: rankings.global_rating_weighted_avg.rank_delta
        },
        {
            stat: "other",
            label: "Players",
            value: members_count,
            rank: null, 
            delta: null
        }
    ]

    return (
        <>  
            <Name>
                <ClanIcon src={image} alt={tag} />
                <ClanName>
                    <span> <span style={{color: clanColor, textShadow: "1px 1px 1px rgba(0, 0, 0, 0.75)"}}>[{tag}]</span> {name}</span>
                    <span style={{fontSize: "0.8rem", color: "rgb(200, 200, 200)", padding: "0.4rem"}}>Created: {created_at}</span>
                    <span style={{fontSize: "0.9rem"}}>{motto}</span>
                </ClanName>
            </Name>
            <TopGrid>
                {statBoxObj.map((props) => statBox(props))}
            </TopGrid>
            <SplitSection>
                <Description>
                    <Scrollbar noScrollX>
                        <div style={{padding: "1rem"}}>
                            {parse(description)}
                        </div>
                    </Scrollbar>
                </Description>
                <BottomGrid>
                    <BottomBox>
                        <StatBoxLabel>Global Map ELO</StatBoxLabel> 
                        {rankings.gm_elo_rating_10.value}
                        <StatBoxLabel>{rankDelta({ rank: rankings.gm_elo_rating_10.rank, delta: rankings.gm_elo_rating_10.rank_delta })}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH Tier X ELO</StatBoxLabel> 
                        {rankings.fb_elo_rating_10.value}
                        <StatBoxLabel>{rankDelta({ rank: rankings.fb_elo_rating_10.rank, delta: rankings.fb_elo_rating_10.rank_delta })}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH Tier VII ELO</StatBoxLabel> 
                        {rankings.fb_elo_rating_8.value}
                        <StatBoxLabel>{rankDelta({ rank: rankings.fb_elo_rating_8.rank, delta: rankings.fb_elo_rating_8.rank_delta })}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH Tier VI ELO</StatBoxLabel> 
                        {rankings.fb_elo_rating_6.value}
                        <StatBoxLabel>{rankDelta({ rank: rankings.fb_elo_rating_6.rank, delta: rankings.fb_elo_rating_6.rank_delta })}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>Global Map WR</StatBoxLabel> 
                        {(globalMap.wins_10_level*100/globalMap.battles_10_level).toFixed(2)}%
                        <StatBoxLabel>{globalMap.wins_10_level}/{globalMap.battles_10_level}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH X WR</StatBoxLabel> 
                        {(strongholdX.win_10*100/strongholdX.total_10).toFixed(2)}%
                        <StatBoxLabel>{strongholdX.win_10}/{strongholdX.total_10}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH VIII WR</StatBoxLabel> 
                        {(skirmish.win_8*100/skirmish.total_8).toFixed(2)}%
                        <StatBoxLabel>{skirmish.win_8}/{skirmish.total_8}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>SH VI WR</StatBoxLabel> 
                        {(skirmish.win_6*100/skirmish.total_6).toFixed(2)}%
                        <StatBoxLabel>{skirmish.win_6}/{skirmish.total_6}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>Provinces</StatBoxLabel> 
                        {globalMap.provinces_count}
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>28D SH X WR</StatBoxLabel> 
                        {(strongholdX.win_10_in_28d*100/strongholdX.total_10_in_28d).toFixed(2)}%
                        <StatBoxLabel>{strongholdX.win_10_in_28d}/{strongholdX.total_10_in_28d}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>28D SH VIII WR</StatBoxLabel> 
                        {(skirmish.win_8_in_28d*100/skirmish.total_8_in_28d).toFixed(2)}%
                        <StatBoxLabel>{skirmish.win_8_in_28d}/{skirmish.total_8_in_28d}</StatBoxLabel>                 
                    </BottomBox>
                    <BottomBox>
                        <StatBoxLabel>28D SH VI WR</StatBoxLabel> 
                        {(skirmish.win_6_in_28d*100/skirmish.total_6_in_28d).toFixed(2)}%
                        <StatBoxLabel>{skirmish.win_6_in_28d}/{skirmish.total_6_in_28d}</StatBoxLabel>                 
                    </BottomBox>
                </BottomGrid>
            </SplitSection>

        </>
    )

}