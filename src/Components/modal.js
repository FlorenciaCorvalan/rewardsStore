import { useState } from "react";
import Modal from "@material-ui/core/Modal";

const Modal1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productRedeem, userPoints, productCost, productId,  success } = props;

  function opens() {
    setIsOpen(true);
  }
  function closes(){
    setIsOpen(false);
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        isOpen={isOpen}
        onClose={closes}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <div>{success ? "Redeem succes" : "Error"}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Modal1;
