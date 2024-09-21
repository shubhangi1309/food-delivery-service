import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  
  if (menuData === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{menuData?.name}</h1>
      <p className="font-bold text-lg">{menuData?.cuisines.join(", ")} - {menuData?.costForTwo}</p>
      <h2>MENU</h2>
    </div>
  );
};

export default RestaurantMenu;