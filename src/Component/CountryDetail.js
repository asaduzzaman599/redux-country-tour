import React, { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { baseURL } from '../Api/baseApi';
import { useSelector, useDispatch } from 'react-redux'
import { loadCountry } from '../feature/country';

const CountryDetail = () => {
    const {countryname} = useParams()
    const country = useSelector(state=>state.country.country)
    const dispatch = useDispatch()
    useEffect(()=>{
        baseURL.get(`name/${countryname}`).then(({data})=>dispatch(loadCountry(data[0])))
    },[])
    return (
        <div>
            <h3>{country?.name?.common}</h3>
        </div>
    );
};

export default CountryDetail;