import React from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";

import { ClassFilter, GlobalFilter, NationFilter, Pagination, PremFilter, TierFilter, arrayFilterFn } from "Components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
    Name,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";

function WN8Table({ data }) {
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
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
                Cell: ({ value }) => (
                    <img src={require(`Assets/flagIcons/${value}.png`)} style={{ maxWidth: "40px" }} alt={value} />
                ),
            },
            {
                Header: "Tier",
                accessor: "tier",
                Filter: TierFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
                Cell: ({ value }) => (
                    <img src={require(`Assets/classIcons/${value}.png`)} style={{ maxWidth: "20px" }} alt={value} />
                ),
            },
            {
                Header: "expDef",
                accessor: "expDef",
                disableFilters: true,
            },
            {
                Header: "expFrag",
                accessor: "expFrag",
                disableFilters: true,
            },
            {
                Header: "expSpot",
                accessor: "expSpot",
                disableFilters: true,
            },
            {
                Header: "expDamage",
                accessor: "expDamage",
                disableFilters: true,
            },
            {
                Header: "expWinRate",
                accessor: "expWinRate",
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
                            <>
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
                            </>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i} {...row.getRowProps()}>
                                    <tr>
                                        {row.cells.map((cell) =>
                                            cell.column.hidden ? null : (
                                                <td
                                                    {...cell.getCellProps({
                                                        style: cellStyle(
                                                            cell.column.isSorted,
                                                            cell.column.id,
                                                            cell.value
                                                        ),
                                                    })}
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                </React.Fragment>
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
