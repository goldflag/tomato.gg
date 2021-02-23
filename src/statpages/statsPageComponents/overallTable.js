import React from "react";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import { Collapse } from "@material-ui/core";

import { MoEStars, Pagination } from "Components";
import {
    ClassFilter,
    GlobalFilter,
    MasteryFilter,
    MoEFilter,
    NationFilter,
    NumericTierFilter,
    PremFilter,
    arrayFilterFn,
    NumberRangeColumnFilter,
} from "Components/tableFilters";
import { ButtonFiltersContainer, FiltersContainer, Name } from "Components/tableComponents";
import styled from "styled-components";
import Tooltip from "react-tooltip-lite";
import awardsData from "Data/awardsinfo.json";
import cellStyle from "Functions/cellStyle";
import { tierConv } from "Data/conversions";

const AwardContainer = styled.div`
    padding: 0.5rem;
`;

const AwardBreakdown = styled.div`
    display: grid;
    padding: 0.5rem 0rem;
    grid-template-columns: 55px 55px 55px 55px 55px 55px 55px 55px 55px 55px;
`;

const Awards = ({ awards }) => {
    const NumberBox = (val) => {
        // TODO?: replace this with https://material-ui.com/components/badges/#dot-badge
        let width;
        if (val < 10) width = "15px";
        else if (val < 100) width = "20px";
        else if (val < 1000) width = "25px";
        else width = "30px";
        return (
            <div
                style={{
                    width: width,
                    height: "16px",
                    backgroundColor: "rgb(199, 38, 81)",
                    color: "white",
                    position: "absolute",
                    bottom: "5px",
                    left: "30px",
                    fontSize: "0.6rem",
                    border: "1px solid black",
                    borderRadius: "5px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none",
                }}
            >
                {val}
            </div>
        );
    };

    const RenderTooltip = (award) => (
        <div
            style={{
                position: "absolute",
                left: "-250px",
                top: "40px",
                backgroundColor: "rgb(40, 40, 40)",
                padding: "0.5rem",
                borderRadius: "5px",
            }}
        >
            <div
                style={{
                    lineHeight: "1.5rem",
                    color: "rgb(255, 255, 255)",
                    fontSize: "0.9rem",
                }}
            >
                {awardsData[award].name}
            </div>
            <div
                style={{
                    width: "200px",
                    color: "rgb(200, 200, 200)",
                    fontSize: "0.7rem",
                }}
            >
                {awardsData[award].desc}
            </div>
        </div>
    );

    const RenderAwards = (awards, type) =>
        Object.entries(awards).map(([awardName, count], i) => {
            return count > 0 ? (
                <Tooltip key={i} arrow={false} direction="right" content={RenderTooltip(awardName)}>
                    {NumberBox(count)}
                    <img
                        style={{ width: "50px" }}
                        src={require(`Assets/awards/${type}/${awardName}.png`)}
                        alt={awardName}
                    />
                </Tooltip>
            ) : null;
        });

    const types = { battleHeroes: "Battle Heroes", main: "Honorary Ranks", epic: "Epic Medals" };
    return (
        <AwardContainer>
            {Object.entries(types).map(([key, label]) => (
                <React.Fragment key={key}>
                    {label}
                    <AwardBreakdown>{RenderAwards(awards[key], key)}</AwardBreakdown>
                </React.Fragment>
            ))}
        </AwardContainer>
    );
};

const Table = styled.table`
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
`;

const Tr = styled.tr`
    color: rgb(220, 220, 220);
    background-color: rgba(40, 40, 70, 0.5);
    :nth-child(4n + 1) {
        background-color: rgba(50, 50, 80, 0.5);
    }
    :hover {
        background-color: rgba(30, 30, 60, 0.5);
    }
`;

const Th = styled.th`
    cursor: "pointer";
    text-align: left;
    padding: 10px;
    background-color: rgba(50, 50, 80, 0.5);
    font-weight: 500;
    background-color: ${({ active }) => (active ? "rgb(207, 0, 76)" : "")};
`;

const Td = styled.td`
    padding: 0.4rem 0.5rem;
`;

const TableContainer = styled.div`
    font-family: Roboto Mono;
    overflow-x: auto;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 1rem;
    backdrop-filter: blur(7px);
`;

