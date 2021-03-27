import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import fetchUser from "../Context/context";
import { UserContext } from "../Context/UserContext";
import modal from "../views/modal";
import Points from "./Points";

export default function Header() {
  const { userData, points, setUserData, setPoints } = useContext(UserContext);
  const { clicka, opens } = modal();

  useEffect(() => {
    fetchUser().then(
      (data) => (setUserData(data.name), setPoints(data.points))
    );
  }, []);

  return (
    <>
      <div>
        <div>
          <div onClick={opens}>Add Points</div>
          <Points clicka={clicka} hide={opens} />
          <Link to="RedeemHistory">
            <div>Redeem</div>
          </Link>
        </div>
        <div>
          {userData != null ? userData: ""}
          <div>
            {points != "" ? points : ""}
          </div>
        </div>
      </div>
    </>
  );
}
