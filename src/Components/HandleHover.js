import React, { useState } from "react";
import { getRedeem } from "../Context/contextAPI";
import Modal1 from "./Modal";
import coins from "../assets/coin.svg";

const HandleHover = (props) => {
  const { userData, setUserData, userPoints, productCost, productId } = props;
  const [success, setSuccess] = useState(false);

  function productRedeem(id, cost, userPoints) {
    const redeemProd = getRedeem(id);
    const pointsActual = userPoints - cost;
    setUserData({ ...userData, points: pointsActual });
    setSuccess(redeemProd);
  }

  return (
    <div id="HoverProducts">
      <div id="costData">
        <div id="cost">{productCost.toLocaleString("de-De")}</div>
        <img src={coins} alt="moneda" />
      </div>
      {userPoints >= productCost && (
        <Modal1
          productRedeem={productRedeem}
          userPoints={userPoints}
          productCost={productCost}
          productId={productId}
          success={success}
        />
      )}
    </div>
  );
};

export default HandleHover;
