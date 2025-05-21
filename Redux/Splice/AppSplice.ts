"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppState = {
  mobileToggle: false,
};

export const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateMobileToggle: (state, action: PayloadAction<boolean>) => {
      state.mobileToggle = action.payload;
    }
  },
});

export const { updateMobileToggle } = appSlice.actions;

export default appSlice.reducer;
