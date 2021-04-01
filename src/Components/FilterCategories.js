import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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
        <FormControl>
          <InputLabel>Filter by category</InputLabel>
          <Select
            name="category"
            open={open}
            value={filter.category}
            onChange={takeFiltered}
            onClose={closes}
            onOpen={opens}
          >
            <MenuItem value={"all categories"}>Select category</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category.toLowerCase()}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <hr />
      </div>
    </>
  );
};
export default Filter2;
