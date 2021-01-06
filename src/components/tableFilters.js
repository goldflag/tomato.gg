import React from "react";
import styled, { css } from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";
import { MoEStars } from "./moeStars";
import { useAsyncDebounce } from "react-table";

export const FilterButton = styled(Button)`
    background-color: ${({ selected }) =>
        selected ? css`rgb(222, 13, 93)` : css`rgb(66, 84, 143)`} !important;
    color: white !important;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 14px;

    &:hover {
        background-color: rgb(230, 85, 125);
    }
`;

export const FilterButtonGroup = styled(ButtonGroup)`
    margin-right: 10px;
    margin-bottom: 10px;
`;

const premFilterOptions = [
    { label: "ALL", value: undefined },
    { label: "PREM", value: true },
    { label: "REGULAR", value: false },
];

const tierFilterOptions = [
    { label: "ALL", value: undefined },
    { value: "X" },
    { value: "IX" },
    { value: "VIII" },
    { value: "VII" },
    { value: "VI" },
    { value: "V" },
    { value: "IV" },
    { value: "III" },
    { value: "II" },
    { value: "I" },
];

const numericTierFilterOptions = tierFilterOptions.map(({ label, value }, i) =>
    label === "ALL"
        ? { label, value }
        : {
              label: value,
              value: 11 - i,
          }
);

const classFilterOptions = [
    { label: "ALL", value: undefined },
    { value: "HT" },
    { value: "MT" },
    { value: "LT" },
    { value: "TD" },
    { value: "SPG" },
];

const nations = [
    "China",
    "France",
    "Germany",
    "Japan",
    "Sweden",
    "UK",
    "USA",
    "USSR",
    "Czech",
    "Italy",
    "Poland",
];
const nationFilterOptions = [
    { label: "ALL", value: undefined },
    ...nations.map((nation) => ({
        label: nation,
        value: nation,
        image: require(`../assets/flagIcons/${nation}.png`),
    })),
];

const masteryFilterOptions = [
    { label: "ALL", value: undefined },
    ...[0, 1, 2, 3, 4].map((n) => ({
        label: `${n}`,
        value: n,
        image: require(`../assets/masteryIcons/${n}.png`),
    })),
];

const MoEFilterOptions = [
    { label: "ALL", value: undefined },
    ...[0, 1, 2, 3].map((n) => ({
        label: n,
        value: n,
    })),
];

const makeButtonFilter = (ariaLabel, options, Label) => ({
    column: { filterValue, setFilter },
}) => (
    <FilterButtonGroup variant="text" aria-label={ariaLabel}>
        {options.map(({ label, value, ...labelProps }) => (
            <FilterButton
                key={value || label}
                selected={filterValue === value}
                onClick={() => setFilter(value)}
            >
                {Label ? (
                    <Label {...{ label, value, ...labelProps }} />
                ) : (
                    label || value
                )}
            </FilterButton>
        ))}
    </FilterButtonGroup>
);

export const PremFilter = makeButtonFilter(
    "premium tank filter",
    premFilterOptions
);
export const TierFilter = makeButtonFilter(
    "tank tier filter",
    tierFilterOptions
);
export const NumericTierFilter = makeButtonFilter(
    "tank tier filter",
    numericTierFilterOptions
);
export const MoETierFilter = makeButtonFilter(
    "tank tier filter",
    tierFilterOptions.slice(0, 7)
);

export const ClassFilter = makeButtonFilter(
    "tank class filter",
    classFilterOptions
);
export const NationFilter = makeButtonFilter(
    "tank nation filter",
    nationFilterOptions,
    ({ label, image }) =>
        label === "ALL" ? (
            label
        ) : (
            <img src={image} style={{ maxHeight: "25px" }} alt={label} />
        )
);
export const MasteryFilter = makeButtonFilter(
    "tank mastery filter",
    masteryFilterOptions,
    ({ label, image }) =>
        label === "ALL" ? (
            label
        ) : (
            <img src={image} style={{ maxHeight: "23px" }} alt={label} />
        )
);
export const MoEFilter = makeButtonFilter(
    "tank marks of excellence filter",
    MoEFilterOptions,
    ({ label, value }) => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            {label === "ALL" ? label : <MoEStars marks={value} />}
        </div>
    )
);

export const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span>
            <input
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search ${count} records...`}
                style={{
                    fontSize: "1rem",
                    padding: "6px",
                    borderRadius: "3px",
                    border: "1px solid rgb(100, 100, 100)",
                }}
            />
        </span>
    );
};
