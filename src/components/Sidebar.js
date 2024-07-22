import React from "react";
import {
  FaHome,
  FaBolt,
  FaVideo,
  FaBroadcastTower,
  FaMusic,
  FaRunning,
  FaGamepad,
  FaFilm,
  FaHistory,
  FaListAlt,
  FaThumbsUp,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app?.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-60 m-2 bg-white h-full">
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FaHome size={20} />
          <Link to={"/"}>
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaBolt size={20} />
          <span>Shorts</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaVideo size={20} />
          <span>Video</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaBroadcastTower size={20} />
          <span>Live</span>
        </li>
      </ul>
      <h1 className="font-bold mt-8 mb-4">Subscriptions</h1>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FaMusic size={20} />
          <span>Music</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaRunning size={20} />
          <span>Sports</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaGamepad size={20} />
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaFilm size={20} />
          <span>Movies</span>
        </li>
      </ul>
      <ul className="space-y-4 mt-8">
        <li className="flex items-center space-x-2">
          <FaHistory size={20} />
          <span>History</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaListAlt size={20} />
          <span>Playlist</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaThumbsUp size={20} />
          <span>Liked Videos</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
