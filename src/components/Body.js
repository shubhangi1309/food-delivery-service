import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import restaurantList from "../../utils/mockData";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  //Local state variable - SCOPE - inside Component help of HOOK
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); //we pass default value as []
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    restaurantList
  );
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    let restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  //Conditional Rendering
  if (filteredListOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like you're offline! Please check your internet.</h1>
      </div>
    )
  }

  return (
    <div className="body ml-12">
      <div className="filter">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const searchedOptions = listOfRestaurants.filter((rest) =>
                rest.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredListOfRestaurants(searchedOptions);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredListOfRestaurants?.map(restaurant =>
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default Body;