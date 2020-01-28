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
    inventory[[productt.sku]][size] -= 1;
    setInventory(inventory);
  };

  const checkInStock = (size, productt) => {
    if (
      Object.keys(inventory).length > 0 &&
      inventory[[productt.sku]][size] !== 0
    )
      return true;
    else return false;
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
            {sizes.map(size =>
              checkInStock(size, productt) ? (
                <Button onClick={() => addProduct(size, productt)}>
                  {size}
                </Button>
              ) : (
                <Button disabled>-</Button>
              )
            )}
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyCard;
