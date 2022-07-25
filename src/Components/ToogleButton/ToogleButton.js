import React, { useState } from "react";
import { ToggleButton } from "@mui/material";
import ArrivalFligtsData from "../Arrival/Arrival";
import Departure from "../Departures/Departure";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ToogleButton = () => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ marginTop: 100, background: "white" }}>
      <ToggleButton
        onClick={() => setShow(true)}
        style={{
          backgroundColor: "#a0a0f6",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Arrival
        <FlightLandIcon />
      </ToggleButton>
      <ToggleButton onClick={() => setShow(false)}
      style={{
        backgroundColor: "#a0a0f6",
        color: "black",
        fontWeight: "bold",
      }}>
        Departure
        <FlightTakeoffIcon />
      </ToggleButton>
      <span
        style={{
          float: "right",
          fontWeight: "bolder",
          paddingTop: 24,
          fontSize: 11,
        }}
      >
        view all flights
        <ArrowForwardIcon style={{ fontSize: "Small" }} />
      </span>

      {show ? <ArrivalFligtsData /> : <Departure />}
    </div>
  );
};

export default ToogleButton;
