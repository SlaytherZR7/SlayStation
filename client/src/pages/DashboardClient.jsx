import React, { useEffect, useState } from 'react';
import { Carrusel } from '../components/Carrusel';
import { Carrusel2 } from '../components/Carrusel2';
import { Navbar } from '../components/Navbar';
import { NewProductModal } from '../components/NewProductModal';
import { Chat } from '../components/Chat';

export const DashboardClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videogames, setVideogames] = useState([]);
  const [consoles, setConsoles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products?category=2')
      .then((res) => res.json())
      .then((data) => setVideogames(data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/products?category=1')
      .then((res) => res.json())
      .then((data) => setConsoles(data));
  }, []);
  return (
    <div className='bg-gray-900 flex flex-col gap-4'>
      <Navbar photo='src/assets/img-login.jpg' condition='0' />
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
      <Chat />
    </div>
  );
};

export default DashboardClient;
