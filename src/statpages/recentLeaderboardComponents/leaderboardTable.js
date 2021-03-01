// NPM
import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

// LOCAL
import { StyledTable, TableContainer } from "Components/tableComponents";
import setColor from "Functions/cellStyle";

export default function LeaderboardTable({ type, data }) {
    const headerStyle = (header) =>
        header.id === type
            ? {
                  backgroundColor: "rgb(107, 3, 252)",
              }
            : undefined;

    const columns = React.useMemo(
        () => [
            {
                Header: "Rank",
                accessor: "rank",
            },
            {
                Header: "Username",
                accessor: "username",
                Cell: ({ row: { original, values } }) => <Link to={original.url}> {values.username}</Link>,
            },
            {
                Header: "Battles",
                accessor: "battles",
            },
            {
                Header: "Avg Tier",
                accessor: "avgtier",
            },
            {
                Header: "WN8",
                accessor: "wn8",
            },
            {
                Header: "Winrate",
                accessor: "winrate",
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: "DPG",
                accessor: "dpg",
            },
            {
                Header: "Frags",
                accessor: "frags",
            },
            {
                Header: "DMG Ratio",
                accessor: "dmg_ratio",
            },
            {
                Header: "K/D",
                accessor: "kd",
            },
            {
                Header: "Spots",
                accessor: "spots",
            },
            {
                Header: "Survival",
                accessor: "survival",
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: "Decap",
                accessor: "decap",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0,
            pageSize: 101,
            hiddenColumns: ["url"],
        },
    });
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
                        const rowProps = row.getRowProps();
                        return (
                            <tr {...rowProps}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps({
                                            style: setColor(cell.column.id === type, cell.column.id, cell.value),
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
