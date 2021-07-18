// NPM
import React from "react";
import { Link } from "react-router-dom";
import { useTable, usePagination, useSortBy, useFilters, useExpanded } from "react-table";

// LOCAL
import cellStyle from "Functions/cellStyle";
import { Pagination } from "Components";
import { StyledTable, TableContainer, tableHeaders } from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";

function TankSessions({ data }) {
    console.log(data);
    const columns = React.useMemo(() => {
        return [
            {
                Header: "Time",
                accessor: "timestamp",
                Cell: ({ value }) => value.slice(0, 10),
            },
            {
                Header: Capital(commonStrings.battles),
                accessor: "battles",
            },
            {
                Header: commonStrings.wn8,
                accessor: "wn8",
            },
            {
                Header: Capital(commonStrings.wr),
                accessor: "winrate",
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: commonStrings.dpg,
                accessor: "dpg",
            },
            {
                Header: commonStrings.frags,
                accessor: "frags",
            },
            {
                Header: commonStrings.kd,
                accessor: "kd",
                Cell: ({ value }) => value ? value : "Inf",
            },
            {
                Header: commonStrings.dmgRatio,
                accessor: "dmgratio",
                Cell: ({ value }) => value ? value : "Inf",
            },
            {
                Header: tableHeaders.spots,
                accessor: "spots",
            },
            {
                Header: tableHeaders.survival,
                accessor: "survived",
                Cell: ({ value }) => `${value}%`,
            },
        ];
    }, []);

    // columns.forEach((column) => column.sortDescFirst = true);
    // columns.forEach((column) => column.toggleSortBy.multi = true);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 10,
                sortBy: [
                    {
                        id: "timestamp",
                        desc: true,
                    },
                ],
            },
        },
        useFilters,
        useSortBy,
        useExpanded,
        usePagination
    );

    return (
        <>
            <TableContainer style={{overflow: "None"}}>
                <StyledTable pointer={true} {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
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
                pageSizes={[10, 20]}
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

export default TankSessions;
