import React from 'react';
import { useNavigate } from "react-router-dom";
const Country = ({country}) => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>{country.name.common}
            </h1>
            <button className='px-8 py-4 rounded bg-slate-700 text-white font-semibold' onClick={()=>navigate(`/detail/${country.name.common}`)}>Details</button>
        </div>
    );
};

export default Country;