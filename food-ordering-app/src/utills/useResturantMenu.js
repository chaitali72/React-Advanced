import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";
function useResturantMenu(id) {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json.data);
  }

  return restaurantMenu;
}

export default useResturantMenu;
