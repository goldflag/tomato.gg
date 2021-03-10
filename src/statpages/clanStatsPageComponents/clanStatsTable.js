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
import { FiltersContainer, SubRow, TableContainer, StyledTable, tableHeaders } from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";
import LocalizedStrings from "react-localization";
import { Capital, clanPositions, commonStrings } from "Data/localizations";

// const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        clanRole: "Role",
        joined: "Joined",
        lastGame: "Last Game",
        today: "Today",
        yesterday: "Yesterday",
        daysAgo: "{0} Days Ago",
    },
    cs: {
        clanRole: "Hodnost",
        joined: "Vstoupil", // when user joined clan??? This is useless first one is better
        lastGame: "Poslední bitva",
        today: "Dnes",
        yesterday: "Včera",
        daysAgo: "Před {0} dny",
    },
    de: {
        clanRole: "Rang",
        joined: "Beigetreten",
        lastGame: "Letztes Gefecht",
        today: "Heute",
        yesterday: "Gestern",
        daysAgo: "vor {0} Tagen",
    },
    es: {
        clanRole: "Papel",
        joined: "Ingreso",
        lastGame: "Ultima Partida",
        today: "Hoy",
        yesterday: "Ayer",
        daysAgo: "Hace {0} Días",
    },
    fr: {
        clanRole: "Grade",
        joined: "Rejoint",
        lastGame: "Dernière Partie",
        today: "Aujourd'hui",
        yesterday: "Hier",
        daysAgo: "Il y a {0} Jours",
    },
    pl: {
        clanRole: "Rola",
        joined: "Dołączył",
        lastGame: "Ostatnia bitwa",
        today: "Dzisiaj",
        yesterday: "Wczoraj",
        daysAgo: "{0} dni temu",
    },
    ru: {
        clanRole: "Позиция",
        joined: "Присоединился",
        lastGame: "Последняя игра",
        today: "Сегодня",
        yesterday: "Вчера",
        daysAgo: "{0} Дней назад",
    },
    tr: {
        clanRole: "Rütbe",
        joined: "Katıldı",
        lastGame: "Son Savaş",
        today: "Bugün",
        yesterday: "Dün",
        daysAgo: "{0} Gün önce",
    },
    zh: {
        clanRole: "職位",
        joined: "已加入",
        lastGame: "上一場戰鬥",
        today: "今日",
        yesterday: "昨日",
        daysAgo: "{0} 天前",
    },
});

const DateCell = ({ value }) => {
    const date = new Date(value * 1000);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(navigator.languages[0], dateOptions);
};

export default function ClanStatsTable({ data }) {
    // const { server } = useContext(ServerContext);

    const columns = React.useMemo(
        () => [
            {
                Header: Capital(commonStrings.player),
                columns: [
                    {
                        Cell: ({ row: { original }, value }) => <Link to={original.url}> {value}</Link>,
                        Header: tableHeaders.username,
                        accessor: "account_name",
                        borderLeft: true,
                    },
                    {
                        Cell: ({ value }) => clanPositions[value],
                        Header: strings.clanRole,
                        accessor: "role",
                    },
                    {
                        Cell: DateCell,
                        Header: strings.joined,
                        accessor: "joined_at",
                    },
                ],
                borderLeft: true,
            },
            {
                Header: Capital(formatString(commonStrings.days, 60)),
                columns: [
                    {
                        Header: Capital(commonStrings.battles),
                        accessor: "recentBattles",
                        borderLeft: true,
                    },
                    {
                        Header: Capital(commonStrings.tier),
                        accessor: "recentAvgtier",
                    },
                    {
                        Header: commonStrings.wn8,
                        accessor: "recentWN8",
                    },
                    {
                        Cell: ({ value }) => (value === "-" ? value : `${value}%`),
                        Header: Capital(commonStrings.longWR),
                        accessor: "recentWinrate",
                    },
                ],
                borderLeft: true,
            },
            {
                Header: "Overall",
                columns: [
                    {
                        Header: Capital(commonStrings.battles),
                        accessor: "overallBattles",
                        borderLeft: true,
                    },
                    {
                        Header: commonStrings.wn8,
                        accessor: "overallWN8",
                    },
                    {
                        Cell: ({ value }) => (value === "-" ? value : `${value}%`),
                        Header: Capital(commonStrings.longWR),
                        accessor: "overallWinrate",
                    },
                ],
                borderLeft: true,
            },
            {
                Cell: ({ value }) =>
                    value === 0
                        ? strings.today
                        : value === 1
                        ? strings.yesterday
                        : Capital(formatString(strings.daysAgo, value)),
                Header: strings.lastGame,
                accessor: "last_played",
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
            </FiltersContainer>
            <TableContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(({ columns, ...column }) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        {...column.getHeaderProps({
                                            style: {
                                                cursor: "pointer",
                                                backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                                borderLeft: column.borderLeft ? "solid #CF004C 3px" : null,
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
