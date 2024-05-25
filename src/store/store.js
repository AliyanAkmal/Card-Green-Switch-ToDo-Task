import { configureStore } from "@reduxjs/toolkit";
import artSlicer from "../redux/arts/artSlicer";
import buySlicer from "../redux/buy/buySlicer";

export default configureStore({
  reducer: {
    arts: artSlicer,
    buyArts: buySlicer,
  },
});
