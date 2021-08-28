import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DisplayTable = ({dataGiven}) => {
    
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: '#001555',
          color: theme.palette.common.white,
          position: 'sticky',

        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
     var rows = [];
    const createData = (date, MW_Prediction) => {
        return {date,MW_Prediction};
    }
    if (dataGiven) {
      dataGiven.map((value, index) => {
        rows.push(createData(value.date, value.MW_Prediction));
    })
    }
    const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
    const styledDiv = {width : '50%' , height : '100%',border:'2px solid black', borderRadius : '3px', marginTop : '10px'}  
    const classes = useStyles();

    return (
        <div style={styledDiv}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Predicted Energy (MW)</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.MW_Prediction}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>
    )
}

export default DisplayTable
