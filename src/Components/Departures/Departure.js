
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FlightLandIcon from '@mui/icons-material/FlightLand';
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
          
            <TableRow>
              
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Departure
