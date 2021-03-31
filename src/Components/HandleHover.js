import React, { useState } from "react";
import { getRedeem } from "../Context/contextAPI";
import Modal1 from "./Modal";

const HandleHover = (props) => {
    const { userData, setUserData, userPoints, productCost, productId } = props;
    const [success, setSuccess] = useState(false);

    function productRedeem(id, cost, userPoints){
        const redeemProd = getRedeem(id);
        const pointsActual = userPoints-cost;
        setUserData({ ...userData, points: pointsActual });
        setSuccess(redeemProd);
    }

    return(
        <div>
            <div>{productCost.toLocaleString('de-De')}</div>
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
    )
}

export default HandleHover;