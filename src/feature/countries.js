import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    countries: [],
    error: '',
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        loadData: (state, action) => {
            state.countries = action.payload
            state.loading = false
            state.error = ''
        },
        loading: (state, action) => {
            state.loading = action.payload
        },
        error: (state, action) => {
            state.error = action.payload
        },

    }

})

export const {loadData,loading,error} = countriesSlice.actions
export default countriesSlice.reducer