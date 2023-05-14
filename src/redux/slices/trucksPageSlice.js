import { createSlice } from "@reduxjs/toolkit";

const trucksPageSlice = createSlice({
  name: "trucks",
  initialState: [],
  reducers: {
    fetchTrucksAds: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const trucksPageReducer = trucksPageSlice.reducer;
export const { fetchTrucksAds } = trucksPageSlice.actions;
