import React, { useState } from 'react';

export const ProductCard = ({name, price, description, quantity, state, photo,}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpenCategory, setIsDropdownOpenCategory] = useState(false);
  const [isDropdownOpenCondition, setIsDropdownOpenCondition] = useState(false);

  const toggleDropdownCategory = () => {
    setIsDropdownOpenCategory(!isDropdownOpenCategory);
  };

  const toggleDropdownCondition = () => {
    setIsDropdownOpenCondition(!isDropdownOpenCondition);
  };

  return (
    <div className='border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center'>
      <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/3 dark:bg-gray-900 rounded-lg flex flex-col md:flex-row p-5'>
        {/* Contenedor de la imagen */}
        <div className='flex-1 md:flex-grow-[2/3] flex items-center justify-center bg-white p-3'>
          <a href='#'>
            <div className='h-96 md:h-full overflow-hidden'>
              <img
                className='w-full h-full object-contain'
                src={photo}
                alt={name}
              />
            </div>
          </a>
        </div>

        {/* Contenedor de la información */}
        <div className='flex-1 md:flex-grow-[1/3] flex flex-col justify-center items-center dark:bg-gray-900 rounded-lg p-4 mx-2 mt-4 md:mt-0'>
          <a href='#'>
            <h5 className='text-4xl font-bold tracking-tight text-white text-center'>
              {name}
            </h5>
          </a>
          <div className='flex flex-col items-center space-y-6 mt-4'>
            <span className='text-5xl font-bold text-white'>${price}</span>
            <p className='text-md text-white font-bold text-center'>
              State: {state}
            </p>
            <div className='text-md inline-block text-white font-bold text-center'>
                <p className='inline-block'>Quantity:</p>
                <select className='dark:bg-gray-900 mx-2'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                ({quantity} available)
            </div>

            <p className='text-md text-white text-center'>{description}</p>
          </div>
          <br></br>
          <button className='w-48 text-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-3 text-center mt-4'>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};