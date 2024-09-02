const RestaurantCard = (props) => {
  useEffect;
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = props;
  const resList = [];
  return (
    <div className="res-card">
      <img className="" src="" alt="res-logo" />
      <h3>Meghna Food</h3>
      <h3></h3>
      <h4></h4>
      <h4></h4>
    </div>
  );
};

export default RestaurantCard;