import React from "react";
import MyCard from "./MyCard";

const MyCardList = ({
  products,
  cartProduct,
  setCartProduct,
  setCartVisible,
  inventory,
  setInventory
}) => {
  return products.map(product => (
    <MyCard
      key={product.sku}
      product={product}
      cartProduct={cartProduct}
      setCartProduct={setCartProduct}
      setCartVisible={setCartVisible}
      inventory={inventory}
      setInventory={setInventory}
    />
  ));
};

export default MyCardList;
