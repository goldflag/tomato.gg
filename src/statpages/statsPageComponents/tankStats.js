import React, {useState, useEffect} from 'react';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider, withStyles, rgbToHex } from '@material-ui/core/styles';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';
import nationVal from '../../data/nationVal';
import classVal from '../../data/classVal';

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

const masteryConv = {4: 4, 3: 3, 2: 2, 1: 1, undefined: 0, 0: 0};

export default function OverallTankStats(props) {

  const [finaldata, setFinaldata] = useState('');

  // useEffect(() => {
  //   let data = props.overallStats;
  //   data.map((row) => {
  //     row[2] = <img src={require(`../../assets/flagIcons/${row[2]}.svg`)} style={{display: 'block', maxheight: '20px', maxWidth: '40px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[2]}/>;
  //     row[4] = <img src={require(`../../assets/classIcons/${row[4]}.png`)} style={{display: 'block', maxheight: '20px', maxWidth: '20px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[1]}/>;
  //   });
  //   setFinaldata(data);
  // }, []);

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
            backgroundColor: 'rgb(220, 220, 230)',
            padding: '5px 5px 5px 12px',
          },
          root: {
            padding: '3px 5px 3px 12px',
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
      { name: 'Nation', 
        options: { 
          filter: true,
          sortCompare: (order) => {
            return (obj1, obj2) => {
              let val1 = obj1.data.props.alt;
              let val2 = obj2.data.props.alt;
              return (nationVal[val1] - nationVal[val2]) * (order === 'asc' ? 1 : -1);          
            };
          }
        } 
      },      
      { name: 'Tier', options: { filter: true } },
      { name: 'Class', 
        options: { 
        filter: true,
          sortCompare: (order) => {
            return (obj1, obj2) => {
              let val1 = obj1.data.props.alt;
              let val2 = obj2.data.props.alt;
              return (classVal[val1] - classVal[val2]) * (order === 'asc' ? 1 : -1);          
            };
          }
        } 
      },      
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
      { name: 'Mastery', 
        options: { 
          filter: true,
          sortCompare: (order) => {
            return (obj1, obj2) => {
              console.log(obj1);
              let val1 = obj1.data.props.alt;
              console.log(val1);

              let val2 = obj1.data.props.alt;
              return (masteryConv[val1] - masteryConv[val2]) * (order === 'asc' ? 1 : -1);
            };
          }
        } 
      },
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
        };
      },
    };

    let table = <></>;
    if (true) {
      table = <>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable title={''} data={props.overallStats} columns={columns} options={options}/>
        </MuiThemeProvider>
      </>;
    }
    return (
      <>
      {table}
      </>
    );
}

