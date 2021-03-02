import React, { useState, useEffect, useCallback, useContext } from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import { ServerContext } from "Context";
import MasteryGraph from "./masteryGraph";
import { Pagination } from "Components";
import {
    ClassFilter,
    GlobalFilter,
    NationFilter,
    PremFilter,
    arrayFilterFn,
    NumericTierFilter,
} from "Components/tableFilters";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    SubRow,
    TableContainer,
    NationCell,
    TankNameCell,
    ClassCell,
    TierCell,
    tableHeaders,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";

const backend = process.env.REACT_APP_BACKEND;

function MasteryTable({ data }) {
    const { server } = useContext(ServerContext);

    const columns = React.useMemo(
        () => [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "short_name",
                disableFilters: true,
            },
            {
                Cell: NationCell,
                Header: tableHeaders.nation,
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: TierCell,
                Header: tableHeaders.tier,
                accessor: "tier",
                Filter: NumericTierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ClassCell,
                Header: tableHeaders.class,
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: tableHeaders.thirdClass,
                accessor: "3rd",
                disableFilters: true,
            },
            {
                Header: tableHeaders.secondClass,
                accessor: "2nd",
                disableFilters: true,
            },
            {
                Header: tableHeaders.firstClass,
                accessor: "1st",
                disableFilters: true,
            },
            {
                Header: tableHeaders.ace,
                accessor: "ace",
                disableFilters: true,
            },
            {
                Header: "",
                accessor: "is_premium",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ],
        []
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
                        id: "ace",
                        desc: true,
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
                fetch(`${backend}/api/masterytank/${row.original.id}/${server}`)
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
                                                        style: cellStyle(
                                                            cell.column.isSorted,
                                                            cell.column.id,
                                                            cell.value
                                                        ),
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

export default MasteryTable;
