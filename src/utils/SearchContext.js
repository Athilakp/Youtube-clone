import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=YOUR_API_KEY`
    );
    const json = await data.json();
    setSearchResults(json.items);
    setIsSearching(true);
  };

  const handleHomeClick = () => {
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider
      value={{ searchResults, isSearching, handleSearch, handleHomeClick }}
    >
      {children}
    </SearchContext.Provider>
  );
};
