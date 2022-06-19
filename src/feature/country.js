import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    country: null,
    loading:false,
    error:''
}

const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{
        loadCountry:(state,action)=>{
            state.country = action.payload
            console.log(action.payload)
            state.loading= false
            state.error=""
        },
        loading:(state,action)=>{
            state.loading= action.error
        },
        error:(state,action)=>{
            state.error= action.error
        }
    }
})

export default countrySlice.reducer
export const { loadCountry, loading, error} = countrySlice.actions