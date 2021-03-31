import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Modal1 from "./Modal";
import Points from "./Points";

export default function Header() {
  const [userData] = useContext(UserContext);
  const { isOpen, opens } = Modal();

  

  return (
    <>
      <div>
        <div>
          <div onClick={opens}>Add Points</div>
          <Points isOpen={isOpen} hide={opens} />
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
