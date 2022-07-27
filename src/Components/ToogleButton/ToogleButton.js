import React, { useState } from "react";
import { ToggleButton } from "@mui/material";
import ArrivalFligtsData from "../Arrival/Arrival";
import Departure from "../Departures/Departure";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ToogleButton = ({data}) => {
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
        marginLeft:14
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
        }}
      >
        view all flights
        <ArrowForwardIcon style={{ fontSize: "Small" }} />
      </span>
      <p style={{fontSize:8,marginLeft:12}}>updated july21,2022 at 11:00 pm </p>

      {show ? <ArrivalFligtsData data={data}/> : <Departure />}
    </div>
  );
};

export default ToogleButton;
