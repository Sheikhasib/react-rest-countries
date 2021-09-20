import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag, capital, population, region} = props.country;
    // console.log(props.country);
    return (
        <div className="country">
           <h2>Name: {name}</h2>
           <img src={flag} alt="" />
           <h4>Capital: {capital}</h4> 
           <p>Region: {region}</p>
           <p>Population: {population}</p>
        </div>
    );
};

export default Country;