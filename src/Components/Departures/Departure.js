
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DepartureData from "./DepartureData.json";

const DepartureFlightData = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell><strong>Airline</strong></TableCell>
            <TableCell align="right"> <strong>Flights</strong></TableCell>
            <TableCell align="right"><strong>Cities</strong></TableCell>
            <TableCell align="right"><strong>DepartureTime</strong></TableCell>
            <TableCell align="right"><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


       {data.map((departure) => (
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {departure.Carrier}
              </TableCell>
              <TableCell align="right">{departure.Flight}</TableCell>
              <TableCell align="right">{departure.Cities}</TableCell>
              <TableCell align="right">{departure.SchedTime}</TableCell>
              <TableCell align="right">{departure.Status}</TableCell>
            </TableRow>
          ))} 




        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DepartureFlightData;








