import React, { useState, createContext, useEffect } from "react";
import { getProducts } from "./contextAPI";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [productData, setProductData] = useState([
    {
      name: "",
      _id: "",
      cost: 0,
      category: "",
      img: {
        hdUrl: "",
        url: "",
      },
    },
  ]);

  useEffect(() => {
    getProducts(setProductData);
    //eslint-disable-next-line
  }, []);

  return (
	  <ProductContext.Provider value={[productData, setProductData]}>{props.children}</ProductContext.Provider>
    
  );
};
