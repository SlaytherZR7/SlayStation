import React from 'react';
import { Card } from './components/card';

export const App = () => {
  return (
    <div>
      <h1>SlayStation</h1>
      <Card
        name='Apple Watch'
        quantity={10}
        price={55}
        photo='https://flowbite.com/docs/images/products/apple-watch.png'
      />
    </div>
  );
};
