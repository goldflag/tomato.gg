import React, { useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import { StyledTable, TableContainer } from "../../components/tableComponents";

import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";

export default function RecentsLeaderboard({ data, type, highlightRow }) {
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
                Cell: ({ row: { original, values } }) => (
                    <Link to={original.url}> {values.username}</Link>
                ),
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
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 101,
            },
        },
        usePagination
    );

    const highlightedRowRef = React.useRef(null);
    const highlightRowProps = (rowIndex) => {
        if (rowIndex !== highlightRow) return {};

        return {
            style: {
                backgroundColor: "rgba(110,40,80, 0.8)",
            },
            ref: highlightedRowRef,
        };
    };
    useEffect(
        () =>
            setTimeout(
                () =>{

                    if (highlightedRowRef.current) {
                        highlightedRowRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        })
                    }
                },
                500
            ) && undefined
    );

    // Render the UI for your table
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
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps(highlightRowProps(i))}>
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
