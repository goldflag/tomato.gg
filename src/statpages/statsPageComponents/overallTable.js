import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
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
import { ThemeContext } from "../../context";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Pagination } from "../../components";

function WN8Style(wn8) {
    return {
        background: WN8c(wn8),
        color: "white",
        padding: "11px",
        margin: "-0.3rem -0.5rem -0.3rem -0.5rem",
        //margin: "-9px -9px",
        textAlign: "center",
    };
}

function WRStyle(wr) {
    return {
        background: WRc(wr),
        color: "white",
        padding: "11px",
        margin: "-0.3rem -0.5rem -0.3rem -0.5rem",
        //margin: "-9px -9px",
        textAlign: "center",
    };
    //return { background: WRc(wr), color: 'white', width: '100%', height: '100%' }
}

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

const moeConv = {
    0: "",
    1: (
        <img
            src={require(`../../assets/star.png`)}
            style={{ maxHeight: "16px" }}
            alt={"moe"}
        />
    ),
    2: (
        <>
            <img
                src={require(`../../assets/star.png`)}
                style={{ maxHeight: "16px" }}
                alt={"moe"}
            />{" "}
            <img
                src={require(`../../assets/star.png`)}
                style={{ maxHeight: "16px" }}
                alt={"moe"}
            />
        </>
    ),
    3: (
        <>
            <img
                src={require(`../../assets/star.png`)}
                style={{ maxHeight: "16px" }}
                alt={"moe"}
            />{" "}
            <img
                src={require(`../../assets/star.png`)}
                style={{ maxHeight: "16px" }}
                alt={"moe"}
            />{" "}
            <img
                src={require(`../../assets/star.png`)}
                style={{ maxHeight: "16px" }}
                alt={"moe"}
            />
        </>
    ),
};

function MOEFilter({
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
                    setFilter(0);
                }}
                className={"filterButton"}
            ></Button>
            <Button
                onClick={() => {
                    setFilter(1);
                }}
                className={"filterButton"}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    {moeConv[1]}
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(2);
                }}
                className={"filterButton"}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    {moeConv[2]}
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(3);
                }}
                className={"filterButton"}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    {moeConv[3]}
                </div>
            </Button>
        </ButtonGroup>
    );
}

function MasteryFilter({
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
                    setFilter(0);
                }}
                className={"filterButton"}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={require(`../../assets/masteryIcons/0.png`)}
                        style={{ maxHeight: "23px" }}
                        alt={"0"}
                    />
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(1);
                }}
                className={"filterButton"}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={require(`../../assets/masteryIcons/1.png`)}
                        style={{ maxHeight: "23px" }}
                        alt={"1"}
                    />
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(2);
                }}
                className={"filterButton"}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={require(`../../assets/masteryIcons/2.png`)}
                        style={{ maxHeight: "23px" }}
                        alt={"2"}
                    />
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(3);
                }}
                className={"filterButton"}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={require(`../../assets/masteryIcons/3.png`)}
                        style={{ maxHeight: "23px" }}
                        alt={"3"}
                    />
                </div>
            </Button>
            <Button
                onClick={() => {
                    setFilter(4);
                }}
                className={"filterButton"}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={require(`../../assets/masteryIcons/4.png`)}
                        style={{ maxHeight: "23px" }}
                        alt={"4"}
                    />
                </div>
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
            <Button onClick={() => setFilter(true)} className={"filterButton"}>
                Prem
            </Button>
            <Button onClick={() => setFilter(false)} className={"filterButton"}>
                Regular
            </Button>
        </ButtonGroup>
    );
}

