import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
    NumericTierFilter,
    arrayFilterFn,
} from "../../components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
} from "../../components/tableComponents";
// import setColor from "../../functions/setColor";
import styled from "styled-components";
import cellStyle from "../../functions/cellStyle";

const Styles = styled.div`
    display: grid;
    grid-template-columns: 90px 50%;
    align-items: center;
    color: ${({ val }) => val === true ? `#ffe455` : null};
`;

function RecentTanksAvgTable(props) {
    const { theme } = React.useContext(ThemeContext);
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
                initialState: {
                    pageIndex: 0,
                    pageSize: 100,
                    hiddenColumns: ["prem"],
                    sortBy: [
                        {
                            id: "battles",
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

        const history = useHistory();
        const handleRowClick = (row) => {
            console.log(row.original.tank_id)
            history.push(`/tank/${row.original.tank_id}`);
        }  

        return (
            <>
                <FiltersContainer>
                    {/* <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    /> */}
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
                <StyledTable theme={theme} pointer={true} {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <>
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}                                          
                                            {...column.getHeaderProps({style: {backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null}})}
                                        >
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            </>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            const rowProps = row.getRowProps();
                            return (
                                <React.Fragment key={rowProps.key}>
                                    <tr onClick={() => handleRowClick(row)}  {...rowProps}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps({
                                                    style: cellStyle(cell.column.isSorted, cell.column.id, cell.value)
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

    const [data, setData] = useState([]);

    // Runs once when component mounts
    useEffect(() => {
        let tankStats = props.data;
        setData(tankStats);
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
            {
                Cell: ( data ) => {
                    const value = data.row.original;
                    return (
                        <Styles val={value.is_premium}>
                            <img
                                src={value.image}
                                style={{ maxWidth: "100px" }}
                                alt={"test"}
                            />
                            {value.short_name}
                        </Styles>
                    );
                },
                Header: "Tank",
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            // src={require(`../../assets/flagIcons/${nationConv[value]}.png`)}
                            src={require(`../../assets/flagIcons/${value}.png`)}
                            style={{ maxWidth: "40px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Nation",
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <div style={{ margin: "8px" }}>{tierConv[value]}</div>
                        //<div style={{ margin: "8px" }}>{value}</div>

                    );
                },
                Header: "Tier",
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            // src={require(`../../assets/classIcons/${classConv[value]}.png`)}
                            src={require(`../../assets/classIcons/${value}.png`)}
                            style={{ maxWidth: "20px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Class",
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "Games",
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: "WN8",
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
                Header: "Winrate",
                accessor: "winrate",
                disableFilters: true,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                disableFilters: true,
            },
            { Header: "KPG", accessor: "frags", disableFilters: true },
            {
                Header: "DR",
                accessor: "dmg_ratio",
                disableFilters: true,
            },
            {
                Header: "KDR",
                accessor: "kd",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
                Header: "Survival%",
                accessor: "survival",
                disableFilters: true,
            },
            {
                Header: "Spots",
                accessor: "spots",
                disableFilters: true,
            },
            {
                Header: "",
                accessor: "is_premium",
                Filter: PremFilter,
                filter: arrayFilterFn,
            },
        ];
    }, []);

    return (
        <TableContainer theme={theme}>
            <Table columns={columns} data={data} />
        </TableContainer>
    );
}

export default RecentTanksAvgTable;
