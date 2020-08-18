import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    elevation: 0,
    boxShadow: 'none',
  },
});

function createData(name, MOE) {
    return { name, MOE };
  }

export default function MOETable(props) {
  const rows = [
    { 'name': '3 Marks', 'MOE': 0},
    { 'name': '2 Marks', 'MOE': 0 },
    { 'name': '1 Marks', 'MOE': 0 },
    { 'name': '0 Marks', 'MOE': 0 }
  ];

  for (let i = 0; i < 6; ++i) {
    rows[3].MOE += props.data[i][0];
    rows[2].MOE += props.data[i][1];
    rows[1].MOE += props.data[i][2];
    rows[0].MOE += props.data[i][3];
  } 

  const numTanks = rows[0].MOE + rows[1].MOE + rows[2].MOE + rows[3].MOE;
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Vehicles</TableCell>
            <TableCell align="right">{numTanks}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.MOE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}