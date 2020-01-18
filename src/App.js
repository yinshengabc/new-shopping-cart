import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import MyCardList from "./components/MyCardList";

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        <MyCardList products={products} />
      </Row>
    </Container>
  );
};

export default App;
