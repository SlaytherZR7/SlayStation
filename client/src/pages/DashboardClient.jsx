import React, { useEffect, useState } from 'react';
import { Carrusel } from '../components/Carrusel';
import { Carrusel2 } from '../components/Carrusel2';
import { Navbar } from '../components/Navbar';
import { Chat } from '../components/Chat';
import { WebSocketProvider } from '../context/websocketContext';
export const DashboardClient = () => {
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
      <Carrusel2 products={videogames} />
      <h1 className='text-white text-2xl font-bold text-center'>Videojuegos</h1>
      <Carrusel products={videogames} type='Buy' />
      <h1 className='text-white text-2xl font-bold text-center'>Consolas</h1>
      <Carrusel products={consoles} type='Buy' />
       <WebSocketProvider>
        <Chat nickname='user1' photo='src\assets\support2.webp' type='Help U' />
      </WebSocketProvider>   
      </div>
  );
};

export default DashboardClient;
