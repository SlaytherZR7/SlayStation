import { SignUp } from './pages/Signup';
import { Login } from './pages/Login';
import { DashboardClient } from './pages/DashboardClient';
import { DashboardBusqueda } from './pages/DashboardBusqueda';
import { DashboardRoot } from './pages/DashboardRoot';
import { Chat } from './components/Chat';
import { ProductCard } from './components/ProductCard';
export default function App() {
  return (
    <>
    <ProductCard 
    name="pepe el toro 3D super poderoso pitudo y chingon" 
    price="12"
    description={[
      "Impresora 3D Anycubic Kobra",
      "PluPlayStation 4 Pro Star Wars Edition - Modelo: 1VSON2156",
      "Sumérgete en el universo de Star Wars con la PlayStation 4 Pro edición especial!",
      "Este exclusivo paquete te lleva a las épicas batallas de la galaxia, con un diseño completamente personalizado inspirado en el icónico juegos"
  ]}
    quantity="2"
    state="Nuevo"
    photo="https://oechsle.vteximg.com.br/arquivos/ids/9396673-1000-1000/image-d33b39767b25457ea62636be88456464.jpg?v=637920459507900000"
    />
    </>
  
  );
}
