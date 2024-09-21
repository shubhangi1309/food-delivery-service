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

    return fetchedMenuData;
}

export default useRestaurantMenu;