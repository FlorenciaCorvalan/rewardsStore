import React from "react";


const CardiInfo = (props) => {
    const { productCost, userPoints, hover } = props;
    function redeemTry(userPoints, productCost){
        if (productCost>userPoints){
            return(
                <div><p>Insufficient coins, you need {productCost - userPoints}</p></div>
            );
        } else{
            <p></p>
        }
    } 
return(<div>{redeemTry(userPoints, productCost)}</div>);
}

export default CardiInfo;