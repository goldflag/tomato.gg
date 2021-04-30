// NPM
import React from "react";
import { useHistory } from "react-router-dom";
import { useTable, usePagination, useSortBy, useFilters, useExpanded } from "react-table";

// LOCAL
import cellStyle from "Functions/cellStyle";
import { Pagination } from "Components";
import {
    StyledTable,
    TableContainer,
    TankNameCell,
    TierCell,
    tableHeaders,
} from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";

function RecentTanksAvgTable({ data }) {
    const columns = React.useMemo(() => {
        return [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "short_name",
            },
            {
                Cell: TierCell,
                Header: Capital(commonStrings.tier),
                accessor: "tier",
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
                Cell: ({ value }) => `${value}%`,
                Header: Capital(commonStrings.wr),
                accessor: "winrate",
            },
            {
                Header: commonStrings.dpg,
                accessor: "dpg",
            },
            { Header: Capital(commonStrings.frags), accessor: "frags" },
        ];
    }, []);

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
                        id: "battles",
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

    const history = useHistory();
    const handleRowClick = (row) => {
        history.push(`/tank/${row.original.tank_id}`);
    };

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
                                <tr onClick={() => handleRowClick(row)} {...row.getRowProps()}>
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

export default RecentTanksAvgTable;
