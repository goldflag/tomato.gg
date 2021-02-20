import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import styled from "styled-components";
import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";
import { ThemeContext } from "../../context";

const backend = process.env.REACT_APP_BACKEND;

const rankColors = {
    1: <span style={{ color: "gold", fontWeight: 600 }}>1</span>,
    2: <span style={{ color: "silver", fontWeight: 600 }}>2</span>,
    3: <span style={{ color: "orange", fontWeight: 600 }}>3</span>,
};

const Styles = styled.div`
    table {
        border-spacing: 0;
        width: 100%;
        font-size: 0.8rem;
        tr {
            :last-child {
                td {
                    border-bottom: solid 1px
                        ${({ theme }) =>
                            theme === "dark"
                                ? "rgb(100, 100, 100)"
                                : "rgb(200, 200, 200)"};
                }
            }
            background-color: ${({ theme }) =>
                theme === "dark" ? "rgb(40, 40, 40)" : "rgb(250, 250, 250)"};
            :nth-child(even) {
                background-color: ${({ theme }) =>
                    theme === "dark"
                        ? "rgb(50, 50, 50)"
                        : "rgb(240, 240, 240)"};
            }
            :hover {
                background-color: ${({ theme }) =>
                    theme === "dark"
                        ? "rgb(30, 30, 30)"
                        : "rgb(220, 220, 230)"};
            }
        }
        th {
            text-align: left;
            padding: 10px;
            background-color: ${({ theme }) =>
                theme === "dark" ? "rgb(50, 50, 50)" : "rgb(255, 255, 255)"};
            // color: black;
            border-bottom: solid 1px
                ${({ theme }) =>
                    theme === "dark"
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
export default function SmallLeaderboard(props) {
    const { theme } = React.useContext(ThemeContext);

    const [data, setData] = useState([
        { rank: "1", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "2", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "3", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "4", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "5", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "6", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "7", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "8", username: "loading...", battles: "", avgtier: "", "": "" },
        { rank: "9", username: "loading...", battles: "", avgtier: "", "": "" },
        {
            rank: "10",
            username: "loading...",
            battles: "",
            avgtier: "",
            "": "",
        },
    ]);

    useEffect(() => {
        async function fetchData() {
            const url = `${backend}/api/abcd/leaderboards/${props.type}/10`;
            const raw = await fetch(url);
            let res = await raw.json();

            const newData = [];
            for (let i = 0; i < res.length; ++i) {
                const link = `/stats/NA/${res[i].username}=${res[i].player_id}`;
                res[i].winrate = res[i].winrate.toFixed(2) + "%";
                res[i].avgtier = res[i].avgtier.toFixed(2);
                let entry = {
                    rank: res[i].rank,
                    username: <Link to={link}>{res[i].username}</Link>,
                    avgtier: res[i].avgtier,
                    battles: res[i].battles,
                };
                if (res[i].rank <= 3) {
                    entry.rank = rankColors[res[i].rank];
                }
                entry[props.type] = res[i][props.type];
                if (props.type === "wn8")
                    entry[props.type] = (
                        <div
                            style={{
                                padding: "8px",
                                margin: "-8px -8px",
                                color: "white",
                                backgroundColor: WN8c(res[i][props.type]),
                            }}
                        >
                            {res[i][props.type]}
                        </div>
                    );
                if (props.type === "winrate")
                    entry[props.type] = (
                        <div
                            style={{
                                padding: "8px",
                                margin: "-8px -8px",
                                color: "white",
                                backgroundColor: WRc(res[i][props.type]),
                            }}
                        >
                            {res[i][props.type]}
                        </div>
                    );

                newData.push(entry);
            }
            setData(newData);
        }

        fetchData();
    }, [props.type]);

    const columns = React.useMemo(
        () => ({
            battles: [
                { Header: "", accessor: "rank" },
                {
                    Header: "Username",
                    accessor: "username",
                    Footer: (
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                            {" "}
                            <Link to="/Leaderboards">FULL LEADERBOARDS</Link>
                        </span>
                    ),
                },
                { Header: "Battles", accessor: "battles" },
                { Header: "Avg Tier", accessor: "avgtier" },
            ],
            wn8: [
                { Header: "", accessor: "rank" },
                {
                    Header: "Username",
                    accessor: "username",
                    Footer: (
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                            {" "}
                            <Link to="/Leaderboards">FULL LEADERBOARDS</Link>
                        </span>
                    ),
                },
                { Header: "WN8", accessor: "wn8" },
                { Header: "Avg Tier", accessor: "avgtier" },
                { Header: "Battles", accessor: "battles" },
            ],
            winrate: [
                { Header: "", accessor: "rank" },
                {
                    Header: "Username",
                    accessor: "username",
                    Footer: (
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                            {" "}
                            <Link to="/Leaderboards">FULL LEADERBOARDS</Link>
                        </span>
                    ),
                },
                { Header: "Winrate", accessor: "winrate" },
                { Header: "Avg Tier", accessor: "avgtier" },
                { Header: "Battles", accessor: "battles" },
            ],
            moecount: [
                { Header: "", accessor: "rank" },
                {
                    Header: "Username",
                    accessor: "username",
                    Footer: (
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                            {" "}
                            <Link to="/Leaderboards">FULL LEADERBOARDS</Link>
                        </span>
                    ),
                },
                { Header: "3 MoE", accessor: "moecount" },
                { Header: "Avg Tier", accessor: "avgtier" },
                { Header: "Battles", accessor: "battles" },
            ],
            moe10: [
                { Header: "", accessor: "rank" },
                {
                    Header: "Username",
                    accessor: "username",
                    Footer: (
                        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                            {" "}
                            <Link to="/Leaderboards">FULL LEADERBOARDS</Link>
                        </span>
                    ),
                },
                { Header: "T10 3 MoE", accessor: "moe10" },
                { Header: "Avg Tier", accessor: "avgtier" },
                { Header: "Battles", accessor: "battles" },
            ],
        }),
        []
    )[props.type];

    const {
        getTableProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <Styles theme={theme}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {rows.map((row) => {
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
                <tfoot>
                    {footerGroups.map((group) => (
                        <tr {...group.getFooterGroupProps()}>
                            {group.headers.map((column) => (
                                <td {...column.getFooterProps()}>
                                    {column.render("Footer")}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </Styles>
    );
}
