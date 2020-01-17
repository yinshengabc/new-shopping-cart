import React from 'react';
import {Col,Card, CardImg, CardBody, CardTitle, CardText, CardLink,Button} from 'reactstrap';

const MyCard = ({product}) => {
    return (

            <Col xs="3">
            <Card body className = "text-center">
                <CardImg src = {"data/products/" + product.sku + "_2.jpg"} alt="product pics"/>
                <CardBody >
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>{"$" + product.price}</CardText>
                    <CardLink href="#">S</CardLink>
                    <CardLink href="#">M</CardLink>
                    <CardLink href="#">L</CardLink>
                    <CardLink href="#">XL</CardLink>
                    <Button vertical block color="secondary">Add to cart</Button>
                </CardBody>
            </Card>
            </Col>

    );
  };



export default MyCard;