import React, { useState, useEffect, useCallback, useContext } from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ServerContext } from "Context";
import MasteryGraph from "./masteryGraph";
import { Pagination } from "Components";
import {
    ClassFilter,
    GlobalFilter,
    NationFilter,
    PremFilter,
    TierFilter,
    arrayFilterFn,
} from "Components/tableFilters";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    SubRow,
    TableContainer,
    Name,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";

const backend = process.env.REACT_APP_BACKEND;

function MasteryTable(props) {
    const { server } = useContext(ServerContext);
    let data = props.data;

    // Define a default UI for filtering
    function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
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
                            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
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
                    pageSize: 50,
                    sortBy: [
                        {
                            id: "ace",
                            desc: true,
                        },
                    ],
                    hiddenColumns: ["isPrem"],
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
                            backgroundColor: "rgba(40, 40, 70, 0.5)",
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
                    fetch(`${backend}/api/abcd/masterytank/${row.original.id}/${server}`)
                        .then((res) => res.json())
                        .then((res) => setData(res));
                }

                get();
            }, [row.original.id]);

            return <SubRows data={data} />;
        }

        const renderRowSubComponent = useCallback(
            ({ row, rowProps, visibleColumns }) => (
                <SubRowAsync row={row} rowProps={rowProps} visibleColumns={visibleColumns} />
            ),
            []
        );

        // Render the UI for your table
        return (
            <>
                <FiltersContainer>
                    <div style={{ marginBottom: "-10px" }}>
                        <GlobalFilter
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={state.globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                    </div>
                    {headerGroups.map((headerGroup, i) => (
                        <ButtonFiltersContainer key={i}>
                            {headerGroup.headers.map(
                                ({ disableFilters, render }, i) =>
                                    !disableFilters && <span key={i}>{render("Filter")}</span>
                            )}
                        </ButtonFiltersContainer>
                    ))}
                </FiltersContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        {...column.getHeaderProps({
                                            style: {
                                                cursor: "pointer",
                                                backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                            },
                                        })}
                                    >
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <Icon size={16} icon={arrowDown} />
                                                ) : (
                                                    <Icon size={16} icon={arrowUp} />
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
                                    <tr {...row.getToggleRowExpandedProps({})}>
                                        {row.cells.map((cell) => (
                                            <td
                                                {...cell.getCellProps({
                                                    style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
                                    </tr>
                                    {row.isExpanded ? (
                                        <SubRow>
                                            <td colSpan={visibleColumns.length}>{renderRowSubComponent({ row })}</td>
                                        </SubRow>
                                    ) : null}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </StyledTable>
                <Pagination
                    pageSizes={[50, 100, 250, 500]}
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
                Cell: ({ row: { original } }) => (
                    <Name val={original.isPrem}>
                        <img src={original.image} alt={original.name} />
                        {original.name}
                    </Name>
                ),
                Header: "Name",
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/flagIcons/${value}.png`)} style={{ maxWidth: "40px" }} alt={value} />
                ),
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Tier",
                accessor: "tier",
                Filter: TierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/classIcons/${value}.png`)} style={{ maxWidth: "20px" }} alt={value} />
                ),
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
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
                filter: arrayFilterFn,
            },
        ],
        []
    );

    return (
        <TableContainer>
            <Table columns={columns} data={data} />
        </TableContainer>
    );
}

export default MasteryTable;
