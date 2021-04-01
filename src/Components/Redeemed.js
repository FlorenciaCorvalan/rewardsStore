import React from "react";


const Redeemed = (props) => {
  return (
    <div>
      <img src={props.img.url} alt="Imagen del Producto" />

      <div>
        <p>{props.name}</p>
        <div>
          <p>Cost</p>
          {props.cost}
        </div>
      </div>
    </div>
  );
};

export default Redeemed;
