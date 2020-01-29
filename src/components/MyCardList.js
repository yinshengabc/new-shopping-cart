import React from "react";
import MyCard from "./MyCard";

const MyCardList = ({
  products,
  cartProduct,
  setCartProduct,
  setCartVisible,
  inventory,
  setInventory,
  user
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
      user={user}
    />
  ));
};

export default MyCardList;
