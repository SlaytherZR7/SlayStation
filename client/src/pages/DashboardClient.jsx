import React, { useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { Carrusel2 } from "../components/Carrusel2";
import { Navbar } from "../components/Navbar";
import { NewProductModal } from "../components/NewProductModal";
import { Chat } from "../components/Chat";

export const DashboardClient = () => {
  const [products, setProducts] = useState([]);
  useState(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-gray-900 flex flex-col gap-4">
      <Navbar photo="src/assets/img-login.jpg" condition="0" />
      <Carrusel2 products={products} />
      <h1 className="text-white text-2xl font-bold text-center">Videojuegos</h1>
      <Carrusel products={products} />
      <h1 className="text-white text-2xl font-bold text-center">Consolas</h1>
      <Carrusel products={products} />
      <Chat type="Help U" />
    </div>
  );
};

export default DashboardClient;
