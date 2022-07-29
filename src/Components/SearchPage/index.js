import React, { useEffect, useState } from 'react'
import './index.css'
import ToogleButton from '../ToogleButton/ToogleButton';
import Footer from '../Footer/Footer';
import SearchIcon from "@mui/icons-material/Search";
import Arrival from '../Arrival/ArrivalData.json'
import Departure from '../Departures/DepartureData.json';
const filterIt = (terms, arr) => {
    const words = terms.match(/\w+|"[^"]+"/g);
    return arr.filter((a) => {
        const v = Object.values(a);
        const f = JSON.stringify(v).toLowerCase();
        return words.every((val) => f.includes(val));
    });
};
const SearchPage = () => {
    const [firstArr, setFirstArr] = useState([]);
    const [Data, setData] = useState([]);
    const[firstDep,setFirstDep]=useState([]);
    const[depData,setDepData]=useState([])
    
    useEffect(() => {
        const newArr = [...Arrival.flights.Arrival];
        setFirstArr(newArr);
        setData(newArr);

        const newDepArr=[...Departure.flights.Departure];
        setFirstDep(newDepArr);
        setDepData(newDepArr);
       
    }, []);
    const filterList = () => {
        const searchWord = document.getElementById("searchTxt").value

        if (searchWord) {
            const updatedNewArr = filterIt(searchWord, firstArr);
            const updatedNewDepArr = filterIt(searchWord,firstDep);
            setData(updatedNewArr);
setDepData(updatedNewDepArr);
        } else {
            setData([...firstArr]);
            setDepData([...firstDep]);
        };
    }


    return (

        <div className="box">
            
            <h2>Find Your Flight</h2>
            <div className='button'>
            <SearchIcon style={{ paddingTop: 5 }}     />
            <input
                type="text"
                placeholder="Search arrivals by flight number,Airline or cities"
                style={{
                    width: 289,
                    padding: 6,
                    border: "none"
                }}
                id="searchTxt"
            onChange={filterList}
            />
           
            </div>
            <div style={{marginTop:9}}>
            <span style={{ marginRight: 24, fontSize: 12 }}>Airports & Areodomes</span>
            <span style={{ fontSize: 12 }}>Bussiness</span>
            </div>
            <ToogleButton data={Data} DepData={depData}/>
            <Footer />
        </div>

    )
}

export default SearchPage;

