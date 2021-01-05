import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTable, useSortBy, usePagination } from "react-table";
import styled from "styled-components";
import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";
import { ThemeContext } from "../../context";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { Pagination } from "../../components";

export default function CustomLeaderboard(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
        table {
            border-spacing: 0;
            width: 100%;
            font-size: 0.8rem;
            tr {
                :last-child {
                    td {
                        border-bottom: solid 1px
                            ${theme === "dark"
                                ? "rgb(100, 100, 100)"
                                : "rgb(200, 200, 200)"};
                    }
                }
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
                // color: black;
                border-bottom: solid 1px
                    ${theme === "dark"
                        ? "rgb(100, 100, 100)"
                        : "rgb(200, 200, 200)"};
                font-weight: 500;
            }
            td {
                margin: 0;
                padding: 0.5rem;

                :last-child {
                    border-right: 0;
                }
            }
        }
    `;

    const [data, setData] = useState([]);

    const {
        type,
        count,
        mintier,
        maxtier,
        minbattles,
        maxbattles,
        minWN8,
        maxWN8,
        minwinrate,
        maxwinrate,
    } = props;
    useEffect(() => {
        const rankColors = {
            1: <span style={{ color: "gold", fontWeight: 600 }}>1</span>,
            2: <span style={{ color: "silver", fontWeight: 600 }}>2</span>,
            3: <span style={{ color: "orange", fontWeight: 600 }}>3</span>,
        };

        async function fetchData() {
            const url = `https://tomatobackend.herokuapp.com/api/abcd/leaderboards/custom/
            ${type}/${count}/${mintier}/${maxtier}/${minbattles}/${maxbattles}/${minWN8}/${maxWN8}/${minwinrate}/${maxwinrate}`;
            const raw = await fetch(url);
            let res = await raw.json();

            const newData = [];
            for (let i = 0; i < res.length; ++i) {
                const link = `/stats/NA/${res[i].username}=${res[i].player_id}`;
                res[i].winrate = res[i].winrate.toFixed(2);
                res[i].avgtier = res[i].avgtier.toFixed(2);
                let entry = {
                    rank: res[i].rank,
                    username: <Link to={link}>{res[i].username}</Link>,
                    winrate: res[i].winrate,
                    wn8: res[i].wn8,
                    avgtier: res[i].avgtier,
                    battles: res[i].battles,
                    moecount: res[i].moecount,
                    moe10: res[i].moe10,
                };
                if (res[i].rank <= 3) {
                    entry.rank = rankColors[res[i].rank];
                }
                // entry[type] = res[i][type];
                // if (type === 'wn8') entry[type] = <div style={{padding: '8px', margin: '-8px -8px', color: 'white', backgroundColor: WN8c(res[i][type])}}>{res[i][type]}</div>;
                // if (type === 'winrate') entry[type] = <div style={{padding: '8px', margin: '-8px -8px', color: 'white', backgroundColor: WRc(res[i][type])}}>{res[i][type]}</div>;

                newData.push(entry);
            }
            setData(newData);
        }

        fetchData();
    }, [
        type,
        count,
        mintier,
        maxtier,
        minbattles,
        maxbattles,
        minWN8,
        maxWN8,
        minwinrate,
        maxwinrate,
    ]);

    function setMid(string) {
        return <div style={{ textAlign: "center" }}>{string}</div>;
    }

    function WN8Style(wn8) {
        return {
            background: WN8c(wn8),
            color: "white",
            padding: "8px",
            margin: "-8px -8px",
            textAlign: "center",
        };
    }

    function WRStyle(wr) {
        return {
            background: WRc(wr),
            color: "white",
            padding: "8px",
            margin: "-8px -8px",
            textAlign: "center",
        };
    }

    const columns = React.useMemo(
        () => [
            { Header: "", accessor: "rank" },
            { Header: "Username", accessor: "username" },
            {
                Cell: ({ value }) => {
                    return <div style={WN8Style(value)}>{value}</div>;
                },
                Header: setMid("WN8"),
                accessor: "wn8",
            },
            {
                Cell: ({ value }) => {
                    return <div style={WRStyle(value)}>{value + "%"}</div>;
                },
                Header: setMid("Winrate"),
                accessor: "winrate",
            },
            {
                Cell: ({ value }) => {
                    return setMid(value);
                },
                Header: setMid("Avg Tier"),
                accessor: "avgtier",
            },
            {
                Cell: ({ value }) => {
                    return setMid(value);
                },
                Header: setMid("Battles"),
                accessor: "battles",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
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
            initialState: { pageIndex: 0, pageSize: 100 },
        },
        useSortBy,
        usePagination
    );

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
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Pagination
                showGoTo
                pageSizes={[50, 100, 250, 1000, 5000, 10000]}
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
        </Styles>
    );
}
