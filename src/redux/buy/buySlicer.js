import { createSlice } from "@reduxjs/toolkit";

export const buySlicer = createSlice({
  name: "buyArts",
  initialState: {
    buyArts: [],
  },
  reducers: {
    setBuyArts: (state, action) => {
      state.buyArts = action.payload;
    },
  },
});
export const { setBuyArts } = buySlicer.actions;
export default buySlicer.reducer;
