
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const createDepartureData=(Airline,Flight,Cities,DepartureTime,Status)=>
 {
  return { Airline,Flight,Cities,DepartureTime,Status };
}

const DepartureData = [
  createDepartureData('Air North','4N309','Old Crow','06:00 AM','On Time'),
  createDepartureData('Air Canada','AC276','Vancouver','06:00 AM','On Time'),
  createDepartureData('Air North','4N364','Inuvik','11:40 PM','Arrived'),
  createDepartureData('Air North','WS507','Calgary','11:48 PM','Arrived'),
  createDepartureData('Air Canada','AC8099','Vancouver','6:38 PM','Arrived'),
  
];




const Departure = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Airline</TableCell>
            <TableCell align="left">Flights</TableCell>
            <TableCell align="left">Cities</TableCell>
            <TableCell align="left">Departure Time</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
              key={row.Airline}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Airline}
              </TableCell>
              <TableCell align="right">{row.Flight}</TableCell>
              <TableCell align="right">{row.Cities}</TableCell>
              <TableCell align="right">{row.ArrivalTime}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
            </TableRow>
          ))} 
              
          
           
        
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Departure
