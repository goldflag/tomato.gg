// NPM
import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";

// LOCAL
import { Pagination, StyledTable, Name } from "../../../components";
import cellStyle from "../../../functions/cellStyle";
import { tierConv } from "../../../data/conversions";

export default function SessionBreakdown(props) {
    const data = props.data;

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
                    <img
                        src={require(`../../../assets/flagIcons/${value}.png`)}
                        style={{ maxWidth: "40px" }}
                        alt={value}
                    />
                ),
                Header: "Nation",
                accessor: "nation",
            },
            {
                Cell: ({ value }) => tierConv[value],
                Header: "Tier",
                accessor: "tier",
            },
            {
                Cell: ({ value }) => (
                    <img
                        src={require(`../../../assets/classIcons/${value}.png`)}
                        style={{ maxWidth: "20px" }}
                        alt={value}
                    />
                ),
                Header: "Class",
                accessor: "class",
            },
            { Header: "Games", accessor: "battles" },
            {
                Header: "WN8",
                accessor: "wn8",
            },
            {
                Cell: ({ value }) => `${value}%`,
                Header: "Winrate",
                accessor: "winrate",
            },
            { Header: "DPG", accessor: "dpg" },
            { Header: "KPG", accessor: "kpg" },
            { Header: "DR", accessor: "dmgRatio" },
            { Header: "KDR", accessor: "kd" },
            { Header: "Survival%", accessor: "survived" },
            { Header: "Spots", accessor: "spots" },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
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
            initialState: {
                pageIndex: 0,
                pageSize: 10,
                sortBy: [
                    {
                        id: "battles",
                        desc: true,
                    },
                ],
            },
        },
        useSortBy,
        useExpanded,
        usePagination
    );

    return (
        <div style={{ margin: "3px 0 3px 0" }}>
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
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
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
                        );
                    })}
                </tbody>
            </StyledTable>
            <Pagination
                pageSizes={[10, 20, 30]}
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
        </div>
    );
}
