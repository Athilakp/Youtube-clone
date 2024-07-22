import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    videoDetails: null,
  },
  reducers: {
    fetchVideos: (state, action) => {
      state.videos = action.payload;
    },
    fetchvideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
  },
});

export const { fetchvideoDetails, fetchVideos } = videoSlice.actions;
export default videoSlice.reducer;
