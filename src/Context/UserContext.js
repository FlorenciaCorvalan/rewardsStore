import React, { useState, createContext, useEffect } from "react";
import { fetchUser } from "./context";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState("");
  const [productData, setProductData] = useState([]);
  const [points, setPoints] = useState("");
  const [category, setCategory] = useState({ category: "" });

  return (
    <UserContext.Provider
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
    >
      {" "}
      {props.children}
    </UserContext.Provider>
  );
};
