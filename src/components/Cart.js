//need to do : roundsubtotal

import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Button,
  ButtonGroup
} from "reactstrap";

const subtotal = ({ cartProduct }) => {
  return cartProduct.length > 0
    ? cartProduct.reduce((sum, one) => sum + one.price * one.quantity, 0)
    : 0;
};

const Cart = ({ cartProduct, setCartVisible, setCartProduct }) => {
  return (
    <div>
      <Button
        close
        style={{ float: "left", backgroundColor: "white" }}
        onClick={() => setCartVisible(false)}
      />
      <Button block>CHECKOUT</Button>
      {cartProduct.map(product => (
        <ShoppingCard
          key={product.title + product.size}
          product={product}
          setCartProduct={setCartProduct}
          cartProduct={cartProduct}
        />
      ))}
      <p style={{ color: "white", textAlign: "center" }}>
        subtotal:{subtotal({ cartProduct })}
      </p>
    </div>
  );
};

const ShoppingCard = ({ product, setCartProduct, cartProduct }) => {
  const removeOne = () => {
    setCartProduct(
      cartProduct.map(productt =>
        product.sku === productt.sku && product.size === productt.size
          ? productt.quantity > 1
            ? { ...productt, quantity: productt.quantity - 1 }
            : cartProduct.filter(
                productt =>
                  !(
                    product.sku === productt.sku &&
                    product.size === productt.size
                  )
              )
          : productt
      )
    );
  };

  const addOne = () => {
    setCartProduct(
      cartProduct.map(productt =>
        product.sku === productt.sku && product.size === productt.size
          ? { ...productt, quantity: productt.quantity + 1 }
          : productt
      )
    );
  };

  return (
    <Card body className="text-center">
      <CardImg
        src={"data/products/" + product.sku + "_2.jpg"}
        alt="product pics"
        style={{ height: "75px", width: "50px", marginLeft: "50px" }}
      />
      <CardTitle>{product.title + "(" + product.size + ")"}</CardTitle>
      <CardText>{"$" + product.price + "✖" + product.quantity}</CardText>
      <ButtonGroup>
        <Button outline color="secondary" size="sm" onClick={() => removeOne()}>
          -
        </Button>
        <Button outline color="secondary" size="sm" onClick={() => addOne()}>
          +
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default Cart;
