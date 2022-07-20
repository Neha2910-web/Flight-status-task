
      import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FlightLandIcon from '@mui/icons-material/FlightLand';



const  ArrivalFligtsTable=() =>{

 

  const fetchArrivalFlightHandler = ()=>{
    
   fetch('https://yxy.terminalsystems.com/export/arrivals_new1.xml')
   .then((response)=>{
return response.json();
console.log(response)
   }).then(data=>{
    
    console.log();
   })
  }
    
   
     
     

    

  


  return (
    <TableContainer component={Paper} style={{marginTop:100}} >
        <button onClick={fetchArrivalFlightHandler} >
            <span>ARRIVAL</span>
            <FlightLandIcon/>
        </button>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Airline</strong></TableCell>
            <TableCell align="left"><strong>Flight</strong></TableCell>
            <TableCell align="left"><strong>Cities</strong></TableCell>
            <TableCell align="left"><strong>Arrival Time</strong></TableCell>
            <TableCell align="left"><strong>Status</strong></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              {/* <TableCell component="th" scope="row">
                {row.Airline}
              </TableCell>
              <TableCell align="right">{row.Flight}</TableCell>
              <TableCell align="right">{row.Cities}</TableCell>
              <TableCell align="right">{row.ArrivalTime}</TableCell>
              <TableCell align="right">{row.Status}</TableCell> */}
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

    
export default ArrivalFligtsTable;
