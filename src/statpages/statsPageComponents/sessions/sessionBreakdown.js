import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { ThemeContext } from "../../../context";
import { Pagination } from "../../../components";
import { StyledTable } from "../../../components/tableComponents";
import setColor from "../../../functions/setColor";

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

export default function SessionBreakdown(props) {
    const { theme } = React.useContext(ThemeContext);
    const data = props.data;

    const columns = React.useMemo(
        () => [
            { Header: "", accessor: "img" },
            { Header: "Name", accessor: "name" },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../../assets/flagIcons/${value}.png`)}
                            style={{ maxWidth: "40px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Nation",
                accessor: "nation",
            },
            {
                Cell: ({ value }) => {
                    return (
                        <div>{tierConv[value]}</div>
                    );
                },
                Header: "Tier",
                accessor: "tier",
            },
            {
                Cell: ({ value }) => {
                    return (
                        <img
                            src={require(`../../../assets/classIcons/${value}.png`)}
                            style={{ maxWidth: "20px" }}
                            alt={value}
                        />
                    );
                },
                Header: "Class",
                accessor: "class",
            },
            { Header: "Games", accessor: "battles" },
            {
                Header: "WN8",
                accessor: "wn8",
            },
            {
                Cell: ({ value }) => {
                    return <div>{value + "%"}</div>;
                },
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
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
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
        useSortBy,
        useExpanded,
        usePagination
    );

    return (
        <>
            <StyledTable theme={theme} {...getTableProps()}>
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
                                    <span style={{ textAlign: "center" }}>
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
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps({
                                            style: setColor(cell.column.Header, cell.value)
                                        })}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
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
        </>
    );
}
