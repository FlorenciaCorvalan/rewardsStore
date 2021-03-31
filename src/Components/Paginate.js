import { useState } from "react";

const Paginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.lenght / itemsPerPage);



  function jumpToPage(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  return {
    jumpToPage,
    currentData,
    currentPage,
    maxPage,
  };
}

export default Paginate;
