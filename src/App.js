import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import MyCardList from "./components/MyCardList";
import Sidebar from "react-sidebar";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState({});
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);
  const [inventory, setInventory] = useState({});
  const products = Object.values(data);
  // const inventories = Object.values(inventory);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      //console.log(json);
      setData(json);
    };
    const fetchInventories = async () => {
      const response = await fetch("./data/inventory.json");
      const json = await response.json();
      //console.log(json);
      setInventory(json);
    };
    fetchProducts();
    fetchInventories();
  }, []);

  return (
    <Sidebar
      sidebar={
        <Cart
          cartProduct={cartProduct}
          setCartVisible={setCartVisible}
          setCartProduct={setCartProduct}
          inventory={inventory}
          setInventory={setInventory}
        />
      }
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
            inventory={inventory}
            setInventory={setInventory}
          />
        </Row>
      </Container>
    </Sidebar>
  );
};

export default App;
