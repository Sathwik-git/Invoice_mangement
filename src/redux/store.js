import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoicesSlice";
import productsReducer from "./slices/productSlice";
import customersReducer from "./slices/customerSlice";

export default configureStore({
  reducer: {
    invoices: invoicesReducer,
    products: productsReducer,
    customers: customersReducer,
  },
});
