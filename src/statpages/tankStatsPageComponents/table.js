import React, {useState, useEffect} from "react";
import clonedeep from 'lodash.clonedeep';

import MUIDataTable, {ExpandButton} from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PercentileGraph from './percentileGraph';
import "../../css/tankstats.css";
import NATankstats from '../../data/NATankstats.json';
import DPGPercentiles from '../../data/DPGPercentiles.json';
import WN8Percentiles from '../../data/WN8Percentiles.json';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';

export default function Table(props) {

  const [serverStats, setServerStats] = useState('');
  useEffect(() => {
    const data = clonedeep(NATankstats);
    data.map((row) => {
      // row[0] = <img src={`${process.env.PUBLIC_URL}/tankIcons/${row[0]}.png`} alt={row[0]}/>;
      // row[0] = <img src={tankImports[IDtoIndex[row[0]]]} alt={row[0]}/>;
      row[0] = <img src={require(`../../assets/tankIcons/${row[0]}.png`)} alt={row[0]}/>;

    });
    setServerStats(data);
  }, []);


    const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: 'rgb(220, 220, 230)',
          },
          paper: {
            boxShadow: 'none',
          },
        },
        MuiToolbar: {
          root: {
            // backgroundColor: 'rgb(220, 220, 230)',
          },
        },
        MuiTableCell: {
          head: {
            backgroundColor: 'rgb(220, 220, 230)',
          },
        },
        MUIDataTableSelectCell: {
          headerCell: {
            backgroundColor: 'rgb(220, 220, 230)',
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
      { name: "", options: { filter: true, } },
      { name: "Vehicle", options: { filter: true, } },
      { name: "Nation", options: { filter: true, } },
      { name: "Tier", options: { filter: true, } },
      { name: "Class", options: { filter: true, } },
      { name: "Owned", options: { filter: true, } },
      { name: "Avg Battles", options: { filter: true, } },
      { name: "Winrate", 
        options: { 
          filter: true, 
          setCellProps: (value) => {
            return {
              style: { color: 'white', backgroundColor: WRcolor(value.slice(0, -1))},
            };
          },
        } 
      },
      { name: "WN8", options: { 
        filter: true, 
        setCellProps: (value) => {
          return {
              style: { color: 'white', backgroundColor: WN8color(value)},
            };
          },
        } 
      },
      { name: "DPG", options: { filter: true, } },
      { name: "KPG", options: { filter: true, } },
      { name: "DMG Ratio", options: { filter: true, } },
      { name: "K/D", options: { filter: true, } },
      { name: "XP", options: { filter: true, } },
      { name: "Hits", options: { filter: true, } },
      { name: "Spots", options: { filter: true, } },
      { name: "Armor \n Eff", options: { filter: true, } },
      { name: "3MOE%", options: { filter: true, } },
      { name: "ACE%", options: { filter: true, } },

    ];


    // data.map((row) => {
    //   row[0] = <img src={tankImports[IDtoIndex[row[0]]]} alt={row[0]}/>;
    // });

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      selectableRows: 'none',
      fixedHeader: false,
      rowsPerPage: 50,
      rowsPerPageOptions: [15, 25, 50, 100, 200, 500],
      sortOrder: {
        name: 'Tier',
        direction: 'desc'
      },
      print: false,
      viewColumns: false,
      setTableProps: () => {
        return {
          size: 'small',
          padding: '0'
        };
      },
    //   isRowExpandable: (dataIndex, expandedRows) => {
    //     if (dataIndex === 3 || dataIndex === 4) return false;

    //     // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
    //     if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
    //     return true;
    //   },
    //   rowsExpanded: [0, 1],
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        console.log(rowData[1]);
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <div className='row'>  
                <div className='grid'>
                  <div>
                    <div style={{fontSize: '1rem', padding: '20px 20px 0px 20px'}}>DPG Percentiles</div>
                    <PercentileGraph data={DPGPercentiles[rowData[1]]} type='Average Damage' smallType='DPG' color="rgb(84, 140, 196)"/>
                  </div>
                  <div>
                    <div style={{fontSize: '1rem', padding: '20px 20px 0px 20px'}}>WN8 Percentiles</div>
                    <PercentileGraph data={WN8Percentiles[rowData[1]]} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>
                  </div>
                </div>
              </div>
            </TableCell>
          </TableRow>
        );
      },
    //   onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
    };

    const theme = createMuiTheme({
      overrides: {
        MUIDataTableSelectCell: {
          expandDisabled: {
            // Soft hide the button.
            visibility: 'hidden',
          },
        },
      },
    });

    const components = {
      ExpandButton: function(props) {
        if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
        return <ExpandButton {...props} />;
      }
    };


    let statTable = <></>
    if (serverStats) {
      statTable =       
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title={"NA Server Tank Stats"} data={serverStats} columns={columns} options={options} components={components} />
      </MuiThemeProvider>
    }
    return (
      // <MuiThemeProvider theme={getMuiTheme()}>
      //   <MUIDataTable title={"NA Server Tank Stats"} data={serverStats} columns={columns} options={options} components={components} />
      // </MuiThemeProvider>
      <>
      {statTable}
      </>
    );
}