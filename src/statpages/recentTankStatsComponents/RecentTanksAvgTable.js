// NPM
import React from "react";
import { useHistory } from "react-router-dom";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";

// LOCAL
import cellStyle from "Functions/cellStyle";
import { Pagination } from "Components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    TableContainer,
    NationCell,
    TankNameCell,
    TierCell,
    ClassCell,
    tableHeaders,
} from "Components/tableComponents";
import {
    ConvertedNationFilter,
    ClassFilter,
    GlobalFilter,
    PremFilter,
    NumericTierFilter,
    arrayFilterFn,
} from "Components/tableFilters";

function RecentTanksAvgTable({ data }) {
    const columns = React.useMemo(() => {
        return [
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
                Filter: ConvertedNationFilter,
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
                Header: tableHeaders.battles,
                accessor: "battles",
                disableFilters: true,
            },
            {
                Header: tableHeaders.wn8,
                accessor: "wn8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: tableHeaders.winrate,
                accessor: "winrate",
                disableFilters: true,
            },
            {
                Header: tableHeaders.dpg,
                accessor: "dpg",
                disableFilters: true,
            },
            { Header: tableHeaders.frags, accessor: "frags", disableFilters: true },
            {
                Header: tableHeaders.dmgRatio,
                accessor: "dmg_ratio",
                disableFilters: true,
            },
            {
                Header: tableHeaders.kd,
                accessor: "kd",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: tableHeaders.survival,
                accessor: "survival",
                disableFilters: true,
            },
            {
                Header: tableHeaders.spots,
                accessor: "spots",
                disableFilters: true,
            },
            {
                accessor: "is_premium",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ];
    }, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
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
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination
    );

    const history = useHistory();
    const handleRowClick = (row) => {
        history.push(`/tank/${row.original.tank_id}`);
    };

    return (
        <>
            <FiltersContainer>
                <div style={{ margin: "-10px 0px" }}>
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
                <StyledTable pointer={true} {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            {...column.getHeaderProps({
                                                style: {
                                                    backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                                },
                                            })}
                                        >
                                            {column.render("Header")}
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
                                <tr onClick={() => handleRowClick(row)} {...row.getRowProps()}>
                                    {row.cells.map((cell) =>
                                        cell.column.hidden ? null : (
                                            <td
                                                {...cell.getCellProps({
                                                    style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        )
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </TableContainer>
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

export default RecentTanksAvgTable;
