import React, { useEffect } from 'react';
import { baseURL } from '../Api/baseApi';
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../feature/countries';
import country from '../feature/country';
import Country from './Country';
import Loading from './Loading';

const Home = () => {
    const {countries,loading,error} = useSelector((state)=>state.countries)

    
    const dispatch = useDispatch()

    useEffect(()=>{
        baseURL.get('all').then(({data}) => {
            dispatch(loadData(data))
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                countries?.map(country=><Country key={country.name.common} country={country}></Country>)
            }

        </div>
    );
};

export default Home;