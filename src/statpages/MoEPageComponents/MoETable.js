import React, { useState, useEffect, useCallback, useContext } from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ServerContext } from "Context";
import MoEGraph from "./MoEGraph";
import { Pagination } from "Components";
import {
    ClassFilter,
    GlobalFilter,
    MoETierFilter,
    NationFilter,
    PremFilter,
    arrayFilterFn,
} from "Components/tableFilters";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    SubRow,
    TableContainer,
    StyledTable,
    Name,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";

const backend = process.env.REACT_APP_BACKEND;

function MoETable(props) {
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
                hiddenColumns: ["prem"],
                initialState: {
                    pageIndex: 0,
                    pageSize: 50,
                    sortBy: [
                        {
                            id: "95",
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
                            backgroundColor: "rgba(40, 40, 70, 0.5)",
                            marginLeft: "-0.5rem",
                        }}
                    >
                        <MoEGraph data={data} />
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
                    fetch(`${backend}/api/abcd/moetank/${row.original.id}/${server}`)
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

    // const test = useMemo(() =>
    //     computeExpensiveValue(a, b),
    //     [a, b]
    // )

    const columns = React.useMemo(
        () => [
            {
                id: "expander", // It needs an ID
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img src={require(`Assets/flagIcons/${value}.png`)} style={{ maxWidth: "40px" }} alt={value} />
                    );
                },
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Tier",
                accessor: "tier",
                Filter: MoETierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img src={require(`Assets/classIcons/${value}.png`)} style={{ maxWidth: "20px" }} alt={value} />
                    );
                },
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: (data) => {
                    const value = data.row.original;
                    return (
                        <Name val={value.isPrem}>
                            <img src={value.image} alt={value.name} />
                            {value.name}
                        </Name>
                    );
                },
                Header: "Name",
                accessor: "name",
                disableFilters: true,
            },
            {
                Header: "50%",
                accessor: "50",
                disableFilters: true,
                // Filter: NumberRangeColumnFilter,
                // //filter: "includes"
                // filter: testfilter
            },
            {
                Header: "65%",
                accessor: "65",
                disableFilters: true,
            },
            {
                Header: "85%",
                accessor: "85",
                disableFilters: true,
            },
            {
                Header: "95%",
                accessor: "95",
                disableFilters: true,
            },
            {
                Header: "100%",
                accessor: "100",
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

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    return (
        <TableContainer>
            <Table columns={columns} data={data} />
        </TableContainer>
    );
}

export default MoETable;
