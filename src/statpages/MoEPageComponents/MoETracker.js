import React, { useState, useEffect, useCallback, useContext } from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import { ServerContext } from "Context";
import MoEGraph from "./MoEGraph";
import {
    Loader,
    Pagination,
    ClassFilter,
    GlobalFilter,
    MoETierFilter,
    NationFilter,
    PremFilter,
    arrayFilterFn,
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    SubRow,
    TableContainer,
    Name,
} from "Components";

const backend = process.env.REACT_APP_BACKEND;

const MoEConv = {
    95: "3",
    85: "2",
    65: "1",
};

function MoETracker({ data, moe }) {
    const { server } = useContext(ServerContext);

    function setColor(column, value) {
        let backgroundColor = "";
        let color = "black";
        if (column === `7 Day %Δ`) backgroundColor = colorScale(value, 50);
        else if (column === `14 Day %Δ`) backgroundColor = colorScale(value, 30);
        else if (column === `30 Day %Δ`) backgroundColor = colorScale(value, 20);
        else color = undefined;
        return {
            color: color,
            backgroundColor: backgroundColor,
        };
    }

    function colorScale(val, multiplier) {
        function green(val) {
            val *= -1;
            return `rgb(${255 - val * multiplier}, 255, ${255 - val * multiplier})`;
        }

        function red(val) {
            return `rgb(255,${255 - val * multiplier}, ${255 - val * multiplier})`;
        }

        return val > 0 ? red(val) : green(val);
    }

    function percentStyle(val) {
        return (
            <div>
                {val > 0 ? "+" : ""}
                {val}%
            </div>
        );
    }

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
                Filter: MoETierFilter,
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
                Header: `${MoEConv[moe]} MoE Reqs`,
                accessor: `${moe}`,
                disableFilters: true,
            },
            {
                Header: "7 Day Δ",
                accessor: `7diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: ({ value }) => percentStyle(value),
                Header: "7 Day %Δ",
                accessor: `7percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Header: "14 Day Δ",
                accessor: `14diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: ({ value }) => percentStyle(value),
                Header: "14 Day %Δ",
                accessor: `14percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Header: "30 Day Δ",
                accessor: `30diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: ({ value }) => percentStyle(value),
                Header: "30 Day %Δ",
                accessor: `30percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ],
        [moe]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        visibleColumns,
        page,
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
            initialState: {
                pageIndex: 0,
                pageSize: 50,
                sortBy: [
                    {
                        id: `7percent${moe}`,
                        desc: false,
                    },
                ],
            },
        },
        useFilters,
        useGlobalFilter,
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
            return <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={20} top={20} />;
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
            <TableContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
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
                                    )
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i}>
                                    <tr {...row.getToggleRowExpandedProps({})}>
                                        {row.cells.map((cell) =>
                                            cell.column.hidden ? null : (
                                                <td
                                                    {...cell.getCellProps({
                                                        style: setColor(cell.column.Header, cell.value),
                                                    })}
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            )
                                        )}
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
            </TableContainer>
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

export default MoETracker;
