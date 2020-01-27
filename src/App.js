import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import MyCardList from "./components/MyCardList";
import Sidebar from "react-sidebar";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState({});
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
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
    <Sidebar
      sidebar={<Cart cartProduct={cartProduct} />}
      open={cartVisible}
      onSetOpen={setCartVisible}
      styles={{ sidebar: { background: "black", width: "200px" } }}
      pullRight={true}
    >
      <Container style={{ paddingRight: "100px" }}>
        <h1>My Shopping Cart</h1>
        <Button onClick={() => setCartVisible(true)}>Open cart</Button>
        <Row>
          <MyCardList
            products={products}
            cartProduct={cartProduct}
            setCartProduct={setCartProduct}
            setCartVisible={setCartVisible}
          />
        </Row>
      </Container>
    </Sidebar>
  );
};

export default App;
