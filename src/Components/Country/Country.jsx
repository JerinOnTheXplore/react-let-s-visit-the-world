import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited] = useState(false);
//  console.log(handleVisitedCountries);
    // console.log(country)
    const handleVisited =()=>{
        // if(visited === true){
        //     setVisited(false)
        //  }
        //  else{
        //     setVisited(true);
        //  }
        setVisited(!visited)
        handleVisitedCountries(country);
    
    } 
    return (
        <div className={`country ${visited && 'country-visited' }`}>
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />
            <p>Population: {country.population}</p>
            <p>Independent: {country.independent ? 'Free': 'Not Free'}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Sub region: {country.subregion}</p>
            <p>Start of Week: {country.
startOfWeek}</p>
<button className={visited? 'btn-visited':'Not visited'} onClick={handleVisited}>{
    visited ? 'Visited':'Not Visited'}</button>
        </div>
    );
};

export default Country;