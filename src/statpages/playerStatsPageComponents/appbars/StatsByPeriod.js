// NPM
import styled from "styled-components";
import React, { useState, useEffect } from "react";

// LOCAL
import { commonStrings } from "Data/localizations";
import LocalizedStrings from "Functions/localizedStrings";
import { CustomTabs, CustomTab } from "Components/customTabs";
import Linegraph from "../charts/StatsByPeriodLine";
import Scatterplot from "../charts/StatsByPeriodScatter";
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

const filters = {
    Line: "Line",
    Scatter: "Scatter",
};

export default function StatsByPeriod({ sessions: { sesweek, sesmonth } }) {
    const [data, setData] = useState(null);
    const [tab, setValue] = useState(0);
    const [filterValue, setFilterValue] = useState("Line");

    useEffect(() => {
        const sesweekProcessed = processData(sesweek);
        const sesmonthProcessed = processData(sesmonth);
        setData({ sesweekProcessed, sesmonthProcessed });
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
                    {Object.entries(filters).map(([key, label]) => (
                        <FilterButton key={key} selected={filterValue === key} onClick={() => setFilterValue(key)}>
                            {label}
                        </FilterButton>
                    ))}
                </FilterButtonGroup>
                {filterValue === "Line" ? (
                    <Linegraph data={tab === 0 ? data.sesweekProcessed : data.sesmonthProcessed} />
                ) : (
                    <Scatterplot data={tab === 0 ? data.sesweekProcessed : data.sesmonthProcessed} mode={tab}/>
                )}
            </div>
        </Container>
    ) : null;
}
