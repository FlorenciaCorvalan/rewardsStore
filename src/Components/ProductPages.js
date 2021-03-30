import React from "react";

export const ProductPages = ({itemsPerPage, pagess, historyComplete}) => {
    const pageNumber =[];
    let i = 1;
    for (i; i<= Math.ceil(historyComplete / itemsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul>{pageNumber.map((number) =>{
                return(
                    <li key={number}>
                        <button type="button" onClick={() => pagess(number)}>{number}</button>
                    </li>
                );
            })}</ul>
        </nav>
    );
}