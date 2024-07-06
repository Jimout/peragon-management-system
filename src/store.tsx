//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterSlice  from "./global-redux/features/counter-slice";

const rootReducer = combineReducers({
  counter: counterSlice,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
