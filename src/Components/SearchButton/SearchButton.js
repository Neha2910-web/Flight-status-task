import React from 'react'
import './SearchButton.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = () => {
       
       
  return (
    
        <button className='button' >
        <SearchIcon style={{paddingTop:5}}/>
        <span style={{paddingTop:10 ,fontSize:9}}>
Search arrivals by flight number , Airline or cities 
        </span>
<div className='searchbutton'>
        <span>Search Flight</span>
 
</div>
        </button>
   
  )
}

export default SearchButton


