// NPM
import React from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";

// LOCAL
import { ThemeContext } from "../../context";
import { StyledTable, TableContainer } from "../../components/tableComponents";
import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";

export default function LeaderboardTable({ type, data }) {
    const { theme } = React.useContext(ThemeContext);

    function setColor(column, value) {
        if (column === "wn8")
            return {
                backgroundColor: WN8c(value),
                color: "white",
                padding: "10px",
            };
        else if (column === "winrate")
            return {
                backgroundColor: WRc(value.slice(0, -1)),
                color: "white",
                padding: "10px",
            };
        else if (column === type) return { backdropFilter: "brightness(1.3)" };
        else return null;
    }

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
                accessor: "url",
            },
            {
                Header: "Username",
                accessor: "username",
                Cell: ({ row }) => (
                    <Link to={row.values.url}>{row.values.username}</Link>
                ),
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
            },
            {
                Header: "Decap",
                accessor: "decap",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
    } = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0,
            pageSize: 101,
            hiddenColumns: ["url"],
        },
    });
    return (
        <TableContainer theme={theme}>
            <StyledTable theme={theme} {...getTableProps()}>
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
                                            style: setColor(
                                                cell.column.id,
                                                cell.value
                                            ),
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
