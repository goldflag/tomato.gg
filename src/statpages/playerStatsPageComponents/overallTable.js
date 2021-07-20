import React from "react";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import { MoEStars, Pagination } from "Components";
import {
    ClassFilter,
    GlobalFilter,
    MasteryFilter,
    MoEFilter,
    NationFilter,
    NumericTierFilter,
    PremFilter,
    arrayFilterFn,
    NumberRangeColumnFilter,
} from "Components/tableFilters";
import {
    ButtonFiltersContainer,
    ClassCell,
    FiltersContainer,
    NationCell,
    tableHeaders,
    TankNameCell,
    TierCell,
} from "Components/tableComponents";
import styled from "styled-components";
import cellStyle from "Functions/cellStyle";
import { Capital, commonStrings } from "Data/localizations";

const Table = styled.table`
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
`;

const Tr = styled.tr`
    white-space: nowrap;
    color: rgb(220, 220, 220);
    background-color: rgba(40, 40, 70, 0.5);
    cursor: pointer;
    :nth-child(2n + 1) {
        background-color: rgba(50, 50, 80, 0.5);
    }
    :hover {
        background-color: rgba(30, 30, 60, 0.5);
    }
`;

const Th = styled.th`
    cursor: "pointer";
    text-align: left;
    padding: 10px;
    background-color: rgba(50, 50, 80, 0.5);
    font-weight: 500;
    background-color: ${({ active }) => (active ? "rgb(207, 0, 76)" : "")};
`;

const Td = styled.td`
    padding: 0.4rem 0.5rem;
`;

const TableContainer = styled.div`
    font-family: Roboto Mono;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(7px);
`;

function OverallTable({ data, setSelectedTank, setModalOpen }) {
    const columns = React.useMemo(
        () => [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "name",
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
                Header: Capital(commonStrings.tier),
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
                Header: Capital(commonStrings.battles),
                accessor: "battles",
                filter: "between",
                Filter: NumberRangeColumnFilter,
            },
            {
                Header: commonStrings.wn8,
                accessor: "wn8",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: Capital(commonStrings.wr),
                accessor: "winrate",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            {
                Header: commonStrings.dpg,
                accessor: "dpg",
                Filter: NumberRangeColumnFilter,
                filter: "between",
                disableFilters: true,
            },
            { Header: Capital(commonStrings.frags), accessor: "kpg", disableFilters: true },
            { Header: commonStrings.dmgRatio, accessor: "dmgratio", disableFilters: true },
            { Header: commonStrings.kd, accessor: "kd", disableFilters: true },
            { 
                Cell: ({ value }) => `${value}%`,
                Header: tableHeaders.survival, 
                accessor: "survival", 
                disableFilters: true 
            },
            { Header: "XP", accessor: "xp", disableFilters: true },
            { 
                Cell: ({ value }) => `${value}%`,
                Header: "Hit%", 
                accessor: "hitratio", 
                disableFilters: true 
            },
            { Header: "Armor", accessor: "armoreff", disableFilters: true },
            { Header: tableHeaders.spots, accessor: "spots", disableFilters: true },
            {
                Cell: ({ value }) => <MoEStars marks={value} />,
                Header: "MOE",
                accessor: "moe",
                Filter: MoEFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ({ value }) => (
                    <img src={require(`Assets/masteryIcons/${value}.png`)} style={{ maxHeight: "23px" }} alt={value} />
                ),
                Header: "Mast", // TODO: iconize this
                accessor: "mastery",
                Filter: MasteryFilter,
                filter: arrayFilterFn,
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ],
        []
    );

    const filterOrder = [3, 2, 1, 16, 17, 18];
    columns.forEach((column) => column.sortDescFirst = true)

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
                pageSize: 25,
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
                    <React.Fragment key={i}>
                        <ButtonFiltersContainer key={i}>
                            {filterOrder.map(
                                (n) =>
                                    !columns[n].disableFilters && (
                                        <span key={n}>{headerGroup.headers[n].render("Filter")}</span>
                                    )
                            )}
                        </ButtonFiltersContainer>
                        {headerGroup.headers[4].render("Filter")}
                    </React.Fragment>
                ))}
            </FiltersContainer>
            <TableContainer>
                <Table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
                                        <Th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            {...column.getHeaderProps({
                                                style: {
                                                    cursor: "pointer",
                                                    backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                                },
                                            })}
                                        >
                                            {column.render("Header")}
                                        </Th>
                                    )
                                )}
                            </Tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()} onClick={() => {
                                    setSelectedTank(row.original);
                                    setModalOpen(true);
                                }} >
                                    {row.cells.map((cell) =>
                                        cell.column.hidden ? null : (
                                            <Td
                                                {...cell.getCellProps({
                                                    style: cellStyle(
                                                        cell.column.isSorted,
                                                        cell.column.id,
                                                        cell.value
                                                    ),
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </Td>
                                        )
                                    )}
                                </Tr>
                            );
                        })}
                    </tbody>
                </Table>
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

export default OverallTable;
