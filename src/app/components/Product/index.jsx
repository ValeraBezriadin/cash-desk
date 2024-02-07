import React from "react";
import css from "./style.module.css";
import ProductList from "./ProductList";
const Product = () => {
  return (
    <div className={css.product}>
      <div className="container">
        <div className={css.product__wrapper}>
          <div className={css.product__nav}>
            <button className={css.product__btn}>Create product</button>
          </div>
          <div className={css.prodcut__inner}>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
