import { SignUp } from './pages/Signup';
import { Login } from './pages/Login';
import { DashboardClient } from './pages/DashboardClient';
import { DashboardBusqueda } from './pages/DashboardBusqueda';

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
    <DashboardBusqueda />
    </>
  );
}
