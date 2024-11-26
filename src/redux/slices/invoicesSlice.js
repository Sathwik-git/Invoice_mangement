import { createSlice } from "@reduxjs/toolkit";

export const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    setInvoices: (state, action) => [...state, ...action.payload],
  },
});

export const { setInvoices } = invoicesSlice.actions;

export default invoicesSlice.reducer;
