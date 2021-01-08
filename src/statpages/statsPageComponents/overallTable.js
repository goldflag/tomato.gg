import React from "react";
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
} from "react-table";
import WN8c from "../../functions/WN8color";
import WRc from "../../functions/WRcolor";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ThemeContext } from "../../context";
import { MoEStars, Pagination } from "../../components";
import {
    ClassFilter,
    GlobalFilter,
    MasteryFilter,
    MoEFilter,
    NationFilter,
    NumericTierFilter,
    PremFilter,
    ArrayFilter
} from "../../components/tableFilters";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    SubRow,
    TableContainer,
} from "../../components/tableComponents";

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

function OverallTable(props) {
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
            <>
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
            </>
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

        const filterOrder = [5, 4, 3, 20, 21, 22];

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
                <FiltersContainer>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                    {headerGroups.map((headerGroup, i) => (
                        <>
                            <ButtonFiltersContainer key={i}>
                                {filterOrder.map(
                                    (n) =>
                                        !headerGroup.headers[n]
                                            .disableFilters && (
                                            <span key={n}>
                                                {headerGroup.headers[n].render(
                                                    "Filter"
                                                )}
                                            </span>
                                        )
                                )}
                            </ButtonFiltersContainer>
                            <div
                                style={{
                                    marginRight: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                {headerGroup.headers[6].render("Filter")}
                            </div>
                        </>
                    ))}
                </FiltersContainer>
                <StyledTable
                    theme={theme}
                    tdOverride={"padding: 0.2rem 0.5rem;"}
                    {...getTableProps()}
                >
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
                                        <SubRow theme={theme}>
                                            <td colSpan={visibleColumns.length}>
                                                {renderRowSubComponent({ row })}
                                            </td>
                                        </SubRow>
                                    ) : null}
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
                disableFilters: true,
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
                filter: ArrayFilter,
            },
            {
                Cell: ({ value }) => {
                    return (
                        <div style={{ margin: "8px" }}>{tierConv[value]}</div>
                    );
                },
                Header: "Tier",
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: ArrayFilter,
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
                filter: ArrayFilter,
            },
            {
                Header: "Games",
                accessor: "battles",
                Filter: NumberRangeColumnFilter,
                filter: ArrayFilter,
            },
            {
                Cell: ({ value }) => {
                    return <div style={WN8Style(value)}>{value}</div>;
                },
                Header: "WN8",
                accessor: "wn8",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
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
                disableFilters: true,
            },
            {
                Header: "DPG",
                accessor: "dpg",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
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
                Cell: ({ value }) => <MoEStars marks={value} />,
                Header: "MOE",
                accessor: "moe",
                Filter: MoEFilter,
                filter: ArrayFilter,
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
                filter: ArrayFilter,
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: ArrayFilter,
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

export default OverallTable;
