import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";
import Select from '@material-ui/core/Select';

const Filter2 = () => {
  const [productData] = useContext(ProductContext);
  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ].sort();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useContext(ContextFilter);

  function closes() {
    setOpen(false);
  }
  function opens() {
    setOpen(true);
  }

  function takeFiltered(event) {
    let { name, value } = event.target;
    const newData = { ...filter, [name]: value.toLowerCase() };
    setFilter(newData);
  }

  return (
    <>
      <div>
        <div>
          <label>Filter by category</label>
          <Select
            name="category"
            open={open}
            value={filter.category}
            onChange={takeFiltered}
            onClose={closes}
            onOpen={opens}
          >
            <option value={"all categories"}>Select category</option>
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </Select>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Filter2;
