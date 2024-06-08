import { Card } from './components/Card';
import {Chat} from './components/Chat';

export default function App() {
  return (
    <Chat 
      nickname='John Doe'
      message='Hello, World!'
      photo='https://flowbite.com/docs/images/products/apple-watch.png'
    />
  );
}
