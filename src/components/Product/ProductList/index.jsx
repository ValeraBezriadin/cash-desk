"use client";
import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import ProductItem from "../ProductItem";
import { useProduct } from "../../Context";

const ProductList = () => {
  const { product, loadingProduct } = useProduct();
  if (loadingProduct) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
  return (
    <div>
      <div className={css.product}>
        <table className={css.product__table}>
          {!loadingProduct && (
            <thead>
              <tr className={css.product__meta}>
                <th className={css.product__title}>Edit</th>
                <th
                  className={css.product__title + " " + css.product__title_id}
                >
                  ID
                </th>
                <th
                  className={css.product__title + " " + css.product__title_name}
                >
                  Product title
                </th>
                <th className={css.product__title}>Difference</th>
                <th className={css.product__title}>Purchase price</th>
                <th className={css.product__title}>Selling price</th>
                <th className={css.product__title}>Delete</th>
              </tr>
            </thead>
          )}
          <tbody>
            {product?.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
