import React, { useEffect } from 'react';
import { baseURL } from '../Api/baseApi';

const Home = () => {
    useEffect(()=>{
        baseURL.get('all').then(({data}) => console.log(data))
    },[])
    return (
        <div>

        </div>
    );
};

export default Home;