import { createSlice } from "@reduxjs/toolkit";
import { getArt } from "./artsActions";

export const artSlicer = createSlice({
  name: "arts",
  initialState: {
    arts: [],
    isArtsLoading: false,
    isArtsRejected: false,
    isArtsFullfilled: false,
  },
  reducers: {
    setArts: (state, action) => {
      state.arts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArt.fulfilled, (state, action) => {
      state.isArtsLoading = false;
      state.isArtsRejected = false;
      state.isArtsFullfilled = true;
      state.arts = action.payload;
    });
    builder.addCase(getArt.pending, (state, action) => {
      state.isArtsLoading = true;
      state.isArtsRejected = false;
      state.isArtsFullfilled = false;
    });
    builder.addCase(getArt.rejected, (state, action) => {
      state.isArtsLoading = false;
      state.isArtsRejected = true;
      state.isArtsFullfilled = false;
    });
  },
});
export const { setArts } = artSlicer.actions;
export default artSlicer.reducer;
