import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import styled from "styled-components";

const Filter = () => {
  const { productData, setCategory } = useContext(UserContext);
  return (
    <>
      <div>
        <div>
          <label>Filter by category</label>
          <select
            name="category"
            value={productData.category}
            onChange={(e) => {
              const value = e.target.value;
              setCategory({ ...productData, [e.target.name]: value });
            }}
          >
            <option value="">Select category</option>
            {[...new Set(productData.map((e) => e.category))]
              .sort()
              .map((item, index) => (
                <option key={`${item}-${index}`} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Filter;
