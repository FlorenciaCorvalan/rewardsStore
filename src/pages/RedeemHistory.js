import React from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Link to="/">
                Shop
            </Link>
        </div>
    );
}

export const RedeemedHistory = () => {
    return(
        <div>
            <Header />
            <Container />
        </div>
    );
}
