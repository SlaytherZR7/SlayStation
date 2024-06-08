import { Card } from './components/Card';

export default function App() {
  return (
    <Card
      name='Apple Watch'
      price={500}
      quantity={10}
      photo='https://flowbite.com/docs/images/products/apple-watch.png'
    />
  );
}