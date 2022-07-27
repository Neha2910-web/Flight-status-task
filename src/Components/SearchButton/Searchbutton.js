import React,{useState} from "react";
import "./SearchButton.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = (props) => {
  // const[searchTearm,setSearchTearm]=useState('');
  // console.log(searchTearm);
  const filterValueChangedHandle=(event)=>{
props.filterValueSelected(event.target.value)
  }
  


  return (
  
   <div className="button">
     <SearchIcon style={{ paddingTop: 5 }}     />
      <input
        type="text"
        placeholder="Search arrivals by flight number,Airline or cities"
        style={{width: 289,
                padding: 6,
                border: "none"
            }}
    onChange= {filterValueChangedHandle}
      />
      <button className="searchbutton"   >
        Search Flight 
      </button>
    </div>
           
   );
          };
    

export default SearchButton;
