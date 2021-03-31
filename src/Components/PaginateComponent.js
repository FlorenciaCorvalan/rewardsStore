import React from "react";

const PaginationComponent = ({ itemsPerPage, list, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(list / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumber.map((number) => {
          return (
            <li key={number}>
              <button type="button" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginationComponent;
