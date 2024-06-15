import React, { useState } from 'react';
import { Carrusel } from '../components/Carrusel';
import { Carrusel2 } from '../components/Carrusel2';
import { Navbar } from '../components/Navbar';
import { NewProductModal } from '../components/NewProductModal';
import { Chat } from '../components/Chat';

const products1 = [
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    price: 690,
    quantity: 5,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp',
  },
  {
    name: 'Impresora 3D Creality Cr-30',
    price: 1782,
    quantity: 3,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    price: 690,
    quantity: 5,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo:
      'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp',
  },
];

const products2 = [
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-3.svg',
  },
  {
    name: 'Impresora 3D Creality Cr-30',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-4.svg',
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-5.svg',
  },
];

export const DashboardRoot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='bg-gray-900 flex flex-col gap-4'>
      <Navbar photo='src/assets/img-login.jpg' condition='0'/>
      <Carrusel2 products={products2} />
      <h1 className='text-white text-2xl font-bold text-center'>Videojuegos</h1>
      <Carrusel products={products1} />
      <h1 className='text-white text-2xl font-bold text-center'>Consolas</h1>
      <Carrusel products={products1} />
      <button
        type='button'
        onClick={() => setIsModalOpen(true)}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-24 mx-auto mb-5'
      >
        ADD
      </button>
      <NewProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div class="z-50  fixed right-0 bottom-0 mr-4 mb-8">
        <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="" />
        <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <Chat />
    </div>
  );
};
