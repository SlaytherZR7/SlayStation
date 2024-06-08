import React from 'react';
import { Input } from '../components/Input';

export const Login = () => {
  return (
    <div className='flex items-center justify-between h-screen bg-gray-900'>
      <div
        className='w-2/4 h-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/87/61/d7/8761d74a702d9b60ef2c0dcb3174fa8d.png')",
        }}
      ></div>
      <div className='flex items-center justify-center w-2/4'>
        <form className='w-80 flex flex-col gap-4'>
          <h1 className='text-white text-4xl font-bold text-center font-press-start-2p'>
            SlayStation
          </h1>
          <h2 className='text-white text-2xl font-bold text-center'>
            Iniciar sesión
          </h2>
          <Input
            label='Correo electrónico'
            placeholder='slayther.zr@gmail.com'
            id='correo'
            type='email'
          />
          <Input
            label='Contraseña'
            placeholder='********'
            id='contraseña'
            type='password'
          />
          <a
            href='#'
            className='block text-white underline italic text-sm ml-auto'
          >
            ¿Olvidaste tu contraseña?
          </a>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto'
          >
            Iniciar sesión
          </button>
          <div className='flex gap-1 justify-end'>
            <span className='text-white text-sm'>¿No tienes una cuenta?</span>
            <a href='#' className='text-white italic underline text-sm'>
              Regístrate aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
