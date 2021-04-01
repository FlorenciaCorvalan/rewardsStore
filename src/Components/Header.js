import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Header() {
  const [userData] = useContext(UserContext);

  return (
    <>
      <div>
        <div>
          
          <Link to="/redeem-history">
            <div>Redeem</div>
          </Link>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add-coins">
            <div>Add more COINS</div>
          </Link>
        </div>
        <div>
          {userData.name}
          <p>
            {userData.points}
          </p>
        </div>
      </div>
    </>
  );
}
