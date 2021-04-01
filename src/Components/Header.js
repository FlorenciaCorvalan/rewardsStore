import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";
import coins from "../assets/coin.svg";

export default function Header() {
  const [userData] = useContext(UserContext);

  return (
    <>
      <HeaderContainer>
        <HeaderPages>
          <div className="optionHeader">
            <Link to="/">
              <div>Home</div>
            </Link>
          </div>
          <div className="optionHeader">
            <Link to="/redeem-history">
              <div>Redeem</div>
            </Link>
          </div>

          <div className="optionHeader">
            <Link to="/add-coins">
              <div>Add more COINS</div>
            </Link>
          </div>
        </HeaderPages>
        <UserData>
          {userData.name}
          <div id="userPoint"><p id="userpoint">{userData.points}</p>
          <img src={coins} alt="moneda" /></div>
        </UserData>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  color: #4b4942;
`;
const HeaderPages = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  font-weight: bold;
  
`;
const UserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4b4942;
`;
