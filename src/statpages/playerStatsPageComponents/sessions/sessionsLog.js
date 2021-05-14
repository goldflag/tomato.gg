import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import styled from "styled-components";
import { Collapse } from "@material-ui/core";

import SessionBreakdown from "./sessionBreakdown";
import { Pagination, tableHeaders } from "Components";
import cellStyle from "Functions/cellStyle";
import { Capital, commonStrings } from "Data/localizations";

const Table = styled.table`
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
`;

const Tr = styled.tr`
    color: rgb(220, 220, 220);
    background-color: rgba(40, 40, 70, 0.5);
    :nth-child(4n + 1) {
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
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(7px);
`;

const SubTr = styled.tr`
    color: rgb(220, 220, 220);
    background-color: rgba(40, 40, 70, 0.25);
`;

const SubTd = styled.td`
    padding: 0;
`;

export default function SessionsLog({ rows, data }) {
    const columns = React.useMemo(
        () => [
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: Capital(commonStrings.battles),
                accessor: "battles",
            },
            {
                Header: Capital(tableHeaders.avgTier),
                accessor: "tier",
            },
            {
                Header: "Tanks",
                accessor: "tankcount",
            },
            {
                Header: commonStrings.wn8,
                accessor: "overallWN8",
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: Capital(commonStrings.wr),
                accessor: "winrate",
            },
            {
                Header: commonStrings.dpg,
                accessor: "damagerate",
            },
            {
                Header: Capital(commonStrings.frags),
                accessor: "fragsrate",
            },
            {
                Header: Capital(commonStrings.dmgRatio),
                accessor: "DMGratio",
            },
            {
                Header: commonStrings.kd,
                accessor: "KD",
            },
            {
                Header: tableHeaders.spots,
                accessor: "spottedrate",
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
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
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: rows },
        },
        useSortBy,
        useExpanded,
        usePagination
    );
    return (
        <>
            <TableContainer>
                <Table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        active={column.isSorted}
                                    >
                                        {column.render("Header")}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i}>
                                    <Tr
                                        {...row.getToggleRowExpandedProps({
                                            style: { height: "40px" },
                                        })}
                                    >
                                        {row.cells.map((cell) => (
                                            <Td
                                                {...cell.getCellProps({
                                                    style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                                                })}
                                            >
                                                {cell.render("Cell")}
                                            </Td>
                                        ))}
                                    </Tr>
                                    <SubTr style={{ height: row.isExpanded || "0px" }}>
                                        <SubTd colSpan={visibleColumns.length}>
                                            <Collapse in={row.isExpanded}>
                                                <SessionBreakdown data={row.original.tankStats} />
                                            </Collapse>
                                        </SubTd>
                                    </SubTr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </Table>
            </TableContainer>
            <Pagination
                pageSizes={[5, 10, 15, 25, 50, 100]}
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