const SubTr = styled.tr`
    color: rgb(220, 220, 220);
    background-color: rgba(40, 40, 70, 0.25);
`;

const SubTd = styled.td`
    padding: 0;
`;

function OverallTable({ data }) {
    const columns = React.useMemo(
        () => [
            {
                Cell: ({ row: { original } }) => (
                    <Name val={original.isPrem}>
                        <img src={original.image} alt={original.name} />
                        {original.name}
                    </Name>
                ),
                Header: "Name",
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/flagIcons/${value}.png`)} style={{ maxWidth: "40px" }} alt={value} />
                ),
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => tierConv[value],
                Header: "Tier",
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/classIcons/${value}.png`)} style={{ maxWidth: "20px" }} alt={value} />
                ),
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Games",
                accessor: "battles",
                Filter: NumberRangeColumnFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "WN8",
                accessor: "wn8",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: "Winrate",
                accessor: "winrate",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            { Header: "KPG", accessor: "kpg", disableFilters: true },
            {
                Header: "WN8%tile",
                accessor: "wn8percent",
                disableFilters: true,
            },
            {
                Header: "DPG%tile",
                accessor: "dpgpercent",
                disableFilters: true,
            },
            { Header: "DR", accessor: "dmgratio", disableFilters: true },
            { Header: "KDR", accessor: "kd", disableFilters: true },
            { Header: "Survival%", accessor: "survival", disableFilters: true },
            { Header: "XP", accessor: "xp", disableFilters: true },
            { Header: "Hit%", accessor: "hitratio", disableFilters: true },
            { Header: "Armor", accessor: "armoreff", disableFilters: true },
            { Header: "Spots", accessor: "spots", disableFilters: true },
            {
                Cell: ({ value }) => <MoEStars marks={value} />,
                Header: "MOE",
                accessor: "moe",
                Filter: MoEFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/masteryIcons/${value}.png`)} style={{ maxHeight: "23px" }} alt={value} />
                ),
                Header: "Mast",
                accessor: "mastery",
                Filter: MasteryFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: arrayFilterFn,
            },
        ],
        []
    );

    const filterOrder = [3, 2, 1, 18, 19, 20];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        visibleColumns,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 25,
                hiddenColumns: ["prem"],
                sortBy: [
                    {
                        id: "battles",
                        desc: true,
                    },
                ],
            },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination
    );

    return (
        <TableContainer>
            <FiltersContainer>
                <div style={{ marginBottom: "-10px" }}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
                {headerGroups.map((headerGroup, i) => (
                    <React.Fragment key={i}>
                        <ButtonFiltersContainer key={i}>
                            {filterOrder.map(
                                (n) =>
                                    !headerGroup.headers[n].disableFilters && (
                                        <span key={n}>{headerGroup.headers[n].render("Filter")}</span>
                                    )
                            )}
                        </ButtonFiltersContainer>
                        <div
                            style={{
                                marginRight: "10px",
                                marginTop: "10px",
                            }}
                        >
                            {headerGroup.headers[6].render("Filter")}
                        </div>
                    </React.Fragment>
                ))}
            </FiltersContainer>
            <Table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    {...column.getHeaderProps({
                                        style: {
                                            cursor: "pointer",
                                            backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                        },
                                    })}
                                >
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <React.Fragment key={i}>
                                <Tr {...row.getToggleRowExpandedProps({})}>
                                    {row.cells.map((cell) => (
                                        <Td
                                            {...cell.getCellProps({
                                                style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                            })}
                                        >
                                            {cell.render("Cell")}
                                        </Td>
                                    ))}
                                </Tr>
                                <SubTr style={{ height: row.isExpanded || "0px" }}>
                                    <SubTd colSpan={visibleColumns.length}>
                                        <Collapse in={row.isExpanded}>
                                            <Awards {...row.original} />
                                        </Collapse>
                                    </SubTd>
                                </SubTr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </Table>
            <Pagination
                pageSizes={[15, 25, 100, 250, 500]}
                {...{
                    canPreviousPage,
                    canNextPage,
                    pageOptions,
                    pageCount,
                    gotoPage,
                    nextPage,
                    previousPage,
                    setPageSize,
                    pageIndex,
                    pageSize,
                }}
            />
        </TableContainer>
    );
}

export default OverallTable;
