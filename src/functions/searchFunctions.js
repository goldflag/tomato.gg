import React from "react";
import FuzzySet from 'fuzzyset'
import styled from "styled-components";
import Scrollbar from "react-scrollbars-custom";

const APIKey = process.env.REACT_APP_API_KEY2;

const Button = styled.button`
    width: 100%;
    padding: 10px 14px;
    font-size: 1rem;
    color: white;
    text-align: left;
    background-color: rgb(40, 40, 70);
    transition: background-color 0.3s;
    border: None;
    :hover {
        background-color: rgb(50, 50, 80);
    }
`

const OptionsMeta = styled.span`
    background-color: rgb(60, 60, 85);
    font-size: 0.7rem;
    color: rgb(200, 200, 200);
    padding: 5px 14px;
`;

const All = styled.div`
    height: calc(250px);
    background-color: rgb(40, 40, 70);
`;

export function getSuggestionsFromHistory(name) {
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    const fuzz = FuzzySet();
    for (const entry in searchHistory) {
        if (!searchHistory[entry].isClan) fuzz.add(searchHistory[entry].name)
    }
    return fuzz.get(name);
}

export async function searchNames(name, time, setData) {
    const currenttime = Date.now();
    time.current = currenttime;
    let nameData = await fetch(`https://api.worldoftanks.com/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`);
    nameData = await nameData.json();
    if (currenttime === time.current) {
        setData(nameData.data);
    }
}

export function options(name, setName, data) {
    if (data) {
        const searchSuggestions = getSuggestionsFromHistory(name) || [];
        const history = searchSuggestions.map(([_, name]) => ({ nickname: name }));

        const fromHistory = history.map(({ nickname }, i) => {
                return ( 
                    i < 5 ?                         
                    <Button key={nickname} onClick={() => setName(nickname)} type="submit">
                        {nickname}
                    </Button>
                    : null)
            }            
        );

        const fromAll = data.map(({ nickname }) => {
                return (
                    <Button key={nickname} onClick={() => setName(nickname)} type="submit">
                        {nickname}
                    </Button>
                );
            }            
        );

        return (
            <>
                {history.length > 0 ? <OptionsMeta>From your history</OptionsMeta> : null}
                {fromHistory}
                {data.length > 0 ? <OptionsMeta>All players</OptionsMeta> : null}
                <All>
                    <Scrollbar>
                            {fromAll}
                    </Scrollbar>
                </All>

            </>
        );
    }
}