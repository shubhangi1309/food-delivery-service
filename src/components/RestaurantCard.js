import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData.info;

  return (
      <div className="rounded-lg m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{avgRating}</h4>
        <h5>{cuisines.join(', ')}</h5>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime+' minutes'}</h4>
      </div>
  );
};

export default RestaurantCard;