import React from "react";
import styled from "styled-components";


const Redeemed = (props) => {
  return (
    <History>
      <img src={props.img.url} alt="Imagen del Producto" />

      <div>
        <p>{props.name}</p>
        <div id="costR">
          <p id="costt">Cost: </p>
          {props.cost}
          <div id="line"></div>
        </div>
      </div>
    </History>
  );
};

export default Redeemed;

const History = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
