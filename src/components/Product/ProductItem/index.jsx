"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { MdDelete } from "react-icons/md";
import { PRODUCT_URL } from "@/utils/constans";
import { FaEdit } from "react-icons/fa";
import PopUp from "@/components/Product/PopUp";
import axios from "axios";
import { useProduct } from "@/components/Context";
import AddProduct from "../AddProduct";

const ProductItem = ({ item }) => {
  const { id, productName, purchasePrice, sellingPrice } = item;
  const difference = sellingPrice - purchasePrice;

  const [activePopup, setActivePopup] = useState(false);
  const { fetchProduct } = useProduct();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${PRODUCT_URL}/${id}`);

      if (response.status >= 200 && response.status < 300) {
        fetchProduct();
      }
    } catch (error) {
      console.error("Error delete product", error);
    }
  };

  return (
    <>
      <tr className={css.product__tr}>
        <td>
          <button
            className={css.product__icon}
            onClick={() => setActivePopup(true)}
          >
            <FaEdit size={30} />
          </button>
          <PopUp activePopup={activePopup} setActivePopup={setActivePopup}>
            <AddProduct edit={true} item={item} />
          </PopUp>
        </td>
        <td>{id} </td>
        <td className={css.product__td}>{productName}</td>
        <td>{difference}</td>
        <td>{purchasePrice}</td>
        <td>{sellingPrice}</td>
        <td>
          <button className={css.product__icon} onClick={() => handleDelete()}>
            <MdDelete size={30} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
