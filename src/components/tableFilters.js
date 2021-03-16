// NPM
import React from "react";
import styled, { css } from "styled-components";
import { Button, ButtonGroup } from "@material-ui/core";
import { useAsyncDebounce } from "react-table";
import InputBase from "@material-ui/core/InputBase";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { MoEStars } from "./moeStars";
import { classConv, nationConv } from "Data/conversions";
import { Capital, commonStrings } from "Data/localizations";

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

const { formatString, ...strings } = LocalizedStrings({
    en: {
        all: "ALL",
        prem: "PREM",
        regular: "REGULAR",
        searchTanks: "Search {0} tanks",
        searchPlayers: "Search {0} players",
        min: "Min",
        to: "to",
        max: "Max",
    },
    cs: {
        all: "VŠECHNY",
        prem: "PRÉMIOVÉ",
        regular: "STROMOVÉ",
        searchTanks: "Vyhledávat {0} tanky",
        searchPlayers: "Vyhledávat {0} hráči",
        min: "Min",
        to: "do",
        max: "Max",
    },
    de: {
        all: "ALLE",
        prem: "PREM",
        regular: "NORMAL",
        searchTanks: "Suche {0} Panzer",
        battles: "Gefechte",
        min: "Min",
        to: "bis",
        max: "Max",
    },
    es: {
        all: "TODO",
        prem: "PREM",
        regular: "REGULAR",
        searchTanks: "Buscar {0} tanques",
        searchPlayers: "Buscar {0} jugadores",
        min: "Mínimo",
        to: "a",
        max: "Máximo",
    },
    fr: {
        all: "TOUT",
        prem: "PREM",
        regular: "NORMAL",
        searchTanks: "Chercher {0} chars",
        searchPlayers: "Chercher {0} joueurs",
        min: "Min",
        to: "à",
        max: "Max",
    },
    ko: {
        all: "ALL",
        prem: "프리미엄",
        regular: "일반",
        searchTanks: "{0} 전차 찾기",
        battles: "전투",
        min: "최소",
        to: "부터",
        max: "최대",
    },
    pl: {
        all: "Wszystkie",
        prem: "Premium",
        regular: "Zwykłe",
        searchTanks: "Przeszukaj {0} czołgów",
        searchPlayers: "Przeszukaj {0} gracze",
        min: "Min",
        to: "do",
        max: "Maks",
    },
    ru: {
        all: "ВСЕ",
        prem: "ПРЕМ",
        regular: "ОБЫЧНЫЕ",
        searchTanks: "Поиск {0} танков",
        searchPlayers: "Поиск {0} игроки",
        min: "Минимум",
        to: "до",
        max: "Максимум",
    },
    tr: {
        all: "HEPSİ",
        prem: "PREM",
        regular: "NORMAL",
        searchTanks: "{0} tank arasında ara",
        searchPlayers: "{0} oyuncu arasında ara",
        min: "En Az",
        to: "->",
        max: "En Çok",
    },
});

const premFilterOptions = [
    { label: strings.all, value: undefined },
    { label: strings.prem, value: true },
    { label: strings.regular, value: false },
];

const tierFilterOptions = [
    { label: strings.all, value: undefined },
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
    label === strings.all
        ? { label, value }
        : {
              label: value,
              value: 11 - i,
          }
);

const classFilterOptions = [
    { label: strings.all, value: undefined },
    ...Object.values(classConv).map((val) => ({
        value: val,
        label: val,
        image: require(`Assets/classIcons/${val}.png`),
    })),
];

const nationFilterOptions = [
    { label: strings.all, value: undefined },
    ...Object.entries(nationConv).map(([nation, converted]) => ({
        label: nation,
        value: nation,
        image: require(`Assets/flagIcons/${converted}.png`),
    })),
];

const convertedNationFilterOptions = [
    { label: strings.all, value: undefined },
    ...Object.values(nationConv).map((nation) => ({
        label: nation,
        value: nation,
        image: require(`Assets/flagIcons/${nation}.png`),
    })),
];

const masteryFilterOptions = [
    { label: strings.all, value: undefined },
    ...[0, 1, 2, 3, 4].map((n) => ({
        label: `${n}`,
        value: n,
        image: require(`Assets/masteryIcons/${n}.png`),
    })),
];

const MoEFilterOptions = [
    { label: strings.all, value: undefined },
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
    label === strings.all ? (
        label
    ) : (
        <img src={image} style={{ maxHeight: "20px", filter: "brightness(1.5)" }} alt={label} />
    )
);

export const NationFilter = makeButtonFilter("tank nation filter", nationFilterOptions, ({ label, image }) =>
    label === strings.all ? label : <img src={image} style={{ maxHeight: "25px" }} alt={label} />
);
export const ConvertedNationFilter = makeButtonFilter(
    "tank nation filter",
    convertedNationFilterOptions,
    ({ label, image }) =>
        label === strings.all ? label : <img src={image} style={{ maxHeight: "25px" }} alt={label} />
);
export const MasteryFilter = makeButtonFilter("tank mastery filter", masteryFilterOptions, ({ label, image }) =>
    label === strings.all ? label : <img src={image} style={{ maxHeight: "23px" }} alt={label} />
);
export const MoEFilter = makeButtonFilter("tank marks of excellence filter", MoEFilterOptions, ({ label, value }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
        }}
    >
        {label === strings.all ? label : <MoEStars marks={value} />}
    </div>
));

export const GlobalFilter = ({ defaultType, preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
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
                placeholder={formatString(
                    defaultType === "players" ? strings.searchPlayers : strings.searchTanks,
                    count
                )}
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
            {Capital(commonStrings.battles)}
            <InputBase
                value={filterValue[0] || ""}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                }}
                placeholder={strings.min + `(${min})`}
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
            {strings.to}
            <InputBase
                value={filterValue[1] || ""}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                }}
                placeholder={strings.max + `(${max})`}
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
