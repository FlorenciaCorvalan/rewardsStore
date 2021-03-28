import React, { useState } from "react";

export default function pagination(data, itemsPerPage){
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.lenght / itemsPerPage);
    
    function currentData() {
        const begin = (currentPage-1)*itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin,end);
    }
    
    function previous(){
        setCurrentPage((currentPage) => Math.max(currentPage-1,1)); 
    }
    function nextPage(){
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function jumpToPage(page){
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    }

    return{
        jumpToPage,
        nextPage,
        previous,
        currentData,
        currentPage,
        maxPage
    }
}

