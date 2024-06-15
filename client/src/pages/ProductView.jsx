import React from 'react';
import { Navbar } from '../components/Navbar';
import { ProductCard } from '../components/ProductCard';

export const ProductView = () => {
  return (
    <div className='min-h-screen bg-gray-800'>
        {/* Header en la parte superior */}
      <header className='bg-gray-800 text-white'>
        <Navbar photo='src/assets/img-login.jpg' />
      </header>
      <div className='flex flex-col items-center justify-center'>
        <ProductCard
          name='PlayStation 4 Slim 1TB Console - Black'
          price='420'
          description={[
            'The new lighter and thinner PlayStation4 system has a 1TB hard drive for all the best games, TV, music and more.'
          ]}
          quantity='2'
          state='New'
          photo='https://amazingame.ru/upload/iblock/b3f/r9ttkkfui933d8tn8gy53498xu623yqz/508736_1.jpg'
        />
      </div>
    </div>
  );
};

export default ProductView;