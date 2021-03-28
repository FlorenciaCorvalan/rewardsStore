import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { postCoins } from "../Context/context";
import Loading from "./Loads";

export default function Points() {
  const [window, setWindow] = useState("");
  const { setPoints } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() =>
            postCoins(1000)
              .then(
                (data) => (
                  setWindow(data.window),
                  setPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
        >
          1000
        </button>

        <button
          onClick={() =>
            postCoins(5000)
              .then(
                (data) => (
                  setWindow(data.window),
                  setPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
        >
          5000
        </button>

        <button
          onClick={() =>
            postCoins(7500)
              .then(
                (data) => (
                  setWindow(data.window),
                  setPoints(data["New Points"]),
                  setLoading(true)
                )
              )
              .then(() => setLoading(false))
          }
        >
          7500
        </button>
      </div>

      <p>{loading == true ? <Loading /> : <p className="CoinsAdded">{window}</p>}</p>
    </>
  );
}
