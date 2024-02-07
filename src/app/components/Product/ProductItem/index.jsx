import React from "react";
import css from "./style.module.css";

const ProductItem = ({ key, id, title, difference, purchase, selling }) => {
  return (
    <>
      <tr className={css.product__tr} key={key}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{difference}</td>
        <td>{purchase}</td>
        <td>{selling}</td>
      </tr>
    </>
  );
};

export default ProductItem;
