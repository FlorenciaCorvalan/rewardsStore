import React from "react";
import Loading from "../Loads";

export const Redeemed = ({ history, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => {
            return (
              <tr scope="row">
                <td>{item.img.url}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
