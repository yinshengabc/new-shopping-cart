import React, { useEffect, useState } from "react";
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

const MyCard = ({ product }) => {
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
            <Button onclick={() => ChooseSize("S", product)}>S</Button>
            <Button onclick={() => ChooseSize("M", product)}>M</Button>
            <Button onclick={() => ChooseSize("L", product)}>L</Button>
            <Button onclick={() => ChooseSize("XL", product)}>XL</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

const ChooseSize = ({ size, product }) => {
  return (
    <Card>
      <CardImg
        src={"data/products/" + product.sku + "_2.jpg"}
        alt="product pics"
      />
      <CardText>{product.title}</CardText>
      <CardText>{size}</CardText>
    </Card>
  );
};

export default MyCard;
export { ChooseSize };
