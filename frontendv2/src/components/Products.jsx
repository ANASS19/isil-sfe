import React, { useState, useEffect } from "react";
import { ApiTopProduct } from '../apifolder/TopProducts';
import Product from './Product';
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [ProductData, setProductData] = useState([]);
  const [FilterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get("/api/Products/");
      setProductData(data);
    }

    fetchProduct();
  }, []);

  useEffect(() => {
    setFilterProduct(
      ProductData.filter((item) => {
        return item.category === cat;
      })
    );
  }, [ProductData, cat]);

  useEffect(() => {
    if (sort === "rating") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.rating - b.rating));
    } else if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className="flex flex-wrap p-5">
      {cat
        ? FilterProduct.map((product) => (
            <Product item={product} key={product.id} />
          ))
        : ProductData.slice(0, 1000).map((item) => (
            <Product item={item} key={item.id} />
          ))}
    </div>
  );
};

export default Products