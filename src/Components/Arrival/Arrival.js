import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import ArrivalData from "./ArrivalData.json";




const ArrivalFligtsData = ({data}) => {
  
  return (<>

    <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Airline</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Flight</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Cities</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Arrival Time</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Status</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !data.length
                ? <div style={{marginLeft:9,fontSize:20,fontWeight:"bold"}}>No Data Found.</div>:data.map((arrival,id) => {

            return (
              <TableRow 
              key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {arrival.Carrier}
                </TableCell>
                <TableCell align="right">{arrival.Flight}</TableCell>
                <TableCell align="right">{arrival.Cities}</TableCell>
                <TableCell align="right">{arrival.SchedTime}</TableCell>
                <TableCell align="right">{arrival.Status}</TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
};

export default ArrivalFligtsData;
