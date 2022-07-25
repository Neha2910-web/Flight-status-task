import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
 

  return (
    <BottomNavigation sx={{ width: 720 }}style={{borderTop:"1px solid #e3dada"}}>
   
        <BottomNavigationAction  icon={<RestoreIcon  style={{marginLeft:-350}} />} />
    <span style={{marginLeft:-250,padding:14}}>confirm the departure or arrival time of your flightwith your airline</span>
    </BottomNavigation>
  );
}
