import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchvideoDetails, fetchVideos } from "../utils/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(fetchVideos(json.items));
  };
  const handleWatchVideo = (video) => {
    dispatch(fetchvideoDetails(video));
  };

  if (videos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} onClick={handleWatchVideo(video)}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
