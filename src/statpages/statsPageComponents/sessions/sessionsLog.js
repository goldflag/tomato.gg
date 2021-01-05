import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import styled from "styled-components";
import WN8c from "../../../functions/WN8color";
import WRc from "../../../functions/WRcolor";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { ThemeContext } from "../../../context";
import SessionBreakdown from "./sessionBreakdown";
import { Pagination } from "../../../components";

function WN8Style(wn8) {
    return {
        background: WN8c(wn8),
        color: "white",
        padding: "10.5px",
        margin: "-0.3rem 0rem -0.3rem -0.5rem",
        textAlign: "center",
    };
}

function WRStyle(wr) {
    return {
        background: WRc(wr),
        color: "white",
        padding: "10.5px",
        margin: "-0.3rem 0rem -0.3rem -0.5rem",
        textAlign: "center",
    };
}

export default function SessionsLog(props) {
    const { theme } = React.useContext(ThemeContext);
    console.log(props.data);

    const Styles = styled.div`
        .tableContainer {
            overflow-x: auto;
            background-color: ${theme === "dark"
            ? "rgb(40, 40, 40)"
            : "rgb(250, 250, 250)"};
        }
        
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
            }
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
                    <div style={{ margin: "6px" }}>
                        <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? (
                                <Icon size={24} icon={chevronDown} />
                            ) : (
                                <Icon size={24} icon={chevronRight} />
                            )}
                        </span>
                    </div>
                ),
            },
            {
                Header: "",
                accessor: "rank",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Battles",
                accessor: "battles",
            },
            {
                Header: "Avg Tier",
                accessor: "tier",
            },
            {
                Header: "Tanks",
                accessor: "tankcount",
            },
            { 
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>) },
                Header: 'WN8', 
                accessor: 'overallWN8' },
            { 
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + "%"}</div>) },
                Header: 'Winrate', 
                accessor: 'winrate' },
            {
                Header: "DPG",
                accessor: "damagerate",
            },
            {
                Header: "KPG",
                accessor: "fragsrate",
            },
            {
                Header: "DMG Ratio",
                accessor: "DMGratio",
            },
            {
                Header: "KD",
                accessor: "KD",
            },
            {
                Header: "XP",
                accessor: "xprate",
            },
            {
                Header: "Spots",
                accessor: "spottedrate",
            },
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
        return (
            <div>
                <SessionBreakdown data={rowData} />
            </div>
        );
    }

    return (
        <Styles>
            <div className="tableContainer">
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
                                                        icon={arrowDown}
                                                    />
                                                ) : (
                                                    <Icon
                                                        size={16}
                                                        icon={arrowUp}
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
                                <React.Fragment key={i}>
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
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
                <Pagination
                    pageSizes={[7, 14, 30, 90, 180]}
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
            </div>
        </Styles>
    );
}
