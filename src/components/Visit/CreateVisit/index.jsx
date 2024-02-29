"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { useProduct } from "@/components/Context";
import { FaPlus } from "react-icons/fa";

const CreateVisit = () => {
  const [visit, setVisit] = useState([]);
  const { product } = useProduct();
  const handleAdd = (product) => {
    setVisit((prevVisit) => [...prevVisit, { ...product, count: 1 }]);
    console.log(visit);
  };

  return (
    <div className={css.visit__wrapper}>
      <ul className={css.left__list}>
        {product.map((i) => (
          <li key={i.id} className={css.left__item}>
            <p className={css.left__name}>{i.productName}</p>
            <p className={css.left__price}>{i.sellingPrice}</p>
            <button className={css.left__btn} onClick={handleAdd}>
              <FaPlus size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateVisit;
