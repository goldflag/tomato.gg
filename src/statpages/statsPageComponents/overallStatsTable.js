import React from 'react';
import Paper from '@material-ui/core/Paper';

import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import WN8color from '../../functions/WN8color';

export default function OverallStatsTable(props) {

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: 'blue',
          },
          paper: {
            boxShadow: 'none',

          },
        },
        MuiToolbar: {
          root: {
            backgroundColor: 'white',
          },
        },
        MuiTableCell: {
          head: {
            backgroundColor: 'rgb(219, 213, 224)',
            // color: 'rgb(256, 256, 256)',

          },
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: 'white',

          },
        },
        MuiTableFooter: {
          root: {
            '& .MuiToolbar-root': {
              backgroundColor: 'white',
            },
          },
        },
      },
    });

    const columns = [
        {
          label: ' ',
          name: 'name',
            options: {
              filter: false,
                setCellProps: (row, value) => {
                  return {
                      style: { backgroundColor: 'rgb(246, 246, 252)'},
                  };
                },
            },
        },
        {
            name: 'Overall',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '24 Hours',
            options: {
                filter: true,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '3 Days',
            options: {
                filter: true,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '7 Days',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '30 Days',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        // {
        //     name: '100 Games',
        //     options: {
        //         filter: false,
        //         setCellProps: (rowIndex, cellValue) => {
        //             return {
        //                 style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
        //             };
        //         },
        //     }
        // },
        {
            name: '100 Games',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '1000 Games',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px 8px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
    ];

    const options = {
      fixedHeader: false,
      searchable: false,
      fixedSelectColumn: false,
      pagination: false,
      rowHover: true,
      selectableRows: 'none',
      print: false,
      download: false,
      filter: false,
      search: false,
      sort: false,
      viewColumns: false,

      setTableProps: () => {
        return {
        //   padding: this.state.denseTable ? 'none' : 'default',
        //   size: this.state.denseTable ? 'small' : 'medium',
          size: 'small',
        };
      },
    };

    return (
      <MuiThemeProvider theme={getMuiTheme()}>
        <Paper elevation={2}>
          <MUIDataTable boxShadow={'none'} title={''} data={props.data} columns={columns} options={options}/>
        </Paper>
      </MuiThemeProvider>
    );
}
