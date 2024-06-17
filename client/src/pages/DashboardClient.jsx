import React, { useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { Carrusel2 } from "../components/Carrusel2";
import { Navbar } from "../components/Navbar";
import { NewProductModal } from "../components/NewProductModal";
import { Chat } from "../components/Chat";

const products1 = [
  {
    name: "Impresora 3D Anycubic Kobra Plus",
    price: 690,
    quantity: 5,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp",
  },
  {
    name: "Impresora 3D Creality Cr-30",
    price: 1782,
    quantity: 3,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
  {
    name: "Filamento Pla+ Impresora 3D",
    price: 15,
    quantity: 20,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
  },
];
const products2 = [
  {
    name: "Impresora 3D Anycubic Kobra Plus",
    photo: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  },
  {
    name: "Impresora 3D Creality Cr-30",
    photo: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  },
];

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
      <Carrusel2 products={products2} />
      <h1 className="text-white text-2xl font-bold text-center">Videojuegos</h1>
      <Carrusel products={products1} type="Buy" />
      <h1 className="text-white text-2xl font-bold text-center">Consolas</h1>
      <Carrusel products={products1} type="Buy"/>
      <Chat photo="src\assets\support2.webp" type="Help U" />
    </div>
  );
};

export default DashboardClient;
