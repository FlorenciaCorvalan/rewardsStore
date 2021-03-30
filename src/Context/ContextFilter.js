import React, { useState, createContext } from 'react';

export const ContextFilter = createContext();

export const FilterProvider = (props) =>{
    const [filters, setFilters] =useState({
        category: 'all categories',
        price: 'all prices'

    });

    return(
        <ContextFilter.Provider value={[filters, setFilters]}>
            {props.children}
        </ContextFilter.Provider>
    );
};