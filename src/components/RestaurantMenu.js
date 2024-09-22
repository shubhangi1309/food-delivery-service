import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  
  return menuData === null ? <Shimmer /> : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{menuData?.name}</h1>
      <p className="font-bold text-lg">{menuData?.cuisines.join(", ")} - {menuData?.costForTwo}</p>
      <h2>MENU</h2>
      <RestaurantCategory title={"Recommended"} data={menuData?.categoriesRecommended} showItems={showIndex === 0 ? true : false} setShowIndex={(() => setShowIndex(0))} index={0}/>
      <RestaurantCategory title={"My Favourites"} data={menuData?.myFavourites} showItems={showIndex === 1 ? true : false} setShowIndex={(() => setShowIndex(1))} index={1}/>
    </div>
  );
};

export default RestaurantMenu;