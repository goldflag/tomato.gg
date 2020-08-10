// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import WN8color from '../../functions/WN8color';
// import WRcolor from '../../functions/WRcolor';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     // backgroundColor: theme.palette.common.black,
//     // color: theme.palette.common.white,
//     padding: '12px 10px 12px 10px',

//   },
//   body: {
//     fontSize: 14,
//     padding: '10px 10px 10px 10px',
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: 'rgb(242, 243, 247)'
//     },
//   },
// }))(TableRow);

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// const rows = [
//     {'stat': 'Battles', 'overall' : '19021', '1day' : '0', '7day' : '60', '30day' : '310', '60day': '664', '100': '98', '500': '506', '1000': '999'},
//     {'stat': 'Winrate', 'overall' : '54.75%', '1day' : '-', '7day' : '65.6%', '30day' : '63.5%', '60day': '62.06%', '100': '64.4%', '500': '63.4%', '1000': '61.52%'},
//     {'stat': 'Damage', 'overall' : '1650', '1day' : '-', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Frags', 'overall' : '1.15', '1day' : '-', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Damage Ratio', 'overall' : '1.32', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'K/D Ratio', 'overall' : '1.41', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Survival', 'overall' : '32%', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Spots', 'overall' : '1.2', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Base Defense', 'overall' : '0.37', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Base Capture', 'overall' : '0.8', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Trees Fallen', 'overall' : '35434', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'Exp', 'overall' : '1', '1day' : '1', '7day' : '1', '30day' : '1', '60day': '1', '100': '1', '500': '1', '1000': '1'},
//     {'stat': 'WN8', 'overall' : '2401', '1day' : '0', '7day' : '4186', '30day' : '3719', '60day': '3429', '100': '3874', '500': '3511', '1000': '3529'},
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// function WN8style(rowName, value) {

//     if (rowName != 'WN8') {
//         return;
//     }

//     const WN8cel = {
//         backgroundColor: WN8color(value),
//         color: 'white'
//     }
//     return WN8cel;
// }

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell></StyledTableCell>
//             <StyledTableCell align="left">Overall</StyledTableCell>
//             <StyledTableCell align="left">24 Hours</StyledTableCell>
//             <StyledTableCell align="left">7 Days</StyledTableCell>
//             <StyledTableCell align="left">30 Days</StyledTableCell>
//             <StyledTableCell align="left">60 Days</StyledTableCell>
//             <StyledTableCell align="left">100 Battles</StyledTableCell>
//             <StyledTableCell align="left">500 Battles</StyledTableCell>
//             <StyledTableCell align="left">1000 Battles</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row"> {row.stat} </StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row.overall)}> {row.overall}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['1day'])}>{row['1day']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['7day'])}>{row['7day']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['30day'])}>{row['30day']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['60day'])}>{row['60day']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['100'])}>{row['100']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['500'])}>{row['500']}</StyledTableCell>
//               <StyledTableCell align="left" style= {WN8style(row.stat, row['1000'])}>{row['1000']}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }