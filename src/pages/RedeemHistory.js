import React, { useEffect, useState } from "react";
import Redeemed from "../Components/Redeemed";
import { fecthHistory } from "../Context/contextAPI";
import HomeHeader from "../Components/HomeHeader";


export default function RedeemedHistory() {
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    fecthHistory(setHistorys);
    //eslint-disable-next-line
  }, []);

  const listRedeem = historys.reverse();

  return (
    <div>
      <HomeHeader />
        <h6>Reedeem</h6>

        <div>{listRedeem.map((product) => (
            <Redeemed  {...product} key={product.createDate} />
        ))}
      
            </div>
      
      
    </div>
  );
}
