import { configureStore } from "@reduxjs/toolkit";
import  countriesReducer from "../feature/countries";
import  countryReducer from "../feature/country";
export const store = configureStore({
    reducer:{
        countries:countriesReducer,
        country:countryReducer
    }
})