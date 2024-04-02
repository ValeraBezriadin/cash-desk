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
import { toast } from "react-toastify";

const ProductItem = ({ item }) => {
  const [activePopup, setActivePopup] = useState(false);
  const { fetchProduct } = useProduct();
  const { id, productName, purchasePrice, sellingPrice } = item;
  const difference = sellingPrice - purchasePrice;

  const notify = (name) =>
    toast.success(name, {
      position: "bottom-right",
      autoClose: 3000,
      pauseOnHover: false,
    });

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${PRODUCT_URL}/${id}`);

      if (response.status >= 200 && response.status < 300) {
        notify("Succesfuly delete");
        fetchProduct();
      }
    } catch (error) {
      console.error("Error delete product", error);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };
  return (
    <>
      <tr className={css.product__tr}>
        <td className={css.product__td}>
          <button
            className={css.product__icon}
            onClick={() => setActivePopup(true)}
          >
            <FaEdit size={30} />
          </button>
          <PopUp activePopup={activePopup} setActivePopup={setActivePopup}>
            <AddProduct
              edit={true}
              setActivePopup1={setActivePopup}
              item={item}
            />
          </PopUp>
        </td>
        <td className={css.product__td}>{id} </td>
        <td
          className={css.product__td + " " + css.produc__name}
          onClick={() => copyToClipboard(productName)}
        >
          {productName}
        </td>
        <td className={css.product__td}>{difference}</td>
        <td className={css.product__td}>{purchasePrice}</td>
        <td className={css.product__td}>{sellingPrice}</td>
        <td className={css.product__td}>
          <button className={css.product__icon} onClick={() => handleDelete()}>
            <MdDelete size={30} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
