import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ContextProducts";
import { ContextFilter } from "../Context/ContextFilter";
import { Product } from "./ProductCard";
import Filter from "./Filter";
import Filter2 from "./FilterCategories";
import Paginate from "./Paginate";
import Pagination from "@material-ui/lab/Pagination";

export default function ProductContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPage, setProductsPage] = useState([]);
  const [productData] = useContext(ProductContext);
  const [filter] = useContext(ContextFilter);
  const ITEMS = 16;

  useEffect(() => {
    setProductsPage({ ...productData });
  }, [productData]);

  function filterCategory(product){
    const productCategory = product.category;
		const filterCategory = filter.category;

		return (
			filterCategory === 'all categories' ||
			filterCategory === productCategory.toLowerCase()
		);
  }


  function filterPrice(x, y) {
    if (filter.price === "lowest") {
      return x.cost - y.cost;
    } else if (filter.price === "highest") {
      return y.cost - x.cost;
    } else {
      return 0;
    }
  }

  
  function takeFiltered() {
    const filteredCtgry = productData.filter(filterCategory)
    const filtered = filteredCtgry.sort(filterPrice);
    setProductsPage(filtered);
  }

  useEffect(() => {
    takeFiltered();
    // eslint-disable-next-line
  }, [filter]);

  const pagge = Math.ceil(productsPage.length / ITEMS);
  const paginated = Paginate(productsPage, ITEMS);

  function takePages(event, paged) {
    setCurrentPage(paged);
    paginated.jumpToPage(paged);
  }

  return (
    <div>
      <div>
        <div>
          <Filter />
          <Filter2 />
        </div>
        <div>
          <p>
            {currentPage} of {pagge}
          </p>
          <Pagination
            pagge={pagge}
            variant="outlined"
            page={currentPage}
            onChange={takePages}
          />
        </div>
        <div>
          {paginated.currentData().map((product) => (
            <Product {...product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
