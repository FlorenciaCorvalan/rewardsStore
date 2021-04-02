import React, { useEffect, useState } from "react";
import Redeemed from "../Components/Redeemed";
import { fecthHistory } from "../Context/contextAPI";
import HomeHeader from "../Components/HomeHeader";
import styled from "styled-components";

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
      <h6 id="redeemeed">REDEEMED HISTORY</h6>

      <HistoryContainer>
        {listRedeem.map((product) => (
          <Redeemed {...product} key={product.createDate} />
        ))}
      </HistoryContainer>
    </div>
  );
}

const HistoryContainer = styled.div`
  text-align: center;
  margin-left: 36%;
`;
