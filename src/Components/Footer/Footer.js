import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import RestoreIcon from '@mui/icons-material/Restore';


 const Footer= () =>{
   return (
    <BottomNavigation sx={{ width: 750 }}style={{borderTop:"1px solid #e3dada"}}>
   
        <BottomNavigationAction  icon={<AccessTimeIcon  style={{marginLeft:-519}} />} />
    <span style={{marginLeft:-341,padding:14}}>confirm the departure or arrival time of your flightwith your airline</span>
    </BottomNavigation>
  );
}

export default Footer;
