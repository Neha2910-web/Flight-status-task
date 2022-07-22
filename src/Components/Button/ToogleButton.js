import React from 'react'
import ArrivalFligtsTable from '../Arrival/Arrival'
import FlightLandIcon from '@mui/icons-material/FlightLand';
const ToogleButton = () => {
  return (
    <div>
      <button  >
        <span>ARRIVAL</span>
        <FlightLandIcon />
      </button>
      <ArrivalFligtsTable/>
    </div>
  )
}

export default ToogleButton
