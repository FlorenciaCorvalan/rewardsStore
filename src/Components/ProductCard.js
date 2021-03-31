import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import CardiInfo from "./ProductCardInfo";
import { Redeem } from "./Views/RedeemView";
import HandleHover from "./HandleHover";
import Loading from "./Loads";

export const Product = ({ props, loading }) => {
  const { name, category, img, cost, _id } = props;
  const [userData, setUserData] = useContext(UserContext);
  const userPoints = userData.points;
  const [product, setProduct] = useState([]);
  const [hover, setHover] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {hover && (
        <HandleHover
          userData={userData}
          setUserData={setUserData}
          userPoints={userPoints}
          productCost={cost}
          productId={_id}
        />
      )}
      <CardiInfo productCost={cost} userPoints={userPoints} />
      <img src={img.url} alt="imagen del producto" />
      <div>
        <p>{category}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Product;
