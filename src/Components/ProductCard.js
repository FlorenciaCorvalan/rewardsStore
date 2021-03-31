import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import CardiInfo from "./ProductCardInfo";
import HandleHover from "./HandleHover";


export const Product = (props) => {
  const { name, category, img, cost, _id } = props;
  const [userData, setUserData] = useContext(UserContext);
  const userPoints = userData.points;
  const [hover, setHover] = useState(false);

  

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
      <CardiInfo productCost={cost} userPoints={userPoints} hover={hover} />
      <img src={img.url} alt="imagen del producto" />
      <div>
        <p>{category}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Product;
