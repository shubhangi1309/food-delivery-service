import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData.info;

  return (
      <div className="card res-card">
        <img
          className="restaurant-img"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h5>{cuisines.join(', ')}</h5>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime+' minutes'}</h4>
      </div>
  );
};

export default RestaurantCard;