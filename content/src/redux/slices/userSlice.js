import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersDetailsApi } from "../apis/usersDetailsApi";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchData",
  async (_payload, {rejectWithValue}) => {
    try {
      const {data} = await usersDetailsApi();
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });
  },
});

export default userSlice.reducer;