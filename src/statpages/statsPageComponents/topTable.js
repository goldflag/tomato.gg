// NPM
import React from "react";
import { useTable } from "react-table";
import styled, { css } from "styled-components";
import LocalizedStrings from "react-localization";

// LOCAL
import { TableContainer } from "Components/tableComponents";
import { WN8color } from "Functions/colors";

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

const strings = new LocalizedStrings({
    en: {
        overall: "OVERALL",
        hrs24: "24 HOURS",
        days3: "3 DAYS",
        days7: "7 DAYS",
        days30: "30 DAYS",
        days60: "60 DAYS",
        games100: "100 GAMES",
        games1000: "1000 GAMES",
    },
    cs: {
        overall: "CELKOVĚ",
        hrs24: "24 HODIN",
        days3: "3 DNÍ",
        days7: "7 DNÍ",
        days30: "30 DNÍ",
        days60: "60 DNÍ",
        games100: "100 BITEV",
        games1000: "1000 BITEV",
    },
    fr: {
        overall: "GLOBAM",
        hrs24: "24 HEURES",
        days3: "3 JOURS",
        days7: "7 JOURS",
        days30: "30 JOURS",
        days60: "60 JOURS",
        games100: "100 PARTIES",
        games1000: "1000 PARTIES",
    },
    pl: {
        overall: "OGÓLNE",
        hrs24: "24 GODZINY",
        days3: "3 DNI",
        days7: "7 DNI",
        days30: "30 DNI",
        days60: "60 DNI",
        games100: "100 BITEW",
        games1000: "1000 BITEW",
    },
});

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
                backgroundColor: WN8color(value),
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
                Header: strings.overall,
                accessor: "Overall",
            },
            {
                Header: strings.hrs24,
                accessor: "24 Hours",
            },
            {
                Header: strings.days3,
                accessor: "3 Days",
            },
            {
                Header: strings.days7,
                accessor: "7 Days",
            },
            {
                Header: strings.days30,
                accessor: "30 Days",
            },
            {
                Header: strings.days60,
                accessor: "60 Days",
            },
            {
                Header: strings.games100,
                accessor: "100 Games",
            },
            {
                Header: strings.games1000,
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
