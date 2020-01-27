import React from "react";
import MyCard from "./MyCard";

const MyCardList = ({
  products,
  cartProduct,
  setCartProduct,
  setCartVisible
}) => {
  return products.map(product => (
    <MyCard
      key={product.sku}
      product={product}
      cartProduct={cartProduct}
      setCartProduct={setCartProduct}
      setCartVisible={setCartVisible}
    />
  ));
};

export default MyCardList;
