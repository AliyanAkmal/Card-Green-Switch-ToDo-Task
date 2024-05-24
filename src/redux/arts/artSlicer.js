import { createSlice } from "@reduxjs/toolkit";

export const artSlicer = createSlice({
  name: "arts",
  initialState: {
    arts: [],
  },
  reducers: {
    setArts: (state, action) => {
      state.arts = action.payload;
    },
  },
});
export const { setArts } = artSlicer.actions;
export default artSlicer.reducer;
