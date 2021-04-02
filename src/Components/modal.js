import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import ok from "../assets/OK_icon.svg";
import error from "../assets/error.svg";

const Modal1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { productRedeem, userPoints, productCost, productId, success } = props;

  function opens() {
    setIsOpen(true);
  }
  function closes() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        id="now"
        onClick={() => {
          opens();
          productRedeem(productId, productCost, userPoints);
        }}
      >
        Redeem now
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        className="exito"
        onClose={closes}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div id="modal">
            {success ? (
              <div>
                <p>Successfully redeemed</p>
                <img src={ok} alt="ok" id="ok" />
              </div>
            ) : (
              <div>
                <p id="bad">"Error, Try again"</p>
                <img src={error} alt="error, intentalo de nuevo" id="error" />
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Modal1;
