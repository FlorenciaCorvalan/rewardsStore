import React, { useContext, useState } from "react";
import { ContextProdusct } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";

const Filter = () => {
  
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
