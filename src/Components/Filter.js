import React, { useContext, useState } from "react";
import { ContextFilter } from "../Context/ContextFilter";
import Select from '@material-ui/core/Select';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useContext(ContextFilter);

  function closes(){
    setOpen(false)
  }
  function opens(){
    setOpen(true)
  }
  function takeFiltered(event){
    let { name, value } = event.target;
		const newData = { ...filter, [name]: value };
		setFilter(newData);
  }
  
  return (
    <>
      <div>
        <div>
          <label>Filter by PRICE</label>
          <Select
            name="price"
            value={filter.price}
            onChange={takeFiltered}
            onClose={closes}
            onOpen={opens}
            open={open}
          >
            <option value={'all prices'}>Select price</option>
            <option value={'lowest'}>Lowest</option>
            <option value={'highest'}>Highest</option>
              
          </Select>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Filter;
