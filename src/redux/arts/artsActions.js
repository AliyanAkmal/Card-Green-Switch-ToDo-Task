import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArts } from "./artsApi";
export const getArt = createAsyncThunk("arts/getArt", async (payload) => {
  const response = await getArts(payload);
  return response.data;
});
