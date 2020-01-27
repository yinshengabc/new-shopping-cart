import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  ButtonGroup,
  Button
} from "reactstrap";
/*
<ButtonGroup size="sm">
{sizes.map(size =>
  checkInStock((size = { size }), productt) ? (
    <Button onClick={() => addProduct(size, productt)}>
      {size}
    </Button>
  ) : (
    <Button disabled />
  )
)}
</ButtonGroup>
*/
const MyCard = ({
  product,
  cartProduct,
  setCartProduct,
  setCartVisible,
  inventory,
  setInventory
}) => {
  const productt = product;
  const sizes = ["S", "M", "L", "XL"];
  const addProduct = (size, productt) => {
    setCartVisible(true);

    setCartProduct(
      cartProduct.some(
        product => product.title === productt.title && product.size === size
      )
        ? cartProduct.map(product =>
            product.title === productt.title && product.size === size
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [{ ...productt, size, quantity: 1 }].concat(cartProduct)
    );
  };
  const checkInStock = (size, productt) => {
    console.log(inventory[productt.sku][size]);
  };

  return (
    <Col xs="3" sm="3">
      <Card
        body
        className="text-center"
        style={{ height: "450", margin: "10px" }}
      >
        <CardBody>
          <CardImg
            src={"data/products/" + product.sku + "_1.jpg"}
            alt="product pics"
          />
          <CardTitle style={{ height: "40px" }}>{product.title}</CardTitle>
          <CardText>{"$" + product.price}</CardText>
          <ButtonGroup size="sm">
            {sizes.map(size => (
              <Button onClick={() => addProduct(size, productt)}>{size}</Button>
            ))}
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyCard;
