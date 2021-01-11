import React from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import {
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    useExpanded,
    useGlobalFilter,
} from "react-table";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ThemeContext } from "../../context";
import {
    ClassFilter,
    GlobalFilter,
    NationFilter,
    Pagination,
    PremFilter,
    TierFilter,
    arrayFilterFn,
} from "../../components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
} from "../../components/tableComponents";

function WN8Table(props) {
    const { theme } = React.useContext(ThemeContext);

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
                <FiltersContainer>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                    {headerGroups.map((headerGroup, i) => (
                        <ButtonFiltersContainer key={i}>
                            {headerGroup.headers.map(
                                ({ disableFilters, render }, i) =>
                                    !disableFilters && (
                                        <span key={i}>{render("Filter")}</span>
                                    )
                            )}
                        </ButtonFiltersContainer>
                    ))}
                </FiltersContainer>
                <StyledTable theme={theme} {...getTableProps()}>
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
                </StyledTable>
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
                filter: arrayFilterFn,
            },
            {
                Header: "Tier",
                accessor: "tier",
                Filter: TierFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
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
                filter: arrayFilterFn,
            },
        ],
        []
    );

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    return (
        <TableContainer theme={theme}>
            <Table columns={columns} data={data} />
        </TableContainer>
    );
}

export default WN8Table;
