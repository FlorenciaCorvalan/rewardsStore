import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import CardiInfo from "./ProductCardInfo";
import HandleHover from "./HandleHover";
import styled from "styled-components";

export const Product = (props) => {
  const { name, category, img, cost, _id } = props;
  const [userData, setUserData] = useContext(UserContext);
  const userPoints = userData.points;
  const [hover, setHover] = useState(false);

  

  return (
    <ProductContainer
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {hover && (
        <HandleHover
          userData={userData}
          setUserData={setUserData}
          userPoints={userPoints}
          productCost={cost}
          productId={_id}
        />
      )}
      <CardiInfo productCost={cost} userPoints={userPoints} hover={hover} />
      <img src={img.url} alt="imagen del producto" />
      <div id="dataProduct">
        <p>{category}</p>
        <p>{name}</p>
      </div>
    </ProductContainer>
  );
};

export default Product;


const ProductContainer = styled.div`
margin: 0.5rem;
padding: 0.8rem;
width: 70%;
border: 0.5px solid #e4e1e1;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
z-index: 5;
`;
