import React from "react";
import blue from "../assets/buy-blue.svg";
import white from "../assets/buy-white.svg";
import coins from "../assets/coin.svg";


const CardiInfo = (props) => {
    const { productCost, userPoints, hover } = props;
    function redeemTry(userPoints, productCost){
        if (productCost>userPoints){
            return(
                <div id="NeedData"><p>You need {productCost - userPoints}</p>
                <img src={coins} alt="moneda" /></div>
            );
        } else{
            const buy = hover ? white : blue;
            return <img src={buy} alt="bolsa de shopping" id="shop" />
        }
    } 
return(<div id="NeedMoney">{redeemTry(userPoints, productCost)}</div>);
}

export default CardiInfo;