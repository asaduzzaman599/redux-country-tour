import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    country: null,
    loading:true,
    error:''
}

const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{
        loadCountry:(state,action)=>{
            state.country = action.payload
            state.loading= false
            state.error=""
        },
        loadingState:(state,action)=>{
            state.loading= action.payload
        },
        error:(state,action)=>{
            state.error= action.error
        }
    }
})

export default countrySlice.reducer
export const { loadCountry, loadingState, error} = countrySlice.actions