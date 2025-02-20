import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tripType: "one-way", // Can be "one-way" or "round-trip"
    cabinClass: "economy", // Can be "economy", "business", etc.
    flyingFrom: "BLR",
    flyingTo: "SIN",
    departDate: '2025-02-11',
    returnDate: '',
    travellers: {
        adults: 1,
        children: 0,
        infants: 0,
    },
};

export const flightFilterSlice = createSlice({
    name: 'flight-filter',
    initialState,
    reducers:{
        setFlying_from: (state, {payload}) =>{
            state.flyingFrom = payload;
        },
        setFlying_to: (state, {payload}) =>{
            state.flyingTo = payload;
        },
        setTrip_type: (state, {payload}) =>{
            state.tripType = payload;
        },
        setCabin_class: (state, {payload}) =>{
            state.cabinClass = payload;
        },
        setDepart_date: (state, {payload}) =>{
            state.departDate = payload;
        },
        setReturn_date: (state, {payload}) =>{
            state.returnDate = payload;
        },
        setTravellers: (state, {payload}) =>{
            state.travellers = payload;
        },

    }
});

export const { setTrip_type, setCabin_class, setDepart_date, setFlying_from, setFlying_to, setReturn_date, setTravellers } = flightFilterSlice.actions;
export default flightFilterSlice.reducer;

