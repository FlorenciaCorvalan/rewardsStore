import React from "react";
import { createPortal } from "react-dom";
import Points from "../Points";

const addCoins = document.getElementById("Coins");
export default function Coins({ clicka, hide }) {
  return clicka
    ? createPortal(
        <>
          <div>
            <div>
              <div>
                <div>
                  <h6>How many coins do you want to add?</h6>
                  <button onClick={hide}>
                    <span aria-hidden="true">Close</span>
                  </button>
                  <div>
                    <Points />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>,
        addCoins
      )
    : null;
}
