import React from "react";
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
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ThemeContext } from "../../style/theme.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function WN8Table(props) {
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
                        border: "0",
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
            <ButtonGroup
                variant="text"
                color="green"
                aria-label="text primary button group"
            >
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
            <ButtonGroup
                variant="text"
                color="purple"
                aria-label="text primary button group"
            >
                <Button
                    onClick={() => setFilter(undefined)}
                    className={"filterButton"}
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        setFilter("X");
                    }}
                    className={"filterButton"}
                >
                    X
                </Button>
                <Button
                    onClick={() => {
                        setFilter("IX");
                    }}
                    className={"filterButton"}
                >
                    IX
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VIII");
                    }}
                    className={"filterButton"}
                >
                    VIII
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VII");
                    }}
                    className={"filterButton"}
                >
                    VII
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VI");
                    }}
                    className={"filterButton"}
                >
                    VI
                </Button>
                <Button
                    onClick={() => {
                        setFilter("V");
                    }}
                    className={"filterButton"}
                >
                    V
                </Button>
                <Button
                    onClick={() => {
                        setFilter("IV");
                    }}
                    className={"filterButton"}
                >
                    IV
                </Button>
                <Button
                    onClick={() => {
                        setFilter("III");
                    }}
                    className={"filterButton"}
                >
                    III
                </Button>
                <Button
                    onClick={() => {
                        setFilter("II");
                    }}
                    className={"filterButton"}
                >
                    II
                </Button>
                <Button
                    onClick={() => {
                        setFilter("I");
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
            <ButtonGroup
                variant="text"
                color="purple"
                aria-label="text primary button group"
            >
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
            <ButtonGroup
                variant="text"
                color="purple"
                aria-label="text primary button group"
            >
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
            rows,
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
                hiddenColumns: ["prem"],
                initialState: {
                    pageIndex: 0,
                    pageSize: 100,
                    sortBy: [
                        {
                            id: "expDamage",
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
                            {headerGroups[0].headers[10].render("Filter")}
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
                        {[100, 250, 500].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
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

    // This is an autoRemove method on the filter function that
    // when given the new filter value and returns true, the filter
    // will be automatically removed. Normally this is just an undefined
    // check, but here, we want to remove the filter if it's not a number
    filterGreaterThan.autoRemove = (val) => typeof val !== "number";
    const columns = React.useMemo(
        () => [
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
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: "equals",
            },
            {
                Header: "Tier",
                accessor: "tier",
                Filter: TierFilter,
                filter: "equals",
            },
            {
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: "equals",
            },
            {
                Header: "expDef",
                accessor: "expDef",
                disableFilters: true,
            },
            {
                Header: "expFrag",
                accessor: "expFrag",
                disableFilters: true,
            },
            {
                Header: "expSpot",
                accessor: "expSpot",
                disableFilters: true,
            },
            {
                Header: "expDamage",
                accessor: "expDamage",
                disableFilters: true,
            },
            {
                Header: "expWinRate",
                accessor: "expWinRate",
                disableFilters: true,
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

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    );
}

export default WN8Table;
