import { createSlice } from "@reduxjs/toolkit";

const rentPageSlice = createSlice({
  name: "rent",
  initialState: [],
  reducers: {
    fetchRentAds: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const rentPageReducer = rentPageSlice.reducer;
export const { fetchRentAds } = rentPageSlice.actions;
