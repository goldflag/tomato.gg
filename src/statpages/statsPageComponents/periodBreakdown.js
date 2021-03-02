// NPM
import React from "react";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";

// LOCAL
import {
    ClassFilter,
    GlobalFilter,
    NationFilter,
    Pagination,
    PremFilter,
    NumericTierFilter,
    arrayFilterFn,
} from "Components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
    NationCell,
    TankNameCell,
    ClassCell,
    TierCell,
    tableHeaders,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";

function PeriodBreakdown({ data }) {
    const columns = React.useMemo(
        () => [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: NationCell,
                Header: tableHeaders.nation,
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: TierCell,
                Header: tableHeaders.tier,
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ClassCell,
                Header: tableHeaders.class,
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: tableHeaders.battles,
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: tableHeaders.wn8,
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: tableHeaders.winrate,
                accessor: "winrate",
                disableFilters: true,
            },
            {
                Header: tableHeaders.dpg,
                accessor: "dpg",
                disableFilters: true,
            },
            { Header: tableHeaders.frags, accessor: "kpg", disableFilters: true },
            {
                Header: tableHeaders.dmgRatio,
                accessor: "dmgRatio",
                disableFilters: true,
            },
            {
                Header: tableHeaders.kd,
                accessor: "kd",
                disableFilters: true,
            },
            {
                Header: tableHeaders.survival,
                accessor: "survived",
                disableFilters: true,
            },
            {
                Header: tableHeaders.spots,
                accessor: "spots",
                disableFilters: true,
            },
            {
                Header: "",
                accessor: "isPrem",
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
                pageSize: 25,
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
        <>
            <FiltersContainer>
                <div style={{ marginBottom: "-10px" }}>
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
                                        </th>
                                    )
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
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
        </>
    );
}

export default PeriodBreakdown;
