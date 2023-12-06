import { configureStore } from "@reduxjs/toolkit";
import product from "../slices/productSlice";
const store = configureStore({
  reducer: {
    product,
  },
});

export default store;