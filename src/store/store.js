import { configureStore } from "@reduxjs/toolkit";
import artSlicer from "../redux/arts/artSlicer";

export default configureStore({
  reducer: {
    arts: artSlicer,
  },
});
