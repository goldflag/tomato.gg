import React, { useState, useEffect, useCallback, useContext } from "react";
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
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ThemeContext, ServerContext } from "../../context";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MasteryGraph from "./masteryGraph";
import { Pagination } from "../../components";

function MasteryTable(props) {
    const { theme } = useContext(ThemeContext);
    const { server } = useContext(ServerContext);

    const Styles = styled.div`
        .tableContainer {
            overflow-x: auto;
            background-color: ${theme === "dark"
            ? "rgb(40, 40, 40)"
            : "rgb(250, 250, 250)"};
        }

        table {
            position: sticky;
            border-spacing: 0;
            width: 100%;
            font-size: 0.8rem;

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
                border-bottom: solid 1px
                    ${theme === "dark"
                        ? "rgb(100, 100, 100)"
                        : "rgb(200, 200, 200)"};
                font-weight: 500;
            }
            td {
                margin: 0;
                padding: 0rem 0rem 0rem 0.5rem;
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
        const [value, setValue] = useState(globalFilter);
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
                    style={{backgroundColor: filterValue === undefined ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    {" "}
                    ALL{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("HT");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "HT" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    {" "}
                    HT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("MT");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "MT" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    {" "}
                    MT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("LT");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "LT" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    {" "}
                    LT{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("TD");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "TD" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    {" "}
                    TD{" "}
                </Button>
                <Button
                    onClick={() => {
                        setFilter("SPG");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "SPG" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === undefined ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    All
                </Button>
                <Button
                    onClick={() => {
                        setFilter("X");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "X" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    X
                </Button>
                <Button
                    onClick={() => {
                        setFilter("IX");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "IX" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    IX
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VIII");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "VIII" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    VIII
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VII");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "VII" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    VII
                </Button>
                <Button
                    onClick={() => {
                        setFilter("VI");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "VI" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    VI
                </Button>
                <Button
                    onClick={() => {
                        setFilter("V");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "V" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    V
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
                    style={{backgroundColor: filterValue === undefined ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    ALL
                </Button>
                <Button
                    onClick={() => {
                        setFilter("China");
                    }}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === "China" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "France" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Germany" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Japan" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Sweden" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "UK" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "USA" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "USSR" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Czech" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Italy" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                    style={{backgroundColor: filterValue === "Poland" ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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

    function PremFilter({
        column: { filterValue, setFilter, preFilteredRows, id },
    }) {
        return (
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Button
                    onClick={() => setFilter(undefined)}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === undefined ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    ALL
                </Button>
                <Button
                    onClick={() => setFilter(true)}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === true ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
                >
                    Prem
                </Button>
                <Button
                    onClick={() => setFilter(false)}
                    className={"filterButton"}
                    style={{backgroundColor: filterValue === false ? 'rgb(222, 13, 93)' : 'rgb(66, 84, 143)' }} 
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
                hiddenColumns: ["prem"],
                initialState: {
                    pageIndex: 0,
                    pageSize: 100,
                    sortBy: [
                        {
                            id: "ace",
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

        function SubRows({ data }) {
            if (data) {
                return (
                    <div
                        style={{
                            backgroundColor:
                                theme === "dark"
                                    ? "rgb(40, 40, 40)"
                                    : "rgb(255, 255, 255)",
                            marginLeft: "-0.5rem",
                        }}
                    >
                        <MasteryGraph data={data} />
                    </div>
                );
            } else {
                return <div style={{ padding: "0.3rem" }}>Loading...</div>;
            }
        }

        function SubRowAsync({ row, rowProps, visibleColumns }) {
            const [data, setData] = useState();
            useEffect(() => {
                async function get() {
                    fetch(
                        `https://tomatobackend.herokuapp.com/api/abcd/masterytank/${row.original.id}/${server}`
                    )
                        .then((res) => res.json())
                        .then((res) => setData(res));
                }

                get();
            }, [row.original.id]);

            return <SubRows data={data} />;
        }

        const renderRowSubComponent = useCallback(
            ({ row, rowProps, visibleColumns }) => (
                <SubRowAsync
                    row={row}
                    rowProps={rowProps}
                    visibleColumns={visibleColumns}
                />
            ),
            []
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
                            {headerGroups[0].headers[1].render("Filter")}
                        </span>
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
                            {headerGroups[0].headers[10].render("Filter")}
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
                    pageSizes={[100, 250, 500]}
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
                    return <div style={{ margin: "10px" }}>{value}</div>;
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
                            style={{ maxWidth: "20px", margin: "3px" }}
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
                Header: "3rd Class",
                accessor: "3rd",
                disableFilters: true,
            },
            {
                Header: "2nd Class",
                accessor: "2nd",
                disableFilters: true,
            },
            {
                Header: "1st Class",
                accessor: "1st",
                disableFilters: true,
            },
            {
                Header: "Ace Wanker",
                accessor: "ace",
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
            <div className="tableContainer">
                <Table columns={columns} data={data} />
            </div>
        </Styles>
    );
}

export default MasteryTable;
