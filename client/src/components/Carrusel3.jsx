import { CardLarge } from './CardLarge.jsx';

export const Carrusel3 = ({ products }) => {
  return (
    <div className="flex-wrap justify-center gap-4">
      {products.map((product, index) => (
        <div key={index} >
          <CardLarge
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            photo={product.photo}
          />
        </div>
      ))}
    </div>
  );
};
