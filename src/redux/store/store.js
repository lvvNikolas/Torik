import { configureStore } from "@reduxjs/toolkit";
import { rentPageReducer } from "../slices/rentPageSlice";

export const store = configureStore({
  reducer: {
    rent: rentPageReducer,
  },
});
