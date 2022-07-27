import React, { useEffect, useState } from 'react'
import './index.css'
import ToogleButton from '../ToogleButton/ToogleButton';
import Footer from '../Footer/Footer';
import SearchButton from '../SearchButton/Searchbutton';
import firstItem from '../Arrival/ArrivalData.json'
const filterIt = (terms, arr) => {
    const words = terms.match(/\w+|"[^"]+"/g);
    words.push(terms);
    return arr.filter((a) => {
        const v = Object.values(a);
        const f = JSON.stringify(v).toLowerCase();
        return words.every((val) => f.includes(val));
    });
};
const SearchPage = () => {
    // const [filteredValue, setFilteredValue] = useState('')
    const arrivalArr =
        firstItem && firstItem.flights && firstItem.flights.Arrival
            ? firstItem.flights.Arrival
            : [];
    const [firstDataItem, setFirstDataItem] = useState([])
    const [newValue, setNewValue] = useState([])
    // console.log(...firstItem.flights.Arrival)
    useEffect(() => {
        const newItem = [...firstItem.flights.Arrival]
        setFirstDataItem(newItem)
        // console.log(newItem)
    }, [])

    const filterFunction = () => {
        const searchWord = document.getElementById('searchTxt').value
        if (searchWord) {
            const update = filterIt(searchWord, firstDataItem)
        } else {
            setNewValue([...firstDataItem])
        }
    }
    // const filteredFlightList = (arrivalArr.filter((item) => {
    //     // console.log("1",item.Flight.toLowerCase().includes(filteredValue));
    //     return (item.Flight.toLowerCase().includes(filteredValue))
    // }))

    // const filterValueChangedHandle=(event)=>{
    //     onFilterValueSelected(event.target.value)
    //       }


    // const onFilterValueSelected = (filterValue) => {
    //     console.log(filterValue);
    //     setFilteredValue(filterValue)
    // }
    console.log(newValue)
    return (

        <div className="box">
            <h2>Find Your Flight</h2>
            <input
                type="text"
                placeholder="Search arrivals by flight number,Airline or cities"
                style={{
                    width: 289,
                    padding: 6,
                    border: "none"
                }}
                id=" searchTxt"
            // onChange={filterValueChangedHandle}
            />
            <button className="searchbutton" onClick={filterFunction}  >
                Search Flight
            </button>
            {/* <SearchButton filterValueSelected={onFilterValueSelected}></SearchButton> */}
            <span style={{ marginRight: 24, fontSize: 12 }}>Airports & Areodomes</span>
            <span style={{ fontSize: 12 }}>Bussiness</span>
            <ToogleButton data={newValue}/>
            <Footer />
        </div>

    )
}

export default SearchPage
