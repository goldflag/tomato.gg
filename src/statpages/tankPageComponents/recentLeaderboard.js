// NPM
import React, { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";

// Local
import { StyledTable, TableContainer } from "Components/tableComponents";
import setColor from "Functions/cellStyle";
export default function RecentsLeaderboard({ data, type, highlightUserID }) {
    function headerStyle(header) {
        if (header.id === type) {
            return {
                backgroundColor: "rgb(107, 3, 252)",
            };
        }
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Rank",
                accessor: "rank",
                disableFilters: true,
            },
            {
                Header: "Username",
                accessor: "username",
                disableFilters: true,
                Cell: ({ row: { original, values } }) => <Link to={original.url}> {values.username}</Link>,
            },
            {
                Header: "Battles",
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: "WN8",
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Header: "Winrate",
                accessor: "winrate",
                disableFilters: true,
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                disableFilters: true,
            },
            {
                Header: "Frags",
                accessor: "frags",
                disableFilters: true,
            },
            {
                Header: "K/D",
                accessor: "kd",
                disableFilters: true,
            },
            {
                Header: "Spots",
                accessor: "spots",
                disableFilters: true,
            },
            {
                Header: "Survival",
                accessor: "survived",
                disableFilters: true,
                Cell: ({ value }) => `${value}%`,
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 100,
            },
        },
        usePagination
    );

    const [rowRef, setRowRef] = React.useState(null);
    const highlightRowProps = (row) => {
        if (row.original.player_id === highlightUserID)
            return {
                style: {
                    backgroundColor: "rgba(30,30,60,0.8)",
                    color: "white",
                    fontWeight: "bolder",
                },
                ref: setRowRef,
            };
        return {};
    };
    useEffect(() => {
        if (rowRef) {
            rowRef.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [rowRef]);

    return (
        <TableContainer>
            <StyledTable {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps({
                                        style: headerStyle(column),
                                    })}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps(highlightRowProps(row))}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps({
                                            style: setColor(type === cell.column.id, cell.column.id, cell.value),
                                        })}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}
