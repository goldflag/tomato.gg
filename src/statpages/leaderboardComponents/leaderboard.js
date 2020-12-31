import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, usePagination } from 'react-table';
import styled from 'styled-components';
import WN8c from '../../functions/WN8color';
import WRc from '../../functions/WRcolor';
import { ThemeContext } from '../../style/theme.js';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { chevronLeft } from 'react-icons-kit/feather/chevronLeft';
import { chevronsRight } from 'react-icons-kit/feather/chevronsRight';
import { chevronsLeft } from 'react-icons-kit/feather/chevronsLeft';
import { arrowDown } from 'react-icons-kit/feather/arrowDown';
import { arrowUp } from 'react-icons-kit/feather/arrowUp';

export default function Leaderboard(props) {
    const { theme } = React.useContext(ThemeContext);

    const Styles = styled.div`
    table {
        border-spacing: 0;
        width: 100%;
        font-size: 0.8rem;
        tr {
            :last-child {
                td {
                    border-bottom: solid 1px ${theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(200, 200, 200)'};
                }
            }
            color: ${theme === 'dark' ? 'rgb(220, 220, 220)' : 'rgb(100, 100, 100)'};
            background-color: ${theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)'};
            :nth-child(even) {
                background-color: ${theme === 'dark' ? 'rgb(50, 50, 50)' : 'rgb(240, 240, 240)'};
            }
            :hover {
                background-color: ${theme === 'dark' ? 'rgb(30, 30, 30)' : 'rgb(220, 220, 230)'};
            }
        }
        th {
            text-align: left;
            padding: 10px;
            background-color: ${theme === 'dark' ? 'rgb(50, 50, 50)' : 'rgb(255, 255, 255)'};
            // color: black;
            border-bottom: solid 1px ${theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(200, 200, 200)'};
            font-weight: 500;
        }
        td {
            margin: 0;
            padding: 0.5rem;

            :last-child {
            border-right: 0;
            }
        }
    }

    .pagination {
        padding: 1rem;
        font-size: 0.8rem;
        background-color: ${theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)'};
        color: ${theme === 'dark' ? 'rgb(220, 220, 220)' : 'rgb(80, 80, 80)'};
    }

    .paginationButton {
        font-family: "Segoe UI";
        font-weight: 500;
        height: 2rem;
        width: 2rem;
        color: rgb(71, 99, 214);
        background: none;
        padding: 0rem;
        border-width: 0px;
    }
  
    .paginationButton:hover {
        background-color: rgb(100, 129, 234);
        color: white;
        border-radius: 50%;
    }
    `;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const rankColors = {
        1: <span style={{ color: 'gold', fontWeight: 600 }}>1</span>,
        2: <span style={{ color: 'silver', fontWeight: 600 }}>2</span>,
        3: <span style={{ color: 'orange', fontWeight: 600 }}>3</span>
    };

    async function fetchData() {
        const url = `https://tomatobackend-oswt3.ondigitalocean.app/api/abcd/leaderboards/${props.type}/1000`;
        // const url = `http://localhost:5000/api/abcd/leaderboards/${props.type}/1000`;
        const raw = await fetch(url);
        let res = await raw.json();

        const newData = [];
        for (let i = 0; i < res.length; ++i) {
            const link = `/stats/NA/${res[i].username}=${res[i].player_id}`;
            res[i].winrate = (res[i].winrate).toFixed(2);
            res[i].avgtier = (res[i].avgtier).toFixed(2);
            let entry = {
                'rank': res[i].rank,
                'username': <Link to={link}>{res[i].username}</Link>,
                'winrate': res[i].winrate,
                'wn8': res[i].wn8,
                'avgtier': res[i].avgtier,
                'battles': res[i].battles,
                'moecount': res[i].moecount,
                'moe10': res[i].moe10
            };
            if (res[i].rank <= 3) {
                entry.rank = rankColors[res[i].rank];
            }
            // entry[props.type] = res[i][props.type];
            // if (props.type === 'wn8') entry[props.type] = <div style={{padding: '8px', margin: '-8px -8px', color: 'white', backgroundColor: WN8c(res[i][props.type])}}>{res[i][props.type]}</div>;
            // if (props.type === 'winrate') entry[props.type] = <div style={{padding: '8px', margin: '-8px -8px', color: 'white', backgroundColor: WRc(res[i][props.type])}}>{res[i][props.type]}</div>;

            newData.push(entry);
        }
        setData(newData);
    }

    const colOptions = {
        battles: [
            { Header: '', accessor: 'rank' },
            { Header: 'Username', accessor: 'username' },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Battles'), accessor: 'battles'
            },
            {
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>); },
                Header: setMid('WN8'), accessor: 'wn8'
            },
            {
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + '%'}</div>); },
                Header: setMid('Winrate'), accessor: 'winrate'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Avg Tier'), accessor: 'avgtier'
            },

        ],
        wn8: [
            { Header: '', accessor: 'rank' },
            { Header: 'Username', accessor: 'username' },
            {
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>); },
                Header: setMid('WN8'), accessor: 'wn8'
            },
            {
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + '%'}</div>); },
                Header: setMid('Winrate'), accessor: 'winrate'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Avg Tier'), accessor: 'avgtier'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Battles'), accessor: 'battles'
            }
        ],
        winrate: [
            { Header: '', accessor: 'rank' },
            { Header: 'Username', accessor: 'username' },
            {
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + '%'}</div>); },
                Header: setMid('Winrate'), accessor: 'winrate'
            },
            {
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>); },
                Header: setMid('WN8'), accessor: 'wn8'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Avg Tier'), accessor: 'avgtier'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Battles'), accessor: 'battles'
            }
        ],
        moecount: [
            { Header: '', accessor: 'rank' },
            { Header: 'Username', accessor: 'username' },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('3 MoE'), accessor: 'moecount'
            },
            {
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>); },
                Header: setMid('WN8'), accessor: 'wn8'
            },
            {
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + '%'}</div>); },
                Header: setMid('Winrate'), accessor: 'winrate'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Avg Tier'), accessor: 'avgtier'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Battles'), accessor: 'battles'
            }
        ],
        moe10: [
            { Header: '', accessor: 'rank' },
            { Header: 'Username', accessor: 'username' },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('T10 3 MoE'), accessor: 'moe10'
            },
            {
                Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>); },
                Header: setMid('WN8'), accessor: 'wn8'
            },
            {
                Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + '%'}</div>); },
                Header: setMid('Winrate'), accessor: 'winrate'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Avg Tier'), accessor: 'avgtier'
            },
            {
                Cell: ({ value }) => { return setMid(value); },
                Header: setMid('Battles'), accessor: 'battles'
            }
        ],
    };
    function setMid(string) {
        return <div style={{ textAlign: 'center' }}>{string}</div>;
    }

    function WN8Style(wn8) {
        return { background: WN8c(wn8), color: 'white', padding: '8px', margin: '-8px -8px', textAlign: 'center' };
    }

    function WRStyle(wr) {
        return { background: WRc(wr), color: 'white', padding: '8px', margin: '-8px -8px', textAlign: 'center' };
    }

    const columns = React.useMemo(
        () => colOptions[props.type],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
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
            initialState: { pageIndex: 0, pageSize: 100 },
        },
        useSortBy, usePagination
    );

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span style={{ textAlign: 'center' }}>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? <Icon size={16} icon={arrowUp} />
                                                : <Icon size={16} icon={arrowDown} />
                                            : ''}
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
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button className={'paginationButton'} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <Icon size={24} icon={chevronsLeft} />
                </button>{' '}
                <button className={'paginationButton'} onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <Icon size={24} icon={chevronLeft} />
                </button>{' '}
                <button className={'paginationButton'} onClick={() => nextPage()} disabled={!canNextPage}>
                    <Icon size={24} icon={chevronRight} />
                </button>{' '}
                <button className={'paginationButton'} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <Icon size={24} icon={chevronsRight} />
                </button>{' '}
                {/* <span> */}
                    Page{' '}
                {pageIndex + 1} of {pageOptions.length}
                {' '}
                {/* </span> */}
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[50, 100, 250, 1000].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </Styles>
    );
}