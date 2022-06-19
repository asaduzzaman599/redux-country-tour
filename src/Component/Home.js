import React, { useEffect } from 'react';
import { baseURL } from '../Api/baseApi';
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../feature/countries';
import country from '../feature/country';
import Country from './Country';

const Home = () => {
    const countries = useSelector((state)=>state.countries.countries)

    const dispatch = useDispatch()

    useEffect(()=>{
        baseURL.get('all').then(({data}) => {
            dispatch(loadData(data))
        })
    },[])
    return (
        <div>
            {
                countries?.map(country=><Country key={country.name.common} country={country}></Country>)
            }

        </div>
    );
};

export default Home;