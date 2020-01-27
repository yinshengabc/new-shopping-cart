import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  Button
} from "reactstrap";

const subtotal = ({ cartProduct }) => {
  return cartProduct.length > 0
    ? cartProduct.reduce((sum, one) => sum + one.price * one.quantity, 0)
    : 0;
};

const Cart = ({ cartProduct }) => {
  return (
    <div>
      <Button block>CHECKOUT</Button>
      {cartProduct.map(product => (
        <ShoppingCard key={product.title + product.size} product={product} />
      ))}
      <p style={{ color: "white", textAlign: "center" }}>
        subtotal:{subtotal({ cartProduct })}
      </p>
    </div>
  );
};

const ShoppingCard = ({ product }) => {
  return (
    <Card body className="text-center">
      <CardImg
        src={"data/products/" + product.sku + "_2.jpg"}
        alt="product pics"
      />

      <CardTitle>{product.title + "(" + product.size + ")"}</CardTitle>
      <CardText>{"$" + product.price + "✖" + product.quantity}</CardText>
    </Card>
  );
};

export default Cart;
