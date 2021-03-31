import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";
import { Product } from "./ProductCard";
import { headers, productsUrl } from "../Context/contextAPI";
import { ProductPages } from "./ProductPages";

export default function ProductContainer() {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [productData] = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [filter] = useContext(ContextFilter);

  useEffect(() => {
    setProducts({...productData})
  }, [productData]);

  function filterPrice(x, y){
    if (filter.price === 'lowest'){
      return x.cost - y.cost;
    } else if (filter.price === 'highest'){
      return y.cost - x.cost;
    } else{
      return 0;
    }
  }

  function takeFiltered(){
    const filtered = productData.sort(filterPrice);
    setProducts(filtered);
  }

  useEffect(()=>{
    takeFiltered();
  }, [filter]);

  const lastProduct = currentPage * itemsPerPage;
  const firstProduct = lastProduct - itemsPerPage;
  //let //filtered = [];

 // productData.forEach((item) => {
   // if (category.category == "" ? true : category.category == item.category) {
     // filtered.push(item);
   // }
 // });

  const currentProducts = products.slice(firstProduct, lastProduct);

  const pagess = (pageNumber) => setCurrentPage(pageNumber);

  const MaxPages = Math.ceil(products.length / itemsPerPage);
  if (products.length && currentPage > MaxPages) pagess(MaxPages);

  return (
    <div>
      <div>
        {currentProducts.map((product) =>(   
         
            <Product {...product} key={product._id}  />
          
        ))}
      </div>
      <hr />

      <ProductPages
        historyComplete={products.length}
        itemsPerPage={itemsPerPage}
        pagess={pagess}
      />
    </div>
  );
}
