import React from 'react';

export const Card = ({ name, quantity, price, photo }) => {
  return (
    <article>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{quantity}</p>
      <p>{price}</p>
    </article>
  );
};
