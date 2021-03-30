import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import ProductConatiner from "../Components/ProductContainer";

const HomePage = () => {
    return(
        <>
        <Header />
        <Filter />
        <ProductConatiner />
        </>
    );
};

export default HomePage;