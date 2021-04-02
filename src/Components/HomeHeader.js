import React from "react";
import imgH from "../assets/header-x2.png";
import styled from "styled-components";

const HomeHeader = () => {
    
    return(
        <Encabeza>
          <h1>Rewards Store</h1>
        <img src={imgH} alt="Header Imagen" id="headerImg" />
      </Encabeza>
    );
}

export default HomeHeader;

const Encabeza = styled.div`
  width:100%;

`;