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

const MyCard = ({ product, cartProduct, setCartProduct, setCartVisible }) => {
  const productt = product;
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

    console.log(cartProduct);
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
            <Button onClick={() => addProduct("S", productt)}>S</Button>
            <Button onClick={() => addProduct("M", productt)}>M</Button>
            <Button onClick={() => addProduct("L", productt)}>L</Button>
            <Button onClick={() => addProduct("XL", productt)}>XL</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyCard;
