import React from "react";
import TreemapOverall from "./treemapOverall";
import { FilterButtonGroup, FilterButton } from "Components/tableFilters";
import styled from "styled-components";
import { useURLState } from "Functions/hooks";
import { formatString, commonStrings } from "Data/localizations";

const MaxHeight = styled.div`
    height: "900px";
`;

const Filters = styled(FilterButtonGroup)`
    margin-top: -10px;
`;

const filters = {
    overall: commonStrings.overall,
    recent30: formatString(commonStrings.days, 30),
    recent60: formatString(commonStrings.days, 60),
};

export default function Treemap({ data }) {
    const [filterValue, setFilterValue] = useURLState("period", "overall");

    return (
        <MaxHeight>
            <Filters>
                {Object.entries(filters).map(([key, label]) => (
                    <FilterButton key={key} selected={filterValue === key} onClick={() => setFilterValue(key)}>
                        {label}
                    </FilterButton>
                ))}
            </Filters>
            <TreemapOverall data={data[filterValue]} type={filters[filterValue]} />
        </MaxHeight>
    );
}
