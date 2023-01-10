import React from "react";
import { IMG_CDN_URL } from "../constant";
import { restaurantList } from "../constant";

const RestaurantCard = ({
  name,
  area,
  cloudinaryImageId,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-image" />
      <h2>{name}</h2>
      <h2>{area}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Card = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
      /
    </div>
  );
};
export default Card;
