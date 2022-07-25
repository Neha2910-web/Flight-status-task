import React from 'react'
import SearchButton from '../SearchButton/SearchButton';
import ArrivalFligtsTable from '../Arrival/Arrival';
import ToogleButton from '../ToogleButton/ToogleButton';
import Footer from '../Footer/Footer';

const SearchPage = () => {
    return (
        <div style={style.box}>
             <h2>Find Your Flight</h2>
             <SearchButton />
            <span style={{ marginRight: 24, fontSize: 12 }}>Airports & Areodomes</span>
            <span style={{ fontSize: 12 }}>Bussiness</span>
             <ToogleButton /> 
        <Footer/>
        </div>

    )
}
export default SearchPage;
const style = {

    box: {
        borderRadius: 10,
        boxShadow:
            "0px 1px 2px 1px 1px rgba(0,0,0,0.4),0px 0px 1px 0px rgba(0,0,0,0.4)",
        backgroundColor: "#d8d4d4",
        padding: 20,
        margin: "auto",
        width: 750,
    }
}
