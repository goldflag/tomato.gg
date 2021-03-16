// NPM
import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

// LOCAL
import { StyledTable, TableContainer, tableHeaders } from "Components/tableComponents";
import setColor from "Functions/cellStyle";
import { Capital, commonStrings } from "Data/localizations";

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
            },
            {
                Header: Capital(commonStrings.frags),
                accessor: "frags",
            },
            {
                Header: Capital(commonStrings.dmgRatio),
                accessor: "dmg_ratio",
            },
            {
                Header: tableHeaders.kd,
                accessor: "kd",
            },
            {
                Header: tableHeaders.spots,
                accessor: "spots",
            },
            {
                Header: tableHeaders.survival,
                accessor: "survival",
                Cell: ({ value }) => `${value}%`,
            },
            {
                Header: tableHeaders.decap,
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
