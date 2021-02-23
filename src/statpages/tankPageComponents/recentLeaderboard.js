import React, { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";

import { StyledTable, TableContainer } from "../../components/tableComponents";

import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";

export default function RecentsLeaderboard({ data, type, highlightRow }) {
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
        else if (column === type) return { backdropFilter: "brightness(1.2)" };
        else return null;
    }

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
    const highlightRowProps = (rowIndex, row) => {
        console.log(row);
        if (rowIndex !== highlightRow) return {};
        return {
            style: {
                backgroundColor: "rgba(30,30,60,0.8)",
                color: "white",
                fontWeight: "bolder",
            },
            ref: setRowRef,
        };
    };
    useEffect(() => {
        if (rowRef) {
            rowRef.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [rowRef]);

    // battles: "183"
    // dpg: "306"
    // frags: "0.39"
    // kd: "0.43"
    // player_id: 1000954084
    // rank: "98"
    // spots: "2.65"
    // survived: "8.74%"
    // url: "/stats/NA/Bubonic4U=1000954084"
    // username: "Bubonic4U"
    // winrate: "50.27%"
    // wn8: "735"

    // Render the UI for your table
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
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps(highlightRowProps(i, row))}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps({
                                            style: setColor(cell.column.id, cell.value),
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
