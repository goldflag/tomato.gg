import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import SessionBreakdown from "./sessionBreakdown";
import { Pagination } from "../../../components";
import cellStyle from "../../../functions/cellStyle";

export default function SessionsLog(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
        font-family: Roboto Mono;
        
        .tableContainer {
            overflow-x: auto;
            background-color: ${theme === "dark"
            ? "rgb(40, 40, 40)"
            : "rgb(250, 250, 250)"};
            margin-bottom: 1rem;
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
                padding: 0.4rem 0.5rem;
            }
        }
    `;


    const data = props.data;

    const columns = React.useMemo(
        () => [
            {
                id: "expander", // It needs an ID
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
                Header: 'WN8', 
                accessor: 'overallWN8' },
            { 
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
                Header: 'Winrate', 
                accessor: 'winrate' 
            },
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
            initialState: { pageIndex: 0, pageSize: 30 },
        },
        useSortBy,
        useExpanded,
        usePagination
    );

    function renderRowSubComponent(row) {
        let tankStats = row.row.original.tankStats;
        for (let i = 0; i < tankStats.length; ++i) {
            tankStats[i]['img'] = (
                <img
                    src={require(`../../../assets/tankIcons/${tankStats[i].id}.png`)}
                    alt={tankStats[i].id}
                />
            )
        }
        return (
            <div>
                <SessionBreakdown data={tankStats} />
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
                                        {...column.getHeaderProps({
                                            style: { cursor: "pointer", backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null }
                                        })}
                                    >
                                        {column.render("Header")}
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
                                    <tr {...row.getToggleRowExpandedProps({
                                        style: {height: "40px"}
                                    })}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps({
                                                style: cellStyle(cell.column.isSorted, cell.column.id, cell.value)
                                            })}>
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
