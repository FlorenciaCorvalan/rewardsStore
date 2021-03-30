import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { getRedeem } from "../../Context/contextAPI";
import Loading from "../Loads";
import { createPortal } from "react-dom";

const addCoins = document.getElementById("Coins");

export const Redeem = ({ isOpen, hide, id, product }) => {
  const { points, setPoints } = useContext(UserContext);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  return isOpen
    ? createPortal(
        <>
          <div>
            <div>
              <div>
                <div>
                  <h6>Redeem</h6>
                  <button
                    onClick={() => {
                      hide();
                      setMensaje("");
                    }}
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div>
                  Confirm
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        try {
                          getRedeem(id)
                            .then(
                              (data) => (
                                setMensaje(data.mensaje),
                                setLoading(true),
                                points < product.cost
                                  ? setPoints(points)
                                  : setPoints(points - product.cost),
                                setError(data.error)
                              )
                            )
                            .then(() => setLoading(false));
                        } catch (error) {
                          setError(error);
                        }
                      }}
                    >
                      Yes
                    </button>
                    <button type="button" onClick={hide}>Cancel</button>
                  </div>
                  {loading==true ? (<Loading />) : 
                  (<p>{mensaje ? mensaje:error}</p>)}
                </div>
              </div>
            </div>
          </div>
        </>, addCoins
      )
    : null;
};
