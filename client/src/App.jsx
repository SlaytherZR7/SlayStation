import { SignUp } from './pages/Signup';

import {Chat} from './components/Chat';
import {Input} from './components/Input';
import {Carrusel} from './components/Carrusel';
import { Carrusel2 } from './components/Carrusel2';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
const products = [
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    price: 690,
    quantity: 5,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp'
  },
  {
    name: 'Impresora 3D Creality Cr-30',
    price: 1782,
    quantity: 3,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  }
  ,
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  }
  ,
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    price: 690,
    quantity: 5,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_810219-MLA50000033018_052022-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    price: 15,
    quantity: 20,
    photo: 'https://http2.mlstatic.com/D_NQ_NP_740652-MEC73002538686_112023-O.webp'
  }
];

const products2=[
  {
    name: 'Impresora 3D Anycubic Kobra Plus',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
  },
  {
    name: 'Impresora 3D Creality Cr-30',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-4.svg'
  },
  {
    name: 'Filamento Pla+ Impresora 3D',
    photo: 'https://flowbite.com/docs/images/carousel/carousel-5.svg'
  }

]
export default function App() {
  return (
    <>
    {/* <SignUp photo='src/assets/VALORANT_Omen_Dark.jpg' /> */}
      <Navbar />
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Productos</h1>
          <Carrusel products={products} />
        </div>
        <div className="p-6">
          <Carrusel2 products={products2} />
        </div>
      </div>

      <Chat 
      nickname='Mr-DUDU'
      photo='https://flowbite.com/docs/images/products/apple-watch.png'
      message='Hello, World! this is my message to you!'
      type='Chat Help'
    />

    <Sidebar/>
    </>

  );
}
