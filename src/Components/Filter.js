import React, { useContext, useState } from "react";
import { ContextFilter } from "../Context/ContextFilter";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const Filter = () => {
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
    const newData = { ...filter, [name]: value };
    setFilter(newData);
  }

  return (
    <>
      <div>
        <FormControl>
          <InputLabel>Filter by PRICE</InputLabel>
          <Select
            name="price"
            value={filter.price}
            onChange={takeFiltered}
            onClose={closes}
            onOpen={opens}
            open={open}
          >
            <MenuItem value={"all prices"}>Select price</MenuItem>
            <MenuItem value={"lowest"}>Lowest</MenuItem>
            <MenuItem value={"highest"}>Highest</MenuItem>
          </Select>
        </FormControl>
        <hr />
      </div>
    </>
  );
};

export default Filter;
