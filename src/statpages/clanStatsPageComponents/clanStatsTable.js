// NPM
import React from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import { Link } from "react-router-dom";

// LOCAL
// import { ServerContext } from "Context";
import { GlobalFilter } from "Components/tableFilters";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    SubRow,
    TableContainer,
    StyledTable,
    tableHeaders,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";
import LocalizedStrings from "react-localization";
import { clanPositions } from "Data/localizations";

// const backend = process.env.REACT_APP_BACKEND;

const strings = new LocalizedStrings({
    en: {
        clanRole: "Role",
        joined: "Joined", // when user joined clan
        days60: "60D {0}", // {0} can be Battles, Average Tier, Winrate, etc
    },
});

export default function ClanStatsTable({ data }) {
    // const { server } = useContext(ServerContext);

    const columns = React.useMemo(
        () => [
            {
                Cell: ({ row: { original }, value }) => <Link to={original.url}> {value}</Link>,
                Header: tableHeaders.username,
                accessor: "account_name",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => clanPositions[value],
                Header: strings.clanRole,
                accessor: "role",
                disableFilters: true,
            },
            {
                Header: strings.joined,
                accessor: "joined_at",
                disableFilters: true,
            },
            {
                Header: "60D Battles",
                accessor: "recentBattles",
                disableFilters: true,
            },
            {
                Header: "60D Tier",
                accessor: "recentAvgtier",
                disableFilters: true,
            },
            {
                Header: "60D WN8",
                accessor: "recentWN8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => (value === "-" ? value : `${value}%`),
                Header: "60D Winrate",
                accessor: "recentWinrate",
                disableFilters: true,
            },
            {
                Header: "Battles",
                accessor: "overallBattles",
                disableFilters: true,
            },
            {
                Header: "WN8",
                accessor: "overallWN8",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => (value === "-" ? value : `${value}%`),
                Header: "Winrate",
                accessor: "overallWinrate",
                disableFilters: true,
            },
            {
                Cell: ({ value }) => (value === 0 ? `Today` : `${value} Days Ago`),
                Header: "Last Game",
                accessor: "last_played",
                disableFilters: true,
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
        rows,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: [
                    {
                        id: "recentWN8",
                        desc: true,
                    },
                ],
            },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded
    );

    // function SubRows({ data }) {
    //     if (data) {
    //         return (
    //             <div
    //                 style={{
    //                     backgroundColor: "rgba(40, 40, 70, 0.5)",
    //                     marginLeft: "-0.5rem",
    //                 }}
    //             ></div>
    //         );
    //     } else {
    //         return <div style={{ padding: "0.3rem" }}>Loading...</div>;
    //     }
    // }

    // function SubRowAsync({ row }) {
    //     const [data, setData] = useState();
    //     useEffect(() => {
    //         async function get() {
    //             fetch(`${backend}/api/moetank/${server}/${row.original.id}`)
    //                 .then((res) => res.json())
    //                 .then((res) => setData(res));
    //         }

    //         get();
    //     }, [row.original.id]);

    //     return <SubRows data={data} />;
    // }

    // const renderRowSubComponent = useCallback(
    //     ({ row, rowProps, visibleColumns }) => (
    //         <SubRowAsync row={row} rowProps={rowProps} visibleColumns={visibleColumns} />
    //     ),
    //     []
    // );

    return (
        <>
            <FiltersContainer>
                <div style={{ marginBottom: "-10px" }}>
                    <GlobalFilter
                        defaultType={"players"}
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
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i}>
                                    <tr {...row.getToggleRowExpandedProps({})}>
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
                                    {row.isExpanded ? (
                                        <SubRow>
                                            fsd
                                            {/* <td colSpan={visibleColumns.length}>{renderRowSubComponent({ row })}</td> */}
                                        </SubRow>
                                    ) : null}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </TableContainer>
        </>
    );
}
