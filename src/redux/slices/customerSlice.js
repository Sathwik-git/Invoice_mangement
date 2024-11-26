import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {
    setCustomers: (state, action) => [...state, ...action.payload],
  },
});

export const { setCustomers } = customersSlice.actions;

export default customersSlice.reducer;
