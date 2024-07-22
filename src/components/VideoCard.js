import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 shadow-lg rounded-lg bg-white">
      <img
        alt="thumbnail"
        className="rounded-lg w-full h-40 object-cover"
        src={thumbnails.medium.url}
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-xs text-gray-600">
          {statistics?.viewCount || 0} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
