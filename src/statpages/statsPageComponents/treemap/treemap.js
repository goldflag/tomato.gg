import React from "react";
import TreemapOverall from "./treemapOverall";
import {
    FilterButtonGroup,
    FilterButton,
} from "../../../components/tableFilters";
import styled from "styled-components";
import { useURLState } from "../../../functions/hooks";

const MaxHeight = styled.div`
    height: "900px";
`;

const Filters = styled(FilterButtonGroup)`
    margin-top: -10px;
`;

const filters = {
    overall: "Overall",
    recent30: "30 Days",
    recent60: "60 Days",
};

export default function Treemap({ data }) {
    const [filterValue, setFilterValue] = useURLState("period", "overall");

    return (
        <MaxHeight>
            <Filters>
                {Object.entries(filters).map(([key, label]) => (
                    <FilterButton
                        key={key}
                        selected={filterValue === key}
                        onClick={() => setFilterValue(key)}
                    >
                        {label}
                    </FilterButton>
                ))}
            </Filters>
            <TreemapOverall
                data={data[filterValue]}
                type={filters[filterValue]}
            />
        </MaxHeight>
    );
}
