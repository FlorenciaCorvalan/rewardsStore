import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Product } from "./ProductCard";
import { headers, productsUrl } from "../../Context/context";
import { ProductPages } from "./ProductPages";

export default function ProductContainer() {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productData, setProductData, category } = useContext(UserContext);

  useEffect(() => {
    const fetchProductList = async () => {
      setLoading(true);
      const response = await fetch(productsUrl, { method: "GET", headers });
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      setProductData(data);
    };
    fetchProductList();
  }, []);

  const lastProduct = currentPage * itemsPerPage;
  const firstProduct = lastProduct - itemsPerPage;
  let filtered = [];

  productData.forEach((item) => {
    if (category.category == "" ? true : category.category == item.category) {
      filtered.push(item);
    }
  });

  const currentProducts = filtered.slice(firstProduct, lastProduct);

  const pagess = (pageNumber) => setCurrentPage(pageNumber);

  const MaxPages = Math.ceil(filtered.length / itemsPerPage);
  if (filtered.length && currentPage > MaxPages) pagess(MaxPages);

  return (
    <div>
      <div>
        {currentProducts.map((item, index) => {
          return (
            <Product data={item} key={`${item}-${index}`} loading={loading} />
          );
        })}
      </div>
      <hr />

      <ProductPages
        historyComplete={filtered.length}
        itemsPerPage={itemsPerPage}
        pagess={pagess}
      />
    </div>
  );
}
