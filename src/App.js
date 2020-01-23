import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import MyCardList from "./components/MyCardList";
import Sidebar from "react-sidebar";
import { Button } from "reactstrap";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState({});
  const [cartVisible, setCartVisible] = useState(false);
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
    <Container style={{ paddingRight: "100px" }}>
      <h1>My Shopping Cart</h1>
      <Sidebar
        sidebar={<Cart />}
        open={cartVisible}
        //docked={sidebarDocked}
        onSetOpen={setCartVisible}
        styles={{ sidebar: { background: "white", width: "150px" } }}
        pullRight={true}
      >
        <div />
      </Sidebar>
      <Row>
        <MyCardList products={products} />
      </Row>
      <Button onClick={() => setCartVisible(true)}>Open cart</Button>
    </Container>
  );
};

export default App;
