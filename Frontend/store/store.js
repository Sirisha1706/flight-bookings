import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import flightFilterSlice from '../features/flight/flightFilterSlice';

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        flightFilter: flightFilterSlice,
    },
});
