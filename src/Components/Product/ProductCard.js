import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Redeem } from "../Views/RedeemView";
import modal from "../../functions/modal";
import Loading from "./Components/Loads";
import styled from "styled-components";

const CardContainer = styled.div``;

export const Product = ({ data, loading }) => {
  const [id, setId] = useState("");
  const { points } = useContext(UserContext);
  const [product, setProduct] = useState([]);
  const { clicka, opens } = modal();
  const [mensaje, setMensaje] = useState("");
  const [hover, setHover] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <img src={data.img.url} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <h5>{data.category}</h5>

          <p>
            {data.cost}
            {""}
          </p>
          <div>
            <button
              type="button"
              onClick={() => {
                setId(data._id);
                setProduct(data);
                opens();
              }}
              disabled={data.cost > points}
            >
              {data.cost >= points
                ? `Insufficient coins, ${data.cost - points} coins required`
                : "Redeem"}
            </button>
          </div>
          <Redeem
            clicka={clicka}
            id={id}
            product={product}
            hide={opens}
            mensaje={mensaje}
          />
        </div>
      </div>
    </div>
  );
};
