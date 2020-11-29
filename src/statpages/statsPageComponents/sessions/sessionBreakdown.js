import React from 'react';
import { Link } from 'react-router-dom';
import { useTable, useSortBy, usePagination, useExpanded } from 'react-table'
import styled from 'styled-components'
import WN8c from '../../../functions/WN8color';
import WRc from '../../../functions/WRcolor';
import { Icon } from 'react-icons-kit'
import { arrowDown } from 'react-icons-kit/feather/arrowDown';
import { arrowUp } from 'react-icons-kit/feather/arrowUp';
import { ThemeContext } from '../../../style/theme.js';

function setMid(string) {
    return <div style={{textAlign: 'center'}}>{string}</div>
}

function WN8Style(wn8) {
    return { background: WN8c(wn8), color: 'white', padding: '8px 4px', margin: '-8px -8px', textAlign: 'center' }
}

function WRStyle(wr) {
    return { background: WRc(wr), color: 'white', padding: '8px 4px', margin: '-8px -8px', textAlign: 'center' }
}

export default function SessionBreakdown(props) {
    const {theme} = React.useContext(ThemeContext);

    const Styles = styled.div`
    table {
        border-spacing: 0;
        width: 100%;
        font-size: 0.8rem;
        margin: -0.3rem;
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
            border-bottom: solid 1px ${theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(200, 200, 200)'};
            font-weight: 500;
        }
        td {
            margin: 0rem;
            padding: 0.1rem 0.5rem;
            :last-child {
                border-right: 0;
            }
        }
    }

    .pagination {
        padding: 0.7rem;
        font-size: 0.8rem;
        background-color: ${theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)'};
        color: ${theme === 'dark' ? 'rgb(220, 220, 220)' : 'rgb(80, 80, 80)'};
        margin-bottom: 1rem;
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
    `
    const data = props.data;
    
    const columns = React.useMemo(
        () => [
            { Header: '', accessor: 'img' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Nation', accessor: 'nation' },
            { Header: 'Tier', accessor: 'tier' },
            { Header: 'Class', accessor: 'class' },
            { Header: 'Games', accessor: 'battles' },
            { Cell: ({ value }) => { return (<div style={WN8Style(value)}>{value}</div>) },
                Header: 'WN8', accessor: 'wn8' },
            { Cell: ({ value }) => { return (<div style={WRStyle(value)}>{value + "%"}</div>) },
                Header: 'Winrate', accessor: 'winrate' },
            { Header: 'DPG', accessor: 'dpg' },
            { Header: 'KPG', accessor: 'kpg' },
            { Header: 'DR', accessor: 'dmgRatio' },
            { Header: 'KDR', accessor: 'kd' },
            { Header: 'Survival%', accessor: 'survived' },
            { Header: 'Spots', accessor: 'spots' },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
    } = useTable(
        { 
            columns, 
            data,
            hiddenColumns: ['prem'],
            sortBy: [
              {
                  id: 'tier',
                  desc: true
              },
              {
                  id: 'dpg',
                  desc: true
              }
          ] 
        },
        useSortBy, useExpanded, usePagination
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
                        <span style={{textAlign: 'center'}}>
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
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Styles>
    );
}

