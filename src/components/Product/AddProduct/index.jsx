"use client";
import React, { useState } from "react";
import css from "./style.module.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { PRODUCT_URL } from "@/utils/constans";
import { useProduct } from "@/components/Context";
import { toast } from "react-toastify";

const AddProduct = ({ edit, item, setActivePopup, setActivePopup1 }) => {
  const { fetchProduct } = useProduct();
  const [formData, setFormData] = useState(
    edit
      ? { ...item }
      : {
          productName: "",
          purchasePrice: 0,
          sellingPrice: 0,
        }
  );
  const notify = (name) =>
    toast.success(name, {
      position: "bottom-right",
      autoClose: 3000,
      pauseOnHover: false,
    });
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    const newValue = type === "number" ? Math.max(0, +value) : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const isDisbled =
    !formData.productName ||
    formData.purchasePrice - formData.sellingPrice >= 0 ||
    formData.purchasePrice <= 0 ||
    formData.sellingPrice <= 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(PRODUCT_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      if (response) {
        notify("Succesfuly create");
        setActivePopup(false);
        setFormData({
          productName: "",
          purchasePrice: 0,
          sellingPrice: 0,
        });
      }
      fetchProduct();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = async (event) => {
    try {
      event.preventDefault();
      const respons = await axios.put(
        `${PRODUCT_URL}/${formData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (respons) {
        notify("Succesfuly edit");
        setActivePopup1(false);
        fetchProduct();
      }
    } catch (error) {
      console.error("Error with editing product", error);
    }
  };
  return (
    <form
      className={css.product__form}
      onSubmit={edit ? handleEdit : handleSubmit}
    >
      <label className={css.product__label}>
        <span>Product name</span>
        <input
          className={css.product__input}
          title="Product name"
          placeholder="Product name"
          type="text"
          name={"productName"}
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.product__label}>
        <span>Purchase price</span>
        <input
          className={css.product__input}
          title="Purchase price"
          placeholder="Purchase price"
          type="number"
          min="0"
          name={"purchasePrice"}
          value={formData.purchasePrice}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.product__label}>
        <span>Selling price</span>
        <input
          className={css.product__input}
          title="Selling price"
          placeholder="Selling price"
          type="number"
          min="0"
          name={"sellingPrice"}
          value={formData.sellingPrice}
          onChange={handleChange}
          required
        />
      </label>
      <button
        className={css.product__submit}
        type="submit"
        disabled={isDisbled}
      >
        {edit ? "Edit  product" : "Create product"}
      </button>
    </form>
  );
};

export default AddProduct;
