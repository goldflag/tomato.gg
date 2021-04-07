// NPM
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTable, usePagination, useSortBy, useFilters, useExpanded } from "react-table";

// LOCAL
import cellStyle from "Functions/cellStyle";
import { Pagination } from "Components";
import {
    StyledTable,
    TableContainer,
    tableHeaders,
} from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";

function RecentTanksAvgTable({ data }) {
    const columns = React.useMemo(() => {
        return [
            {
                Header: Capital(commonStrings.rank),
                accessor: "rank",
            },
            {
                Header: tableHeaders.username,
                accessor: "username",
                Cell: ({ row: { original, values } }) => <Link to={original.url}> {values.username}</Link>,
            },
            {
                Header: Capital(commonStrings.battles),
                accessor: "battles",
            },
            {
                Header: tableHeaders.avgTier,
                accessor: "avgtier",
            },
            {
                Header: commonStrings.wn8,
                accessor: "wn8",
            },
            {
                Header: Capital(commonStrings.longWR),
                accessor: "winrate",
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: commonStrings.dpg,
                accessor: "dpg",
            }
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
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 15,
                sortBy: [
                    {
                        id: "wn8",
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
            <TableContainer>
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
                pageSizes={[15, 25]}
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

export default RecentTanksAvgTable;
