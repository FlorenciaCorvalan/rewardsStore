import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";

const Filter = () => {
  const [filter, setFilter] = useContext(ContextFilter);
  
  return (
    <>
      <div>
        <div>
          <label>Filter by PRICE</label>
          <select
            name="price"
            value={filter.price}
            onChange={(e) => {
              let {name, value } = e.target;
              setFilter({ ...filter, [name]: value });
            }}
          >
            <option value={'all prices'}>Select price</option>
            <option value={'lowest'}>Lowest</option>
            <option value={'highest'}>Highest</option>
              
          </select>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Filter;
