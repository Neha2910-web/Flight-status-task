import React from 'react'
import './SearchButton.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = () => {
  return (
    
        <button className='button'>
        <SearchIcon />
        <span>
Search...
        </span>
<div className='searchbutton'>
Search
</div>
        </button>
   
  )
}

export default SearchButton


