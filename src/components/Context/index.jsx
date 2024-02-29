"use client";
import { PRODUCT_URL } from "@/utils/constans";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContex = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(PRODUCT_URL);
      setProduct(response.data);
      setLoadingProduct(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoadingProduct(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductContex.Provider
      value={{
        product,
        loadingProduct,
        fetchProduct,
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};

export default ProductProvider;

export function useProduct() {
  const contex = useContext(ProductContex);
  if (!contex) {
    throw new Error("useProduct must be used with in a ProductProvider");
  }
  return contex;
}
