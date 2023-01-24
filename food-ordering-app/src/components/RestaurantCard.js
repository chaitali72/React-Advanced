import React from "react";
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <p>{lastMileTravelString} stars</p>
    </div>
  );
};
export default RestaurantCard;
