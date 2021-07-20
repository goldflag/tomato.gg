// NPM
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// LOCAL
import { commonStrings } from "Data/localizations";
import LocalizedStrings from "Functions/localizedStrings";
import { CustomTabs, CustomTab } from "Components/customTabs";
import Linegraph from "../charts/StatsByPeriodLine";
import { FilterButton, FilterButtonGroup } from "Components/tableFilters";

const { formatString, ...strings } = LocalizedStrings({ en: { progress: "{0} PROGRESS" } });

const Container = styled.div`
    margin-bottom: 1rem;
    background-color: rgba(40, 40, 70, 0.4);
    backdrop-filter: blur(7px);
    color: rgb(30, 30, 30);
    font-family: Roboto Mono;
`;

const processData = (data) =>
    data
        .map(({ date, overallWN8, winrate, battles, fragsrate, damagerate, tier }) => ({
            x: date,
            y: overallWN8,
            longDate: date,
            winrate,
            battles,
            frags: fragsrate,
            dpg: damagerate,
            tier,
        }))
        .reverse();

export default function StatsByPeriod({ sessions: { sesweek, sesmonth } }) {
    const [data, setData] = useState(null);
    const [tab, setValue] = useState(0);
    const [filterValue, setFilterValue] = useState(true);

    useEffect(() => {
        const sesweekProcessed = processData(sesweek).slice(-52);
        const sesmonthProcessed = processData(sesmonth).slice(-12);
        const avgBattles = sesweekProcessed.reduce((acc, { battles }) => Number(acc) + Number(battles), 0) / sesweekProcessed.length;
        setData({ sesweekProcessed, sesmonthProcessed, avgBattles });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return data ? (
        <Container>
            <CustomTabs
                value={tab}
                onChange={handleChange}
                aria-label="ant example"
                variant="scrollable"
                scrollButtons="auto"
            >
                <CustomTab label={"RECENT WN8 WEEKLY"} />
                <CustomTab label={"RECENT WN8 MONTHLY"} />
            </CustomTabs>
            <div>
                <FilterButtonGroup style={{ marginLeft: "10px" }}>
                    <FilterButton key={"show battles"} selected={filterValue === true} onClick={() => setFilterValue(!filterValue)}>
                        {"More Info"}
                    </FilterButton>
                </FilterButtonGroup>
                <Linegraph data={tab === 0 ? data.sesweekProcessed : data.sesmonthProcessed} avgBattles={data.avgBattles} info={filterValue} />
            </div>
        </Container>
    ) : null;
}
