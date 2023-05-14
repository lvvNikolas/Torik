import { configureStore } from "@reduxjs/toolkit";
import { rentPageReducer } from "../slices/rentPageSlice";
import { jobPageReducer } from "../slices/jobsPageSlice";
import { servicesPageReducer } from "../slices/servicesPageSlice";
import { trucksPageReducer } from "../slices/trucksPageSlice";

export const store = configureStore({
  reducer: {
    rent: rentPageReducer,
    jobs: jobPageReducer,
    services: servicesPageReducer,
    trucks:trucksPageReducer,
  },
});
