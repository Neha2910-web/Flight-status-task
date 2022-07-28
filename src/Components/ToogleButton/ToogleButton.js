import React, { useState } from "react";
import { ToggleButton } from "@mui/material";
import ArrivalFligtsData from "../Arrival/Arrival";
import Departure from "../Departures/Departure";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const ToogleButton = ({data,DepData}) => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ marginTop: 100, background: "white" }}>
      <ToggleButton
        onClick={() => setShow(true)}
        style={{
          padding: 4,
        marginLeft:14,
          color: "#07c7e4",
          fontWeight: "bold",
          border:'none'
        }}
      >
        ARRIVALS
        <FlightLandIcon />
      </ToggleButton>
      <ToggleButton onClick={() => setShow(false)}
      style={{
        
        color: "#07c7e4",
        fontWeight: "bold",
        padding: 4,
        marginLeft:14,
        border:'none'
      }}>
        DEPARTURES
        <FlightTakeoffIcon />
      </ToggleButton>
      <span
        style={{
          float: "right",
          fontWeight: "bolder",
          paddingTop: 13,
          fontSize: 11,
          marginRight:21,
        }}
      >
        view all flights
        
      </span>
      <p style={{fontSize:8,marginLeft:12}}>updated july21,2022 at 11:00 pm </p>

      {show ? <ArrivalFligtsData data={data}/> : <Departure data={DepData}/>}
    </div>
  );
};

export default ToogleButton;
