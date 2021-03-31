import React, { useState } from "react";
import { getRedeem } from "../Context/contextAPI";
import Modal1 from "./Modal";

const HandleHover = (props) => {
    const { userData, setUserData, userPoints, productCost, productId } = props;
    const [success, setSucces] = useState(false);

    function productRedeem(id, cost, userPoints){
        const redeemProd = getRedeem(id);
        const pointsActual = userPoints-cost;
        setUserData({...userData, points: pointsActual});
        setSucces(redeemProd);
    }

    return(
        <div>
            <div>{productCost.toLocaleString('de-De')}</div>
            {userPoints >= productCost && (
                <Modal1 userPoints={userPoints}
                productId={productId}
                productCost={productCost}
                productRedeem={productRedeem}
                success={success}
                />
            )}
        </div>
    )
}

export default HandleHover;