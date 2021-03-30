import React from "react";


export const Redeemed = (props) => {
  

  return (
    <div>
      <img src={props.img.url} alt="" />

      <div>
        <p>{props.name}</p>
        <div>
          {props.cost}
        </div>
      </div>
    </div>
  );
};
