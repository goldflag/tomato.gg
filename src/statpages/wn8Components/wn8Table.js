import React from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";

import { ClassFilter, GlobalFilter, NationFilter, Pagination, PremFilter, arrayFilterFn } from "Components";
import {
    ButtonFiltersContainer,
    ClassCell,
    FiltersContainer,
    NationCell,
    StyledTable,
    TableContainer,
    tableHeaders,
    TankNameCell,
    TierCell,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";
import { NumericTierFilter } from "Components/";
import { Capital, commonStrings } from "Data/localizations";

function WN8Table({ data }) {
    const columns = React.useMemo(
        () => [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "short_name",
                disableFilters: true,
            },
            {
                Header: tableHeaders.nation,
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
                Cell: NationCell,
            },
            {
                Header: Capital(commonStrings.tier),
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
                Cell: TierCell,
            },
            {
                Header: tableHeaders.class,
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
                Cell: ClassCell,
            },
            {
                Header: tableHeaders.expDef,
                accessor: "expDef",
                disableFilters: true,
            },
            {
                Header: tableHeaders.expFrag,
                accessor: "expFrag",
                disableFilters: true,
            },
            {
                Header: tableHeaders.expSpot,
                accessor: "expSpot",
                disableFilters: true,
            },
            {
                Header: tableHeaders.expDamage,
                accessor: "expDamage",
                disableFilters: true,
            },
            {
                Header: tableHeaders.expWinRate,
                accessor: "expWinRate",
                disableFilters: true,
            },
            {
                Header: "",
                accessor: "is_premium",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ],
        []
    );

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
                sortBy: [
                    {
                        id: "expDamage",
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
        <>
            <FiltersContainer>
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                {headerGroups.map((headerGroup, i) => (
                    <ButtonFiltersContainer key={i}>
                        {headerGroup.headers.map(
                            ({ disableFilters, render }, i) =>
                                !disableFilters && <span key={i}>{render("Filter")}</span>
                        )}
                    </ButtonFiltersContainer>
                ))}
            </FiltersContainer>
            <TableContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            {...column.getHeaderProps({
                                                style: {
                                                    cursor: "pointer",
                                                    backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                                },
                                            })}
                                        >
                                            {column.render("Header")}
                                            <span>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <Icon size={16} icon={arrowDown} />
                                                    ) : (
                                                        <Icon size={16} icon={arrowUp} />
                                                    )
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                        </th>
                                    )
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) =>
                                        cell.column.hidden ? null : (
                                            <td
                                                {...cell.getCellProps({
                                                    style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        )
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </TableContainer>
            <Pagination
                pageSizes={[100, 250, 500]}
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
        </>
    );
}

export default WN8Table;
