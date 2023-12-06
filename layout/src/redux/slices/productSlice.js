import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productDetailsApi } from "../apis/productDetailsApi";

export const fetchProductDetails = createAsyncThunk(
  "product/fetchData",
  async (_payload, {rejectWithValue}) => {
    try {
      const {data} = await productDetailsApi();
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);


const productSlice = createSlice({
  name: "product",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });
  },
});

export default productSlice.reducer;