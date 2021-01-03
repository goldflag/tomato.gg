import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import {
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    useExpanded,
    useGlobalFilter,
    useAsyncDebounce,
} from "react-table";
import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ThemeContext } from "../../style/theme.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function WN8Style(wn8) {
    return {
        background: WN8c(wn8),
        color: "white",
        padding: "11px",
        margin: "-0.3rem -0.5rem -0.3rem -0.5rem",
        textAlign: "center",
    };
}

function WRStyle(wr) {
    return {
        background: WRc(wr),
        color: "white",
        padding: "11px",
        margin: "-0.3rem -0.5rem -0.3rem -0.5rem",
        textAlign: "center",
    };
}

function PeriodBreakdown(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
        table {
            position: sticky;
            border-spacing: 0;
            width: 100%;
            font-size: 0.8rem;
            overflow-x: scroll;
            tr {
                overflow-x: scroll;
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
                padding: 0.2rem 0.5rem;
                :last-child {
                    border-right: 0;
                }
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

        .filterButton {
            background-color: rgb(227, 48, 98);
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
        }

        .filterButton:hover {
            background-color: rgb(230, 85, 125);
        }

        .filters {
            background-color: ${theme === "dark"
                ? "rgb(40, 40, 40)"
                : "rgb(250, 250, 250)"};
            padding: 10px 10px 0 10px;
        }
    `;

    // Define a default UI for filtering
    function DefaultColumnFilter({
        column: { filterValue, preFilteredRows, setFilter },
    }) {
        const count = preFilteredRows.length;
        return (
            <input
                value={filterValue || ""}
                onChange={(e) => {
                    setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`Search ${count} records...`}
            />
        );
    }

    // Define a default UI for filtering
    function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }) {
        const count = preGlobalFilteredRows.length;
        const [value, setValue] = React.useState(globalFilter);
        const onChange = useAsyncDebounce((value) => {
            setGlobalFilter(value || undefined);
        }, 200);

        return (
            <span>
                <input
                    value={value || ""}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`Search ${count} records...`}
                    style={{
                        fontSize: "1rem",
                        padding: "6px",
                        border: "1px solid rgb(100, 100, 100)",
                        borderRadius: "3px",
                    }}
                />
            </span>
        );
    }

    function ClassFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
    }) {
        return (
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button
                    onClick={() => {
                        setFilter(undefined);
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    ALL{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("HT");
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    HT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("MT");
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    MT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("LT");
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    LT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("TD");
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    TD{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("SPG");
                    }}
                    className={"filterButton"}
                >
                    {" "}
                    SPG{" "}
                </Button>
            </ButtonGroup>
        );
    }

    function TierFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
    }) {
        return (
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button
                    onClick={() => setFilter(undefined)}
                    className={"filterButton"}
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        setFilter(10);
                    }}
                    className={"filterButton"}
                >
                    X
                </Button>
                <Button
                    onClick={() => {
                        setFilter(9);
                    }}
                    className={"filterButton"}
                >
                    IX
                </Button>
                <Button
                    onClick={() => {
                        setFilter(8);
                    }}
                    className={"filterButton"}
                >
                    VIII
                </Button>
                <Button
                    onClick={() => {
                        setFilter(7);
                    }}
                    className={"filterButton"}
                >
                    VII
                </Button>
                <Button
                    onClick={() => {
                        setFilter(6);
                    }}
                    className={"filterButton"}
                >
                    VI
                </Button>
                <Button
                    onClick={() => {
                        setFilter(5);
                    }}
                    className={"filterButton"}
                >
                    V
                </Button>
                <Button
                    onClick={() => {
                        setFilter(4);
                    }}
                    className={"filterButton"}
                >
                    IV
                </Button>
                <Button
                    onClick={() => {
                        setFilter(3);
                    }}
                    className={"filterButton"}
                >
                    III
                </Button>
                <Button
                    onClick={() => {
                        setFilter(2);
                    }}
                    className={"filterButton"}
                >
                    II
                </Button>
                <Button
                    onClick={() => {
                        setFilter(1);
                    }}
                    className={"filterButton"}
                >
                    I
                </Button>
            </ButtonGroup>
        );
    }

    function NationFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
    }) {
        return (
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button
                    onClick={() => setFilter(undefined)}
                    className={"filterButton"}
                >
                    ALL
                </Button>
                <Button
                    onClick={() => {
                        setFilter("China");
                    }}
                    className={"filterButton"}
                >
                    CN
                </Button>
                <Button
                    onClick={() => {
                        setFilter("France");
                    }}
                    className={"filterButton"}
                >
                    FR
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Germany");
                    }}
                    className={"filterButton"}
                >
                    DE
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Japan");
                    }}
                    className={"filterButton"}
                >
                    JP
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Sweden");
                    }}
                    className={"filterButton"}
                >
                    SE
                </Button>
                <Button
                    onClick={() => {
                        setFilter("UK");
                    }}
                    className={"filterButton"}
                >
                    UK
                </Button>
                <Button
                    onClick={() => {
                        setFilter("USA");
                    }}
                    className={"filterButton"}
                >
                    USA
                </Button>
                <Button
                    onClick={() => {
                        setFilter("USSR");
                    }}
                    className={"filterButton"}
                >
                    USSR
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Czech");
                    }}
                    className={"filterButton"}
                >
                    CZ
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Italy");
                    }}
                    className={"filterButton"}
                >
                    IT
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Poland");
                    }}
                    className={"filterButton"}
                >
                    PL
                </Button>
            </ButtonGroup>
        );
    }

    function PremFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
    }) {
        return (
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button
                    onClick={() => setFilter(undefined)}
                    className={"filterButton"}
                >
                    ALL
                </Button>
                <Button
                    onClick={() => setFilter(true)}
                    className={"filterButton"}
                >
                    Prem
                </Button>
                <Button
                    onClick={() => setFilter(false)}
                    className={"filterButton"}
                >
                    Regular
                </Button>
            </ButtonGroup>
        );
    }

    function fuzzyTextFilterFn(rows, id, filterValue) {
        return matchSorter(rows, filterValue, {
            keys: [(row) => row.values[id]],
        });
    }

    // Let the table remove the filter if the string is empty
    fuzzyTextFilterFn.autoRemove = (val) => !val;

    // Be sure to pass our updateMyData and the skipReset option
    function Table({ columns, data, updateMyData, skipReset }) {
        const filterTypes = React.useMemo(
            () => ({
                // Add a new fuzzyTextFilterFn filter type.
                fuzzyText: fuzzyTextFilterFn,
                // Or, override the default text filter to use
                // "startWith"
                text: (rows, id, filterValue) => {
                    return rows.filter((row) => {
                        const rowValue = row.values[id];
                        return rowValue !== undefined
                            ? String(rowValue)
                                  .toLowerCase()
                                  .startsWith(String(filterValue).toLowerCase())
                            : true;
                    });
                },
            }),
            []
        );

        const defaultColumn = React.useMemo(
            () => ({
                // Let's set up our default Filter UI
                Filter: DefaultColumnFilter,
                // And also our default editable cell
            }),
            []
        );

        // Use the state and functions returned from useTable to build your UI
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,
            state,
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
            preGlobalFilteredRows,
            setGlobalFilter,
            state: { pageIndex, pageSize },
        } = useTable(
            {
                columns,
                data,
                defaultColumn, // Be sure to pass the defaultColumn option
                filterTypes,
                initialState: {
                    pageIndex: 0,
                    pageSize: 25,
                    hiddenColumns: ["prem"],
                    sortBy: [
                        {
                            id: "tier",
                            desc: true,
                        },
                        {
                            id: "dpg",
                            desc: true,
                        },
                    ],
                },
            },
            useFilters, // useFilters!
            useGlobalFilter, // useGlobalFilter!
            useSortBy,
            useExpanded,
            usePagination
        );

        // Render the UI for your table
        return (
            <>
                <div className="filters">
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            margin: "10px 0 0 0",
                        }}
                    >
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[2].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[3].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[4].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[14].render("Filter")}
                        </span>
                    </div>
                </div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <>
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                        >
                                            {column.render("Header")}
                                            <span>
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
                            </>
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
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
                {/*
      Pagination can be built however you'd like.
      This is just a very basic UI implementation:
    */}
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
                    Page {pageIndex + 1} of {pageOptions.length}
                    {"  "}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[15, 25, 100, 250, 500].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </>
        );
    }

    const [data, setData] = useState([]);

    // Runs once when component mounts
    useEffect(() => {
        let tankStats = props.data;
        let rowData = [];
        for (let i = 0; i < tankStats.length; ++i) {
            let entry = {
                img: (
                    <img
                        src={require(`../../assets/tankIcons/${tankStats[i][0]}.png`)}
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
        setData(rowData);
    }, [props.data]);

    const columns = React.useMemo(() => {
        const tierConv = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
            10: "X",
        };
        return [
            { Header: "", accessor: "img" },
            { Header: "Name", accessor: "name" },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../assets/flagIcons/${value}.svg`)}
                            style={{ maxWidth: "40px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: "equals",
            },
            {
                Cell: ({ value }) => {
                    return <div style={{ margin: "8px" }}>
                        {tierConv[value]}
                    </div>
                },
                Header: "Tier",
                accessor: "tier",
                Filter: TierFilter,
                filter: "equals",
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../assets/classIcons/${value}.png`)}
                            style={{ maxWidth: "20px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: "equals",
            },
            { Header: "Games", accessor: "battles" },
            {
                Cell: ({ value }) => {
                    return <div style={WN8Style(value)}>{value}</div>;
                },
                Header: "WN8",
                accessor: "wn8",
            },
            {
                Cell: ({ value }) => {
                    return <div style={WRStyle(value)}>{value + "%"}</div>;
                },
                Header: "Winrate",
                accessor: "winrate",
            },
            { Header: "DPG", accessor: "dpg" },
            { Header: "KPG", accessor: "kpg" },
            { Header: "DR", accessor: "dmgRatio" },
            { Header: "KDR", accessor: "kd" },
            { Header: "Survival%", accessor: "survived" },
            { Header: "Spots", accessor: "spots" },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: "equals",
            },
        ];
    }, []);

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
}

export default PeriodBreakdown;
