import { createSlice } from "@reduxjs/toolkit";

const servicesPageSlice = createSlice({
  name: "services",
  initialState: [],
  reducers: {
    fetchServicesAds: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const servicesPageReducer = servicesPageSlice.reducer;
export const { fetchServicesAds } = servicesPageSlice.actions;
