
import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrivalData from './ArrivalData.json'
import FlightLandIcon from '@mui/icons-material/FlightLand';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';



const ArrivalFligtsTable = () => {
 
  console.log(ArrivalData);


  return (

    <TableContainer component={Paper} style={{ marginTop: 100 }} >
      
    
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Airline</strong></TableCell>
            <TableCell align="right"><strong>Flight</strong></TableCell>
            <TableCell align="right"><strong>Cities</strong></TableCell>
            <TableCell align="right"><strong>Arrival Time</strong></TableCell>
            <TableCell align="right"><strong>Status</strong></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {/* {ArrivalData.map((Carrier,Flight,Cities,SchedTime,Status) => ( 
            <TableRow
              key={Carrier}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Carrier}
              </TableCell>
              <TableCell align="right">{Flight}</TableCell>
              <TableCell align="right">{Cities}</TableCell>
              <TableCell align="right">{SchedTime}</TableCell>
              <TableCell align="right">{Status}</TableCell>
            </TableRow> 
           ))}  */}

        </TableBody>
      </Table>

    </TableContainer>
  );
}


export default ArrivalFligtsTable;












