import React from 'react';
import { useEffect, useState } from 'react';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Visiting every country of the world!</h1>
            <h3>Available Countries: {countries.length}</h3>
            {
                countries.map(country => <AllCountry
                    name={country.name.common}
                    population={country.population}
                ></AllCountry>)
            }
        </div>
    );
};
const AllCountry = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h4>Population: {props.population}</h4>
        </div>
    )
};
export default Country;