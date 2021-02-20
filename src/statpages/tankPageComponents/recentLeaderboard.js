import React from "react";
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
    StyledTable,
    TableContainer,
} from "../../components/tableComponents";

import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";

export default function RecentsLeaderboard(props) {

    function setColor(column, value) {
        if (column === "wn8") return ({backgroundColor: WN8c(value), color: "white", padding: "10px"})
        else if (column === "winrate") return ({backgroundColor: WRc(value.slice(0, -1)), color: "white", padding: "10px"})
        else if (column === props.type) return ({backdropFilter: "brightness(1.3)"})
        else return null;  
    }
    
    function headerStyle(header) {
        if (header.id === props.type) {
            return {
                backgroundColor: "rgb(107, 3, 252)"
            }
        }
    }

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
            rows,
        } = useTable(
            {
                columns,
                data,
                defaultColumn, // Be sure to pass the defaultColumn option
                filterTypes,
                initialState: {
                    pageIndex: 0,
                    pageSize: 101
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
                <StyledTable theme={theme} {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <>
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps({
                                            style: headerStyle(column)
                                        })}
                                        >
                                            {column.render("Header")}
                                            {/* <span>
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
                                            </span> */}
                                        </th>
                                    ))}
                                </tr>
                            </>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            const rowProps = row.getRowProps();
                            return (
                                // <React.Fragment {...row.getRowProps()}>
                                <React.Fragment key={rowProps.key}>
                                    <tr {...rowProps}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps({
                                                    style: setColor(cell.column.id, cell.value)
                                                })}>
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
            </>
        );
    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Rank",
                accessor: "rank",
                disableFilters: true,
            },
            {
                Header: "Username",
                accessor: "username",
                disableFilters: true,
            },
            {
                Header: "Battles",
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: "WN8",
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Header: "Winrate",
                accessor: "winrate",
                disableFilters: true,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                disableFilters: true,
            },
            {
                Header: "Frags",
                accessor: "frags",
                disableFilters: true,
            },
            {
                Header: "K/D",
                accessor: "kd",
                disableFilters: true,
            },
            {
                Header: "Spots",
                accessor: "spots",
                disableFilters: true,
            },
            {
                Header: "Survival",
                accessor: "survived",
                disableFilters: true,
            },
        ],
        []
    );

    return (
        <TableContainer theme={theme}>
            <Table columns={columns} data={data} />
        </TableContainer>
    );
}
