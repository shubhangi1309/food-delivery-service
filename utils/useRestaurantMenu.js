import { useEffect, useState } from "react";
import restaurantListMenus from "./mockDataByResId";

const useRestaurantMenu = (resId) => {
    const [fetchedMenuData, setFetchedMenuData] = useState(null);
    useEffect(() => {
        // fetchMenu();
        fetchMockData();
    }, []);

    const fetchMenuFromAPI = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        let items =
            json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                .itemCards;
        setFetchedMenuData(items);
    };

    const fetchMockData = () => {
        const restaurantMenu = restaurantListMenus.find((restaurant) => restaurant?.info?.id === resId);
        setFetchedMenuData(restaurantMenu?.info);
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/data'); // Replace with your API URL
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);

    return fetchedMenuData;
}

export default useRestaurantMenu;