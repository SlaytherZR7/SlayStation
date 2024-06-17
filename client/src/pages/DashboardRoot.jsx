import React, { useState } from "react";
import { Carrusel } from "../components/Carrusel";
import { Navbar } from "../components/Navbar";
import { NewProductModal } from "../components/NewProductModal";

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
  {
    name: "Impresora 3D Anycubic Kobra Plus",
    price: 690,
    quantity: 5,
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp",
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
  }, "https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp",
];



export const DashboardRoot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-gray-900 flex flex-col gap-4">
      <Navbar photo="src/assets/img-login.jpg" condition="0" />
      <h1 className="text-white text-2xl font-bold text-center">Videogames</h1>
      <Carrusel products={products1} type="Edit" />
      <h1 className="text-white text-2xl font-bold text-center">Consoles</h1>
      <Carrusel products={products1} type="Edit"/>
  
      // Add the Chat component here
      <div onClick={() => setIsModalOpen(true)} class="fixed z-50 w-full max-w-lg bg-white border border-gray-200 rounded-full bottom-4 left-1/2 transform -translate-x-1/2 dark:bg-gray-700 dark:border-gray-600 flex items-center justify-center h-16">
        <button
          data-tooltip-target="tooltip-new"
          type="button"
          class="w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span class="sr-only">New item</span>
        </button>
      </div>
      <NewProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
export default DashboardRoot;
