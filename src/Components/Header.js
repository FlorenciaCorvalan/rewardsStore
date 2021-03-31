import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Points from "./Points";

export default function Header() {
  const [userData] = useContext(UserContext);

  return (
    <>
      <div>
        <div>
          
          <Link to="/redeem-history">
            <div>Redeem</div>
          </Link>
        </div>
        <div>
          {userData.name}
          <div>
            {userData.points}
          </div>
        </div>
      </div>
    </>
  );
}
