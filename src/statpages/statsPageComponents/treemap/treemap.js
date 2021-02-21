import React, { useState } from "react";
import TreemapOverall from "./treemapOverall";
import {
    FilterButtonGroup,
    FilterButton,
} from "../../../components/tableFilters";
import styled from "styled-components";

const MaxHeight = styled.div`
    height: "900px";
`;

const Filters = styled(FilterButtonGroup)`
    margin-top: -10px;
`;

const filters = [
    {
        label: "Overall",
        key: "overall",
    },
    {
        label: "30 Days",
        key: "recent30",
    },
    {
        label: "60 Days",
        key: "recent60",
    },
];
export default function Treemap({ data }) {
    const [filterValue, setFilterValue] = useState(filters[0]);

    return (
        <MaxHeight>
            <Filters>
                {filters.map(({ label, key }) => (
                    <FilterButton
                        key={key}
                        selected={filterValue.key === key}
                        onClick={() => setFilterValue({ label, key })}
                    >
                        {label}
                    </FilterButton>
                ))}
            </Filters>
            <TreemapOverall
                data={data[filterValue.key]}
                type={filterValue.label}
            />
        </MaxHeight>
    );
}
