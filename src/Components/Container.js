import React, { useEffect, useState } from "react";
import { Redeemed } from "./Redeemed";
import { fecthHistory } from "../Context/contextAPI";


export default function Container() {
  const [historys, setHistorys] = useState([]);
  
  

  useEffect(() => {
    fecthHistory(setHistorys);
    //eslint-disable-next-line
  }, []);

  const listRedeem = historys.reverse();

  return (
    <div>
        <h6>Reedeem</h6>

        <div>{listRedeem.map((item) => (
            <Redeemed  {...item} key={item.createDate} />
        ))}
      
            </div>
      
      
    </div>
  );
}
