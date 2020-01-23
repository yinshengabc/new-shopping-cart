import React from "react";
import ChooseSize from "./MyCard";

const MyProductList = ({ products }) => {
  return products.map(product => (
    <ChooseSize key={product.sku} product={product} />
  ));
};

export default MyProductList;
