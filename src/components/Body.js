import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  //Local state variable - SCOPE - inside Component help of HOOK
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //we pass default value as []

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(restaurant => restaurant.data.avgRating>4);
            setListOfRestaurants(filteredList);
            console.log("top rated btn clicked ",listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
