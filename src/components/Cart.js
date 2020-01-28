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
  let num = cartProduct.reduce((sum, one) => sum + one.price * one.quantity, 0);
  return cartProduct.length > 0 ? num.toFixed(2) : 0;
};

const Cart = ({
  cartProduct,
  setCartVisible,
  setCartProduct,
  inventory,
  setInventory
}) => {
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
          inventory={inventory}
          setInventory={setInventory}
        />
      ))}
      <p style={{ color: "white", textAlign: "center" }}>
        subtotal: ${subtotal({ cartProduct })}
      </p>
    </div>
  );
};

const ShoppingCard = ({
  product,
  setCartProduct,
  cartProduct,
  inventory,
  setInventory
}) => {
  const removeProduct = () => {
    setCartProduct(
      cartProduct.filter(
        productt =>
          product.sku !== productt.sku || product.size !== productt.size
      )
    );
    inventory[[product.sku]][product.size] += product.quantity;
    setInventory(inventory);
  };

  const removeOne = () => {
    setCartProduct(
      cartProduct.map(productt =>
        product.sku === productt.sku &&
        product.size === productt.size &&
        productt.quantity > 1
          ? { ...productt, quantity: productt.quantity - 1 }
          : productt
      )
    );
    inventory[[product.sku]][product.size] += 1;
    setInventory(inventory);
  };

  const addOne = () => {
    setCartProduct(
      cartProduct.map(productt =>
        product.sku === productt.sku && product.size === productt.size
          ? { ...productt, quantity: productt.quantity + 1 }
          : productt
      )
    );
    inventory[[product.sku]][product.size] -= 1;
    setInventory(inventory);
  };

  const checkAddButton = () => {
    if (
      Object.keys(inventory).length > 0 &&
      inventory[[product.sku]][product.size] !== 0
    )
      return true;
    else return false;
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
        {checkAddButton() ? (
          <Button outline color="secondary" size="sm" onClick={() => addOne()}>
            +
          </Button>
        ) : (
          <Button disabled />
        )}
        <Button
          outline
          color="secondary"
          size="sm"
          onClick={() => removeProduct()}
        >
          ×
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default Cart;
