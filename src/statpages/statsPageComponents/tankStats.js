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

export default function OverallTankStats(props) {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: '#AAF',
            display: 'none'
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
        name: 'Icon',
        label: ' ',
        options: {
            filter: false,
        },
      },
      { name: 'Vehicle', options: { filter: false } },
      { name: 'Nation', options: { filter: true } },
      { name: 'Tier', options: { filter: true } },
      { name: 'Class', options: { filter: true } },
      { name: 'Battles', options: { filter: false } },
      { 
        name: 'Winrate', 
        options: {  
            filter: false,
            setCellProps: (value) => {
                return {
                    style: { color: 'white', backgroundColor: WRcolor(value.slice(0, -1))},
                };
            },
            sortCompare: (order) => {
              return (obj1, obj2) => {
                console.log(order);
                let val1 = parseInt(obj1.data.slice(0, -1), 10);
                let val2 = parseInt(obj2.data.slice(0, -1), 10);
                return (val1 - val2) * (order === 'asc' ? 1 : -1);
              };
            }
        } 
      },
      { 
        name: 'WN8', 
        options: { 
            filter: false,
            setCellProps: (value) => {
                return {
                    style: { color: 'white', backgroundColor: WN8color(value)},
                };
              },
        } 
      },
      { name: 'DPG', options: { filter: false } },
      { name: 'KPG', options: { filter: false } },
      { name: 'DMG Ratio', options: { filter: false } },
      { name: 'K/D', options: { filter: false } },
      { name: 'XP', options: { filter: false } },
      { 
        name: 'Hit Ratio', 
        options: { 
          filter: false,
          sortCompare: (order) => {
            return (obj1, obj2) => {
              console.log(order);
              let val1 = parseInt(obj1.data.slice(0, -1), 10);
              let val2 = parseInt(obj2.data.slice(0, -1), 10);
              return (val1 - val2) * (order === 'asc' ? 1 : -1);
            };
          }
        } 
      },
      { name: 'Spots', options: { filter: false } },
      { name: 'Armor Eff', options: { filter: false } },
      { name: 'MoE', options: { filter: true } },
    ];

    const options = {
      sortDescFirst: true,
      filter: true,
      filterType: 'dropdown',
      fixedHeader: false,
      fixedSelectColumn: false,
      rowHover: true,
      selectableRows: 'none',
      rowsPerPage: 15,
      rowsPerPageOptions: [10, 15, 25, 50, 100],
      sortOrder: {
        name: 'Battles',
        direction: 'desc'
      },
      print: false,
      viewColumns: false,
      setRowProps: (row, dataIndex, rowIndex) => {

        return {
            style: {backgroundColor: ((rowIndex % 2) === 0 ? 'rgb(242, 243, 247)' : 'white')}
        };
      },

      setTableProps: () => {
        return {
          size: 'small',
        };
      },
    };

    return (
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title={''} data={props.overallStats} columns={columns} options={options}/>
      </MuiThemeProvider>
    );
}