function OverallTable(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
        .tableContainer {
            overflow-x: auto;
            background-color: ${theme === "dark"
            ? "rgb(40, 40, 40)"
            : "rgb(250, 250, 250)"};
        }

        table {
            border-spacing: 0;
            font-size: 0.8rem;
            width: 100%;
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

        .filterButton {
            background-color: rgb(227, 48, 98);
            color: white;
            padding: 5px 10px;
            text-align: center;
            text-decoration: none;
            display: flex;
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

        .subComponent {
            background-color: ${theme === "dark"
                ? "rgb(40, 40, 40)"
                : "rgb(250, 250, 250)"};
            padding: 10px;
        }
    `;
    let data = props.data;

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
                        borderRadius: "3px",
                        border: "1px solid rgb(100, 100, 100)",
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
                    <img
                        src={require(`../../assets/flagIcons/China.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"China"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("France");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/France.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"France"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Germany");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Germany.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Germany"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Japan");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Japan.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Japan"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Sweden");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Sweden.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Sweden"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("UK");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/UK.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"UK"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("USA");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/USA.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"USA"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("USSR");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/USSR.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"USSR"}
                    />                
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Czech");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Czech.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Czech"}
                    />                  
                </Button>
                <Button
                    onClick={() => {
                        setFilter("Italy");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Italy.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Italy"}
                    />                  
                </Button>
                <Button
                        styles={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '10px',
                    }}
                    onClick={() => {
                        setFilter("Poland");
                    }}
                    className={"filterButton"}
                >
                    <img
                        src={require(`../../assets/flagIcons/Poland.png`)}
                        style={{ maxHeight: "25px"}}
                        alt={"Poland"}
                    />
                </Button>
            </ButtonGroup>
        );
    }

    // This is a custom UI for our 'between' or number range
    // filter. It uses two number boxes and filters rows to
    // ones that have values between the two
    function NumberRangeColumnFilter({
        column: { filterValue = [], preFilteredRows, setFilter, id },
    }) {
        const [min, max] = React.useMemo(() => {
            let min = preFilteredRows.length
                ? preFilteredRows[0].values[id]
                : 0;
            let max = preFilteredRows.length
                ? preFilteredRows[0].values[id]
                : 0;
            preFilteredRows.forEach((row) => {
                min = Math.min(row.values[id], min);
                max = Math.max(row.values[id], max);
            });
            return [min, max];
        }, [id, preFilteredRows]);

        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                Battles
                <input
                    value={filterValue[0] || ""}
                    type="number"
                    onChange={(e) => {
                        const val = e.target.value;
                        setFilter((old = []) => [
                            val ? parseInt(val, 10) : undefined,
                            old[1],
                        ]);
                    }}
                    placeholder={`Min (${min})`}
                    style={{
                        width: "90px",
                        height: "35px",
                        marginRight: "0.5rem",
                        marginLeft: "0.5rem",
                        borderRadius: "3px",
                    }}
                />
                to
                <input
                    value={filterValue[1] || ""}
                    type="number"
                    onChange={(e) => {
                        const val = e.target.value;
                        setFilter((old = []) => [
                            old[0],
                            val ? parseInt(val, 10) : undefined,
                        ]);
                    }}
                    placeholder={`Max (${max})`}
                    style={{
                        width: "90px",
                        height: "35px",
                        marginLeft: "0.5rem",
                        borderRadius: "3px",
                    }}
                />
            </div>
        );
    }

    function fuzzyTextFilterFn(rows, id, filterValue) {
        return matchSorter(rows, filterValue, {
            keys: [(row) => row.values[id]],
        });
    }

    // Let the table remove the filter if the string is empty
    fuzzyTextFilterFn.autoRemove = (val) => !val;

    function Table({ columns, data }) {
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

        function renderRowSubComponent(row) {
            // let tankStats = row.row.original.tankStats;
            // let rowData = [];
            // for (let i = 0; i < tankStats.length; ++i) {
            //     let entry = {
            //         img:  <img src={require(`../../../assets/tankIcons/${tankStats[i][0]}.png`)} alt={tankStats[i][0]}/>,
            //         name: tankStats[i][1],
            //         nation: tankStats[i][2],
            //         tier: tankStats[i][3],
            //         class: tankStats[i][4],
            //         battles: tankStats[i][5],
            //         winrate: tankStats[i][6],
            //         wn8: tankStats[i][7],
            //         dpg: tankStats[i][8],
            //         kpg: tankStats[i][9],
            //         dmgRatio: tankStats[i][10],
            //         kd: tankStats[i][11],
            //         spots: tankStats[i][12],
            //     }
            //     rowData.push(entry);
            // }
            return <div>Under Construction</div>;
        }

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
                            {headerGroups[0].headers[5].render("Filter")}
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
                            {headerGroups[0].headers[3].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[20].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[21].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[22].render("Filter")}
                        </span>
                        <span
                            style={{
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {headerGroups[0].headers[6].render("Filter")}
                        </span>
                    </div>
                </div>
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
                                    {row.isExpanded ? (
                                        <tr className="subComponent">
                                            <td colSpan={visibleColumns.length}>
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
                    pageSizes={[15, 25, 100, 250, 500]}
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
            </>
        );
    }

    // Define a custom filter filter function!
    function filterGreaterThan(rows, id, filterValue) {
        return rows.filter((row) => {
            const rowValue = row.values[id];
            return rowValue >= filterValue;
        });
    }

    // This is an autoRemove method on the filter function that
    // when given the new filter value and returns true, the filter
    // will be automatically removed. Normally this is just an undefined
    // check, but here, we want to remove the filter if it's not a number
    filterGreaterThan.autoRemove = (val) => typeof val !== "number";
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
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../assets/tankIcons/${value}.png`)}
                            alt={value}
                        />
                    );
                },
                Header: "",
                accessor: "id",
                disableFilters: true,
            },
            {
                Header: "Name",
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../assets/flagIcons/${value}.png`)}
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
                    return (
                        <div style={{ margin: "8px" }}>{tierConv[value]}</div>
                    );
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
            {
                Header: "Games",
                accessor: "battles",
                Filter: NumberRangeColumnFilter,
                filter: "between",
            },
            {
                Cell: ({ value }) => {
                    return <div style={WN8Style(value)}>{value}</div>;
                },
                Header: "WN8",
                accessor: "wn8",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                cellStyle: (state, rowInfo) => {
                    return {
                        style: {
                            backgroundColor: "red",
                        },
                    };
                },
            },
            {
                Cell: ({ value }) => {
                    return <div style={WRStyle(value)}>{value + "%"}</div>;
                },
                Header: "Winrate",
                accessor: "winrate",
                Filter: NumberRangeColumnFilter,
                filter: "between",
            },
            {
                Header: "DPG",
                accessor: "dpg",
                Filter: NumberRangeColumnFilter,
                filter: "between",
            },
            { Header: "KPG", accessor: "kpg", disableFilters: true },
            {
                Header: "WN8%tile",
                accessor: "wn8percent",
                disableFilters: true,
            },
            {
                Header: "DPG%tile",
                accessor: "dpgpercent",
                disableFilters: true,
            },
            { Header: "DR", accessor: "dmgratio", disableFilters: true },
            { Header: "KDR", accessor: "kd", disableFilters: true },
            { Header: "Survival%", accessor: "survival", disableFilters: true },
            { Header: "XP", accessor: "xp", disableFilters: true },
            { Header: "Hit%", accessor: "hitratio", disableFilters: true },
            { Header: "Armor", accessor: "armoreff", disableFilters: true },
            { Header: "Spots", accessor: "spots", disableFilters: true },
            {
                Cell: ({ value }) => {
                    return moeConv[value];
                },
                Header: "MOE",
                accessor: "moe",
                Filter: MOEFilter,
                filter: "equals",
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../assets/masteryIcons/${value}.png`)}
                            style={{ maxHeight: "23px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Mast",
                accessor: "mastery",
                Filter: MasteryFilter,
                filter: "equals",
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: "equals",
            },
        ],
        []
    );

    return (
        <Styles>
            <div className="tableContainer">
                <Table columns={columns} data={data} />
            </div>
        </Styles>
    );
}

export default OverallTable;
