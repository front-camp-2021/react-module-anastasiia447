import React from 'react';
import './App.css';

import Card from './solution/index.js';
import { products } from './fixtures/products.js';

const App = () => (
  <>
    {products.map((product, i) => (
      <Card key={i} {...product} />
	))}
  </>
);

export default App;
