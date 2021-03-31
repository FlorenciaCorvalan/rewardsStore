import React from "react";
import { productsUrl } from "../Context/contextAPI";

const CardiInfo = (props) => {
    const { productCost, userPoints } = props;
    function redeemTry(userPoints, productCost){
        if (productCost>userPoints){
            return(
                <div><p>Insufficient coins, you need {productCost-userPoints}</p></div>
            );
        }
    } 
return(<div>{redeemTry(userPoints, productCost)}</div>);
}

export default CardiInfo;