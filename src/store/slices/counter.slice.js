import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
   name: "count",
   initialState: 1,
   reducers: {
      multyplTwo: state => state * 2,
      divideOnTwo: state => state / 2,
      reset: () => 1
   },
});

export const {multyplTwo, divideOnTwo, reset} = countSlice.actions;

export default countSlice.reducer; 
