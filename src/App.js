import React, { useEffect, useState } from 'react';
import MyCard from './components/uiDesign';
import {Container,Row} from 'reactstrap';

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
    { products.map(product => <MyCard product={product} />)}
    </Row>
    </Container>
  );
};

export default App;