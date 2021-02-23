// NPM
import React from "react";
import { useHistory } from "react-router-dom";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import styled from "styled-components";

// LOCAL

import {
    ClassFilter,
    GlobalFilter,
    NationFilter,
    Pagination,
    PremFilter,
    NumericTierFilter,
    arrayFilterFn,
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
} from "Components";
import cellStyle from "Functions/cellStyle";
import { tierConv } from "Data/conversions";

const TankCell = styled.div`
    display: grid;
    grid-template-columns: 90px 50%;
    align-items: center;
    color: ${({ val }) => (val ? `#ffe455` : null)};
`;

function RecentTanksAvgTable({ data }) {
    const columns = React.useMemo(() => {
        return [
            {
                Cell: (data) => {
                    const value = data.row.original;
                    return (
                        <TankCell val={value.is_premium}>
                            <img src={value.image} style={{ maxWidth: "100px" }} alt={"test"} />
                            {value.short_name}
                        </TankCell>
                    );
                },
                Header: "Tank",
                accessor: "short_name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img src={require(`Assets/flagIcons/${value}.png`)} style={{ maxWidth: "40px" }} alt={value} />
                    );
                },
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => {
                    return <div style={{ margin: "8px" }}>{tierConv[value]}</div>;
                },
                Header: "Tier",
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img src={require(`Assets/classIcons/${value}.png`)} style={{ maxWidth: "20px" }} alt={value} />
                    );
                },
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Games",
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: "WN8",
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
                Header: "Winrate",
                accessor: "winrate",
                disableFilters: true,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                disableFilters: true,
            },
            { Header: "KPG", accessor: "frags", disableFilters: true },
            {
                Header: "DR",
                accessor: "dmg_ratio",
                disableFilters: true,
            },
            {
                Header: "KDR",
                accessor: "kd",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
                Header: "Survival%",
                accessor: "survival",
                disableFilters: true,
            },
            {
                Header: "Spots",
                accessor: "spots",
                disableFilters: true,
            },
            {
                Header: "",
                accessor: "is_premium",
                Filter: PremFilter,
                filter: arrayFilterFn,
            },
        ];
    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
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
                pageSize: 100,
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

    const history = useHistory();
    const handleRowClick = (row) => {
        history.push(`/tank/${row.original.tank_id}`);
    };

    return (
        <TableContainer>
            <FiltersContainer>
                <div style={{ margin: "-10px 0px" }}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
                {headerGroups.map((headerGroup, i) => (
                    <ButtonFiltersContainer key={i}>
                        {headerGroup.headers.map(
                            ({ disableFilters, render }, i) =>
                                !disableFilters && <span key={i}>{render("Filter")}</span>
                        )}
                    </ButtonFiltersContainer>
                ))}
            </FiltersContainer>
            <StyledTable pointer={true} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    {...column.getHeaderProps({
                                        style: {
                                            backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                        },
                                    })}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr onClick={() => handleRowClick(row)} {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps({
                                                style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                            })}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
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

export default RecentTanksAvgTable;
