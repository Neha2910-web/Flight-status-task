import React,{useState} from "react";
import "./SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import ToogleButton from '../ToogleButton/ToogleButton';
import Footer from '../Footer/Footer';
const SearchPage = () => {
  const[searchTearm,setSearchTearm]=useState('');
  console.log(searchTearm);
  
  


  return (
  <div className="box">
             <h2>Find Your Flight</h2>
              <div className="button"  >
      <SearchIcon style={{ paddingTop: 5 }}     />
   
      <input
        type="text"
        placeholder="Search arrivals by flight number,Airline or cities"
        style={{width: 289,
                padding: 6,
                border: "none"
            }}
       onChange={(event)=>{setSearchTearm(event.target.value)}}
      />
      <button className="searchbutton" >
        Search Flight
      </button>
    </div>
            <span style={{ marginRight: 24, fontSize: 12 }}>Airports & Areodomes</span>
            <span style={{ fontSize: 12 }}>Bussiness</span>
             <ToogleButton /> 
        <Footer/>
        </div>
   
    
  );
};

export default SearchPage;
