import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoPageFound = () => {
    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/')
    },3000)
    return (
        <div>
            <h3 className='text-4xl text-gray-500 my-40'>404! No Page Found</h3>
        </div>
    );
};

export default NoPageFound;