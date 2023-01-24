import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.1752097&lng=72.8064467&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json.data);
  }
  // if (!restaurantMenu) return <Shimmer />;
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="Menu-info">
      <div>
        <h1>Restaurant id:{id}</h1>
        <h2>Name:{restaurantMenu.name}</h2>
        <img
          src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId}
          alt="Menu-image"
        />
        <h3>{restaurantMenu.area}</h3>
        <h4>{restaurantMenu.city}</h4>
        <h5>{restaurantMenu.cuisines}</h5>
        <h6>{restaurantMenu.costForTwo} for two</h6>
        <p>{restaurantMenu.avgRatingString} stars</p>
      </div>
      <div>
        <h1>Menu-list</h1>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
