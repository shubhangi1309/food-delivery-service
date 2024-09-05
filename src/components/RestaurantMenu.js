import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("json=", json);
    let items =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        .itemCards;
    console.log("items=", items);
    setMenuData(json.data);
  };

  if (menuData === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      {/* <ul>
        {items.map((item) => {
          <li key={item?.card?.info?.name}>
            {item?.card.info?.name} - {"Rs. "}{" "}
            {item?.card.info?.price || item?.card.info?.defaultPrice}
          </li>;
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
