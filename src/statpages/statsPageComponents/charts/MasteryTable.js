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

export default function MasteryTable(props) {

  const rows = [
    { 'name': 'Ace', 'Mastery': 0},
    { 'name': '1st Class', 'Mastery': 0 },
    { 'name': '2nd Class', 'Mastery': 0 },
    { 'name': '3rd Class', 'Mastery': 0 },
    { 'name': 'None', 'Mastery': 0 }
  ];

  for (let i = 0; i < 10; ++i) {
    rows[4].Mastery += props.data[i]['None'];
    rows[3].Mastery += props.data[i]['3rd'];
    rows[2].Mastery += props.data[i]['2nd'];
    rows[1].Mastery += props.data[i]['1st'];
    rows[0].Mastery += props.data[i]['Ace'];
  } 

  const numTanks = rows[0].Mastery + rows[1].Mastery + rows[2].Mastery + rows[3].Mastery + rows[4].Mastery;
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
              <TableCell align="right">{row.Mastery}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}