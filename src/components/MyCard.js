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
  setInventory,
  user
}) => {
  const sizes = ["S", "M", "L", "XL"];
  const addProduct = (size, product) => {
    setCartVisible(true);

    setCartProduct(
      cartProduct.some(
        item => item.title === product.title && item.size === size
      )
        ? cartProduct.map(item =>
            item.title === product.title && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [{ ...product, size, quantity: 1 }].concat(cartProduct)
    );
    inventory[[product.sku]][size] -= 1;
    setInventory(inventory);
  };

  const checkInStock = (size, product) => {
    if (
      Object.keys(inventory).length > 0 &&
      inventory[[product.sku]][size] !== 0
    )
      return true;
    else return false;
  };

  return (
    <Col xs="3" sm="3">
      <Card
        body
        className="text-center"
        style={{ height: "500", margin: "10px" }}
      >
        <CardBody>
          <CardImg
            src={"data/products/" + product.sku + "_1.jpg"}
            alt="product pics"
          />
          {user ? (
            <CardTitle style={{ height: "55px", fontSize: "15px" }}>
              {product.title}
            </CardTitle>
          ) : (
            <CardTitle style={{ height: "35px", fontSize: "15px" }}>
              {product.title}
            </CardTitle>
          )}
          <CardText style={{ fontFamily: "Ink Free" }}>
            {"$" + product.price}
          </CardText>
          <ButtonGroup size="sm">
            {sizes.map(size =>
              checkInStock(size, product) ? (
                <Button onClick={() => addProduct(size, product)}>
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
