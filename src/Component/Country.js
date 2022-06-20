import React from 'react';
import { useNavigate } from "react-router-dom";
const Country = ({country}) => {
    const navigate = useNavigate()
    return (
        <div className='w-full shadow pb-6 flex flex-col items-center gap-4'>
            <img src={country.flags.png} alt=""  className='w-full h-60'/>
            <h1 className='text-2xl font-bold text-slate-800'>{country.name.common}
            </h1>
            <button className='px-8 py-4 rounded bg-slate-700 text-white font-semibold' onClick={()=>navigate(`/detail/${country.name.common}`)}>Details</button>
        </div>
    );
};

export default Country;