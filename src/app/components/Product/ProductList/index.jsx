"use client";
import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import ProductItem from "../ProductItem";
import axios from "axios";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://658325b202f747c8367b2a2c.mockapi.io/product")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={css.product}>
          <table className={css.product__table}>
            <thead>
              <tr className={css.product__meta}>
                <th className={css.product__title}>ID</th>
                <th
                  className={css.product__title + " " + css.product__title_name}
                >
                  Product title
                </th>
                <th className={css.product__title}>Difference</th>
                <th className={css.product__title}>Purchase price</th>
                <th className={css.product__title}>Selling price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  difference={item.sale_price - item.purchase_price}
                  purchase={item.purchase_price}
                  selling={item.sale_price}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;
