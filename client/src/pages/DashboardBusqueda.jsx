import React, { useEffect, useState } from 'react';
import { Carrusel3 } from "../components/Carrusel3";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const DashboardBusqueda = () => {
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

  // Combina videojuegos y consolas en un solo array
  const combinedProducts = [...videogames, ...consoles];

  return (
    <div className='grid grid-rows-[auto_1fr] grid-cols-1 h-full'>
      {/* Header en la parte superior */}
      <header className='bg-gray-800 text-white p-4'>
        <Navbar photo='src/assets/img-login.jpg' />
      </header>
      
      {/* Contenedor principal con Sidebar y Carrusel */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] h-full dark:bg-gray-800">
        <aside className="hidden md:block dark:bg-gray-800">
          <Sidebar />
        </aside>

        <main className="dark:bg-gray-800 p-4">
          <Carrusel3 products={combinedProducts} />
        </main>
      </div>
    </div>
  );
};

export default DashboardBusqueda;
