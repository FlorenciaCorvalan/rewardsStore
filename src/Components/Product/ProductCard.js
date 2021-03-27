import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Redeem } from "../Views/RedeemView";
import modal from "../../functions/modal";
import Loading from "./Components/Loads";
import styled from "styled-components";

const CardContainer = styled.div`
`;

export const Product = ({ data, loading }) => {
    const [id, setId] = useState("");
    const { points } = useContext(UserContext);
    const [product, setProduct] = useState([]);
    const { clicka, opens } = modal();
    const [mensaje, setMensaje] = useState("");
    const [hover, setHover] = useState(false);

    return (
        <div></div>
    )
}