import React, { useState } from "react";
import { IMG_CDN_URL } from "../constant";
import { restaurantList } from "../constant";

function filterData(searchtext, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchtext)
  );
  return filterData;
}
const RestaurantCard = ({
  name,
  area,
  cloudinaryImageId,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h2>{area}</h2>
      <h3>{cuisines}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Card = () => {
  //local variable for featch a restaurant data from restauratList

  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchtext, setSearchText] = useState("");
  // const [searchclick, setSearchClick] = useState();

  return (
    <>
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="search here..."
          value={searchtext}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchtext, restaurants);
            //update the data
            setRestaurants(data);
          }}
        >
          Submit
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Card;

//search functionality
// input text-{store input text} button - {onclick}search
// onclick -> filter data between input textvalue(restaurant list) and match the value from list
// disply filterdata when user click the event(button)
//filter data then it will update the state
