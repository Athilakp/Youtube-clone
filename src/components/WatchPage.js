import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
  FaUserCircle,
} from "react-icons/fa";

const WatchPage = () => {
  const video = useSelector((store) => store.video.videoDetails);
  const { snippet, statistics } = video || {};
  const { channelTitle, title, description, publishedAt } = snippet || {};
  const { likeCount, viewCount } = statistics || {};

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // Format view count with commas
  const formattedViewCount = viewCount
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="px-5">
      <iframe
        width="1100"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="mt-5" style={{ width: "1100px" }}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <FaUserCircle className="w-8 h-8 text-gray-400" />
            <p className="text-gray-600 font-semibold px-2">{channelTitle}</p>
            <button className="ml-6 px-4 py-2 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2  bg-gray-100  border border-gray-300 rounded-full px-4 py-1">
              <FaThumbsUp />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center space-x-2  bg-gray-100  border border-gray-300 rounded-full px-4 py-1">
              <FaShare />
              <span>Share</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100  border border-gray-300 rounded-full px-4 py-1">
              <FaDownload />
              <span>Download</span>
            </div>
          </div>
        </div>
        <p className="text-gray-800 mt-4">
          {formattedViewCount} views &nbsp; {formattedDate}
        </p>
        <p className="bg-gray-100 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default WatchPage;
