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
          name='pepe el toro 3D super poderoso pitudo y chingon'
          price='12'
          description={[
            'Impresora 3D Anycubic Kobra',
            'PluPlayStation 4 Pro Star Wars Edition - Modelo: 1VSON2156',
            'Sumérgete en el universo de Star Wars con la PlayStation 4 Pro edición especial!',
            'Este exclusivo paquete te lleva a las épicas batallas de la galaxia, con un diseño completamente personalizado inspirado en el icónico juegos',
          ]}
          quantity='2'
          state='Nuevo'
          photo='https://oechsle.vteximg.com.br/arquivos/ids/9396673-1000-1000/image-d33b39767b25457ea62636be88456464.jpg?v=637920459507900000'
        />
      </div>
    </div>
  );
};

export default ProductView;