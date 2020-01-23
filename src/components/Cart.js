import React from "react";
import MyProductList from "./MyProductList";
import { Button } from "reactstrap";
import ChooseSize from "./MyCard";

const Cart = () => {
  return (
    <div>
      <p>total price:</p>
      <Button block>Checkout</Button>
    </div>
  );
};

export default Cart;
