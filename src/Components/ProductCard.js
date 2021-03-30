import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Redeem } from "./Views/RedeemView";
import Modal from "../functions/modal";
import Loading from "./Loads";


export const Product = ({ props, loading }) => {
  const { name, category, img, cost, _id } = props;
  const [userData, setUserData] = useContext(UserContext);
  const userPoints = userData.points;
  const [product, setProduct] = useState([]);
  const { isOpen, opens } = Modal();
  const [mensaje, setMensaje] = useState("");
 

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <img src={img.url} alt={props.name} />
        
          
      </div>
    </div>
  );
};
