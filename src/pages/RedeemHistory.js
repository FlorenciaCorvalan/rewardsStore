import React from "react";
import Container from "../Components/Redeemed/Container";
import { Link } from "@reach/router";

function BackHome() {
    return(
        <div>
            <Link to="/Home-page-shop">
                Shop
            </Link>
        </div>
    );
}

export const RedeemedHistory = () => {
    return(
        <div>
            <BackHome />
            <Container />
        </div>
    );
}
