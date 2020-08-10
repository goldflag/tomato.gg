import React, {useState} from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider, withStyles, rgbToHex } from '@material-ui/core/styles';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';

const customStyles = theme => ({
  wn8row: {
    '& td': { backgroundColor: 'blue' },
  },
  GreyLine: {
    '& td': { backgroundColor: theme.palette.grey[100] },
  },
  NameCell: {
    fontWeight: 900,
    backgroundColor: theme.palette.grey[100],
  },
});

export default function OverallStatsTable(props) {

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: 'blue',
          },
          paper: {
            //boxShadow: 'none',
            elevation: '5'
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
                      style: { backgroundColor: 'rgb(241, 240, 242)'},
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
                        style: { color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
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
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '7 Days',
            options: {
                filter: true,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
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
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '60 Days',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '100 Games',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
        {
            name: '500 Games',
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: { padding: '2px', borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
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
                        style: { borderLeft:'1px solid rgb(220,220,220)', color: cellValue === 2 ? 'white' : null, backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null },
                    };
                },
            }
        },
    ];


    const data = props.data;
    // const data = [
    //     {'name': 'Battles', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Avg Tier', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'WN8', 'Overall': '2401', '24 Hours': '2304', '7 Days': '3242', '30 Days': '1234', '60 Days': '3523', '100 Games': '4123', '500 Games': '3874', '1000 Games': '3454'},
    //     {'name': 'Wins', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Losses', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Draws', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Damage', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Frags', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'K/D Ratio', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Damage Ratio', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Survived', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Detected', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Cap Points', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Def Points', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Experience', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    //     {'name': 'Trees Fallen', 'Overall': '', '24 Hours': '1', '7 Days': '', '30 Days': '', '60 Days': '', '100 Games': '', '500 Games': '', '1000 Games': ''},
    // ];

    const options = {
      fixedHeader: false,
      searchable: false,
      fixedSelectColumn: false,
      pagination: false,
      rowHover: true,
      selectableRows: false,
      print: false,
      download: false,
      filter: false,
      search: false,
      sort: false,
      print: false,
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
        <MUIDataTable title={'Stats'} data={data} columns={columns} options={options}/>
      </MuiThemeProvider>
    );
}
