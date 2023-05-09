import { createSlice } from "@reduxjs/toolkit";

const jobsPageSlice = createSlice({
  name: "rent",
  initialState: [],
  reducers: {
    fetchJobsAds: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const jobPageReducer = jobsPageSlice.reducer;
export const { fetchJobsAds } = jobsPageSlice.actions;
