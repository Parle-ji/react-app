import { configureStore } from "@reduxjs/toolkit";
// import { CounterSlice } from "./Slices/CounterSlice";
// import {CounterReducer} from './Slices/CounterSlice'
import CounterReducer from "./Slices/CounterSlice"; 


export const counterAppStore = configureStore({
    reducer:{
        counterApp: CounterReducer,
    }
})