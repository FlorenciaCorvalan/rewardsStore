import { useState } from "react";
//import Modal from "@material-ui/core/Modal";

const Modal1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productRedeem, userPoints, productId, productCost,  success } = props;

  function opens() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          opens();
          productRedeem(productId, productCost, userPoints);
        }}
      >
        Redeem
      </button>
      <div
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        isOpen={isOpen}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <div>{success ? "Redeem succes" : "Error"}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
