import React from "react";
import styled, { css } from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";
import { MoEStars } from "./moeStars";
import { useAsyncDebounce } from "react-table";
import InputBase from "@material-ui/core/InputBase";
import { classConv, nationConv } from "Data/conversions";

export const FilterButton = styled(Button)`
    background-color: ${({ selected }) => (selected ? css`rgb(222, 13, 93)` : css`rgb(66, 84, 143)`)} !important;
    color: white !important;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 14px;
    font-family: Roboto Mono !important;

    &:hover {
        background-color: rgb(230, 85, 125);
    }
`;

export const FilterButtonGroup = styled(ButtonGroup)`
    padding-right: 10px;
    padding-top: 10px;
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
    ...Object.values(classConv).map((val) => ({
        value: val,
        label: val,
        image: require(`Assets/classIcons/${val}.png`),
    })),
];

const nationFilterOptions = [
    { label: "ALL", value: undefined },
    ...Object.keys(nationConv).map((nation) => ({
        label: nation,
        value: nation,
        image: require(`Assets/flagIcons/${nationConv[nation]}.png`),
    })),
];

const convertedNationFilterOptions = [
    { label: "ALL", value: undefined },
    ...Object.values(nationConv).map((nation) => ({
        label: nation,
        value: nation,
        image: require(`Assets/flagIcons/${nation}.png`),
    })),
];

const masteryFilterOptions = [
    { label: "ALL", value: undefined },
    ...[0, 1, 2, 3, 4].map((n) => ({
        label: `${n}`,
        value: n,
        image: require(`Assets/masteryIcons/${n}.png`),
    })),
];

const MoEFilterOptions = [
    { label: "ALL", value: undefined },
    ...[0, 1, 2, 3].map((n) => ({
        label: n,
        value: n,
    })),
];

function setFilteredParams(filterArr, val) {
    if (val === undefined) return undefined;
    if (filterArr.includes(val)) {
        filterArr = filterArr.filter((n) => {
            return n !== val;
        });
    } else filterArr.push(val);

    if (filterArr.length === 0) filterArr = undefined;
    return filterArr;
}

const makeButtonFilter = (ariaLabel, options, Label) => ({ column: { filterValue = [], setFilter } }) => (
    <FilterButtonGroup variant="text" aria-label={ariaLabel}>
        {options.map(({ label, value, ...labelProps }) => (
            <FilterButton
                key={value || label}
                selected={filterValue.includes(value)}
                onClick={() => {
                    setFilter(setFilteredParams(filterValue, value));
                }}
            >
                {Label ? <Label {...{ label, value, ...labelProps }} /> : label || value}
            </FilterButton>
        ))}
    </FilterButtonGroup>
);

export const PremFilter = makeButtonFilter("premium tank filter", premFilterOptions);
export const TierFilter = makeButtonFilter("tank tier filter", tierFilterOptions);
export const NumericTierFilter = makeButtonFilter("tank tier filter", numericTierFilterOptions);
export const MoETierFilter = makeButtonFilter("tank tier filter", numericTierFilterOptions.slice(0, 7));

export const MoETrackerTierFilter = makeButtonFilter("tank tier filter", tierFilterOptions.slice(0, 7));

export const ClassFilter = makeButtonFilter("tank class filter", classFilterOptions, ({ label, image }) =>
    label === "ALL" ? label : <img src={image} style={{ maxHeight: "20px", filter: "brightness(1.5)" }} alt={label} />
);

export const NationFilter = makeButtonFilter("tank nation filter", nationFilterOptions, ({ label, image }) =>
    label === "ALL" ? label : <img src={image} style={{ maxHeight: "25px" }} alt={label} />
);
export const ConvertedNationFilter = makeButtonFilter(
    "tank nation filter",
    convertedNationFilterOptions,
    ({ label, image }) => (label === "ALL" ? label : <img src={image} style={{ maxHeight: "25px" }} alt={label} />)
);
export const MasteryFilter = makeButtonFilter("tank mastery filter", masteryFilterOptions, ({ label, image }) =>
    label === "ALL" ? label : <img src={image} style={{ maxHeight: "23px" }} alt={label} />
);
export const MoEFilter = makeButtonFilter("tank marks of excellence filter", MoEFilterOptions, ({ label, value }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
        }}
    >
        {label === "ALL" ? label : <MoEStars marks={value} />}
    </div>
));

export const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span>
            <InputBase
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search ${count} tanks...`}
                style={{
                    fontSize: "1rem",
                    padding: "0px 15px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(100, 100, 150, 0.5)",
                    color: "white",
                }}
            />
        </span>
    );
};

export const NumberRangeColumnFilter = ({ column: { filterValue = [], preFilteredRows, setFilter, id } }) => {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div style={{ marginTop: "8px", display: "flex", alignItems: "center" }}>
            Battles
            <InputBase
                value={filterValue[0] || ""}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                }}
                placeholder={`Min (${min})`}
                style={{
                    width: "110px",
                    margin: "0 0.5rem",
                    fontSize: "1rem",
                    padding: "0px 15px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(100, 100, 150, 0.5)",
                    color: "white",
                }}
            />
            to
            <InputBase
                value={filterValue[1] || ""}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                }}
                placeholder={`Max (${max})`}
                style={{
                    width: "130px",
                    margin: "0 0.5rem",
                    fontSize: "1rem",
                    padding: "0px 15px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(100, 100, 150, 0.5)",
                    color: "white",
                }}
            />
        </div>
    );
};

export const arrayFilterFn = (rows, [colID], filterValue) =>
    filterValue.length ? rows.filter((row) => filterValue.includes(row.original[colID])) : rows;
