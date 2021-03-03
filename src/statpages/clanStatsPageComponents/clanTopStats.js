// NPM
import React from "react";
import styled from "styled-components";

// LOCAL
import { WN8color, WRcolor } from "Functions/colors";

const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 120px 30% 15% 15% 15% 15%;
    margin: 0rem -1rem;
`

const StatBox = styled.div`
    background-color: ${({val, stat}) => stat === "WN8" ? WN8color(val) : WRcolor(val)};
    padding: 1.5rem 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`
const StatBoxLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
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

export default function ClanTopStats({ 
    image,
    tag,
    name, 
    motto,
    clanColor,
    overallWN8, 
    overallWinrate, 
    recentWN8, 
    recentWinrate 
}) {

    return (
        <TopGrid>
            <ClanIcon src={image} alt={tag} />
            <ClanName>
                <span> <span style={{color: clanColor}}>[{tag}]</span> {name}</span>
                <br/>
                <span style={{fontSize: "0.9rem"}}>{motto}</span>
            </ClanName>
            <StatBox val={recentWN8} stat="WN8">
                <StatBoxLabel>Recent WN8</StatBoxLabel> 
                {parseInt(recentWN8)}
            </StatBox>
            <StatBox val={recentWinrate} stat="winrate"> 
                <StatBoxLabel>Recent Winrate</StatBoxLabel> 
                {recentWinrate.toFixed(2) + "%"}
            </StatBox>
            <StatBox val={overallWN8} stat="WN8"> 
                <StatBoxLabel>Overall WN8</StatBoxLabel> 
                {parseInt(overallWN8)}
            </StatBox>
            <StatBox val={overallWinrate} stat="winrate">
                <StatBoxLabel>Overall Winrate</StatBoxLabel> 
                {overallWinrate.toFixed(2) + "%"}
            </StatBox>
        </TopGrid>
    )

}