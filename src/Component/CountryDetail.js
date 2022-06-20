import React, { useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { baseURL } from '../Api/baseApi';
import { useSelector, useDispatch } from 'react-redux'
import { loadCountry, loadingState } from '../feature/country';
import Loading from './Loading';

const CountryDetail = () => {
    const { countryname } = useParams()
    const { country, loading, error } = useSelector(state => state.country)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadingState(true))
        baseURL.get(`name/${countryname}`).then(({ data }) => dispatch(loadCountry(data[0])))
    }, [])
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' container mx-auto flex flex-col lg:flex-row mt-10 gap-10' >
            <div className='flex-1'>
                <img src={country?.flags.png} className="w-full h-80" alt="" />
            </div>
            <div className='flex-1 lg:text-left'>
                <h3 className='text-4xl font-bold text-slate-700 mb-6'>{country?.name?.common}</h3>
                <div>
                    <p><span className='font-bold'>Capital : </span>{country?.capital[0]}</p>
                    <p><span className='font-bold'>

Region : </span>{country?.region}</p>
                    <p>

<span className='font-bold'>Timezone : </span>{country?.timezones}</p>
<a href={country?.maps?.googleMaps} target="_blank" className='py-4 px-8 rounded bg-slate-700 inline-block text-white font-bold mt-8'>Show On Map</a>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;