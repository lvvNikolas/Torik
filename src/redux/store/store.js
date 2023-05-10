import { configureStore } from "@reduxjs/toolkit";
import { rentPageReducer } from "../slices/rentPageSlice";
import { jobPageReducer } from "../slices/jobsPageSlice";

export const store = configureStore({
  reducer: {
    rent: rentPageReducer,
    jobs: jobPageReducer,
  },
});
