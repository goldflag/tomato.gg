import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import styled from "styled-components";
import WN8c from "../../../functions/WN8color";
import WRc from "../../../functions/WRcolor";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { ThemeContext } from "../../../style/theme.js";
import SessionBreakdown from "./sessionBreakdown";

function WN8Style(wn8) {
    return {
        background: WN8c(wn8),
        color: "white",
        padding: "9px",
        margin: "-8px -8px",
        textAlign: "center",
    };
}

function WRStyle(wr) {
    return {
        background: WRc(wr),
        color: "white",
        padding: "9px",
        margin: "-8px -8px",
        textAlign: "center",
    };
}

export default function SessionsLog(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
        table {
            border-spacing: 0;
            width: 100%;
            font-size: 0.8rem;
            tr {
                color: ${theme === "dark"
                    ? "rgb(220, 220, 220)"
                    : "rgb(100, 100, 100)"};
                background-color: ${theme === "dark"
                    ? "rgb(40, 40, 40)"
                    : "rgb(250, 250, 250)"};
                :nth-child(even) {
                    background-color: ${theme === "dark"
                        ? "rgb(50, 50, 50)"
                        : "rgb(240, 240, 240)"};
                }
                :hover {
                    background-color: ${theme === "dark"
                        ? "rgb(30, 30, 30)"
                        : "rgb(220, 220, 230)"};
                }
            }
            th {
                text-align: left;
                padding: 10px;
                background-color: ${theme === "dark"
                    ? "rgb(50, 50, 50)"
                    : "rgb(255, 255, 255)"};
                font-weight: 500;
            }
            td {
                padding: 0.2rem 0.5rem;
            }
        }

        .pagination {
            padding: 0.7rem;
            font-size: 0.8rem;
            background-color: ${theme === "dark"
                ? "rgb(40, 40, 40)"
                : "rgb(250, 250, 250)"};
            color: ${theme === "dark"
                ? "rgb(220, 220, 220)"
                : "rgb(80, 80, 80)"};
            margin-bottom: 1rem;
        }

        .paginationButton {
            font-family: "Segoe UI";
            font-weight: 500;
            height: 2rem;
            width: 2rem;
            color: rgb(71, 99, 214);
            background: none;
            padding: 0rem;
            border-width: 0px;
        }

        .paginationButton:hover {
            background-color: rgb(100, 129, 234);
            color: white;
            border-radius: 50%;
        }
    `;

    const data = props.data;

    const columns = React.useMemo(
        () => [
            {
                // Make an expander cell
                Header: () => null, // No header
                id: "expander", // It needs an ID
                Cell: ({ row }) => (
                    // Use Cell to render an expander for each row.
                    // We can use the getToggleRowExpandedProps prop-getter
                    // to build the expander.
                    <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? (
                            <Icon size={24} icon={chevronDown} />
                        ) : (
                            <Icon size={24} icon={chevronRight} />
                        )}
                    </span>
                ),
            },
            { Header: "", accessor: "rank" },
            { Header: "Date", accessor: "date" },
            { Header: "Battles", accessor: "battles" },
            { Header: "Avg Tier", accessor: "tier" },
            { Header: "Tanks", accessor: "tankcount" },
            {
                Cell: ({ value }) => {
                    return <div style={WN8Style(value)}>{value}</div>;
                },
                Header: "WN8",
                accessor: "overallWN8",
            },
            {
                Cell: ({ value }) => {
                    return <div style={WRStyle(value)}>{value + "%"}</div>;
                },
                Header: "Winrate",
                accessor: "winrate",
            },
            { Header: "DPG", accessor: "damagerate" },
            { Header: "KPG", accessor: "fragsrate" },
            { Header: "DMG Ratio", accessor: "DMGratio" },
            { Header: "KD", accessor: "KD" },
            { Header: "XP", accessor: "xprate" },
            { Header: "Spots", accessor: "spottedrate" },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        visibleColumns,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        // The rest of these things are super handy, too ;)
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
            initialState: { pageIndex: 0, pageSize: 7 },
        },
        useSortBy,
        useExpanded,
        usePagination
    );

    function renderRowSubComponent(row) {
        let tankStats = row.row.original.tankStats;
        let rowData = [];
        for (let i = 0; i < tankStats.length; ++i) {
            let entry = {
                img: (
                    <img
                        src={require(`../../../assets/tankIcons/${tankStats[i][0]}.png`)}
                        alt={tankStats[i][0]}
                    />
                ),
                name: tankStats[i][1],
                nation: tankStats[i][2],
                tier: tankStats[i][3],
                class: tankStats[i][4],
                battles: tankStats[i][5],
                winrate: tankStats[i][6],
                wn8: tankStats[i][7],
                dpg: tankStats[i][8],
                kpg: tankStats[i][9],
                dmgRatio: tankStats[i][10],
                kd: tankStats[i][11],
                spots: tankStats[i][12],
                survived: tankStats[i][13],
                isPrem: tankStats[i][14],
            };
            rowData.push(entry);
        }
        console.log(rowData);
        return (
            <div>
                <SessionBreakdown data={rowData} />
            </div>
        );
    }

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                >
                                    {column.render("Header")}
                                    <span style={{ textAlign: "center" }}>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <Icon
                                                    size={16}
                                                    icon={arrowUp}
                                                />
                                            ) : (
                                                <Icon
                                                    size={16}
                                                    icon={arrowDown}
                                                />
                                            )
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <React.Fragment {...row.getRowProps()}>
                                <tr>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                                {/*
                                If the row is in an expanded state, render a row with a
                                column that fills the entire length of the table.
                            */}
                                {row.isExpanded ? (
                                    <tr>
                                        <td colSpan={visibleColumns.length}>
                                            {/*
                                    Inside it, call our renderRowSubComponent function. In reality,
                                    you could pass whatever you want as props to
                                    a component like this, including the entire
                                    table instance. But for this example, we'll just
                                    pass the row
                                    */}
                                            {renderRowSubComponent({ row })}
                                        </td>
                                    </tr>
                                ) : null}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    className={"paginationButton"}
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    <Icon size={24} icon={chevronsLeft} />
                </button>{" "}
                <button
                    className={"paginationButton"}
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    <Icon size={24} icon={chevronLeft} />
                </button>{" "}
                <button
                    className={"paginationButton"}
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    <Icon size={24} icon={chevronRight} />
                </button>{" "}
                <button
                    className={"paginationButton"}
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    <Icon size={24} icon={chevronsRight} />
                </button>{" "}
                {/* <span> */}
                Page {pageIndex + 1} of {pageOptions.length} {/* </span> */}
                {"  "}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[7, 14, 30, 90, 180].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </Styles>
    );
}
