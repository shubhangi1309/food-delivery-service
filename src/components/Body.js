import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable - SCOPE - inside Component help of HOOK
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //we pass default value as []
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    console.log("_RES_API-JSON=", json);
    let restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("restaurants-JSON=", restaurants);
    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  //Conditional Rendering
  if(listOfRestaurants.length === 0) {
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-card-container">
        {filteredListOfRestaurants.map((restaurant, index) => 
            <RestaurantCard resData={restaurant} />
        )}
      </div>
    </div>
  );
};

export default Body;

// restaurant?.info?.aggregatedDiscountInfoV3