import React, { useState, createContext, useEffect } from "react";
import { fetchUser } from "./context";


export const userContext = createContext();

export const Provider = (props) => {
    const [userData, setUserData] = useState("");
    const [productData, setProductData] = useState([]);
    const [points, setPoints] = useState("");
    const [category, setCategory] = useState( {category: "" });

    return(
        <userContext.Provider 
          value={{
              userData,
              setUserData,
              productData,
              setProductData,
              points,
              setPoints,
              category,
              setCategory,
            }}
        > {props.children} 
        </userContext.Provider>
    )

}
