import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonTags = [
    "All",
    "Songs",
    "Live",
    "Movies",
    "Cricket",
    "News",
    "Cooking",
    "Soccer",
    "Animation",
    "Comedy",
    "Cartoon",
    "Melodies",
    "Games",
  ];
  return (
    <div className="flex">
      {buttonTags.map((tag, i) => (
        <Button key={i} name={tag} />
      ))}
    </div>
  );
};

export default ButtonList;
