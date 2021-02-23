// NPM
import React from "react";
import { useTable } from "react-table";
import styled, { css } from "styled-components";

// LOCAL

import { TableContainer } from "../../components/tableComponents";
import WN8c from "../../functions/WN8color";

const StyledTable = styled.table`
    white-space: nowrap;
    position: sticky;
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
    font-family: Roboto Mono;
    cursor: ${({ pointer }) => (pointer === true ? "pointer" : null)};
    backdrop-filter: blur(7px);
    tr {
        overflow-x: scroll;
        color: rgb(220, 220, 220);
        background-color: rgba(40, 40, 70, 0.5);
        :nth-child(even) {
            background-color: rgba(50, 50, 80, 0.5);
        }
        :hover {
            background-color: rgba(30, 30, 60, 0.5);
        }
    }
    th {
        font-family: Segoe UI, Futura;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: left;
        padding: 10px;
        background-color: rgba(76, 89, 166, 1);
        border-bottom: solid 1px rgba(100, 100, 100, 0.5);
        font-weight: 500;
    }
    td {
        color: rgb(240, 240, 240);
        padding: 10px;
        margin: 0;
        :last-child {
            border-right: 0;
        }
        ${({ tdOverride }) =>
            css`
                ${tdOverride}
            `}
    }
`;

export default function TopTable({ data }) {
    function setColor(cell, column, value) {
        if (column === "name")
            return {
                backgroundColor: "rgba(40, 40, 70, 0.3)",
                color: "white",
                padding: "10px",
            };
        else if (cell.row.original.name === "WN8")
            return {
                backgroundColor: WN8c(value),
                color: "white",
                padding: "10px",
            };
        else return null;
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "",
                accessor: "name",
            },
            {
                Header: "OVERALL",
                accessor: "Overall",
            },
            {
                Header: "24 HOURS",
                accessor: "24 Hours",
            },
            {
                Header: "3 DAYS",
                accessor: "3 Days",
            },
            {
                Header: "7 DAYS",
                accessor: "7 Days",
            },
            {
                Header: "30 DAYS",
                accessor: "30 Days",
            },
            {
                Header: "60 DAYS",
                accessor: "60 Days",
            },
            {
                Header: "100 GAMES",
                accessor: "100 Games",
            },
            {
                Header: "1000 GAMES",
                accessor: "1000 Games",
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
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                                            style: setColor(cell, cell.column.id, cell.value),
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
