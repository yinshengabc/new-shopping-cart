import React from "react";
import MyCard from "./MyCard";

const MyCardList = ({ products }) => {
  return products.map(product => <MyCard product={product} />);
};

export default MyCardList;
