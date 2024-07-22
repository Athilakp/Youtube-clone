import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
    search: searchReducer,
  },
});
export default store;
