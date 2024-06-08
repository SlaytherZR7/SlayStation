import React, { useState } from 'react';
import { Input } from '../components/Input';
import { AvatarUploader } from '../components/AvatarUploader';

export const SignUp = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
  };
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
        <form className='flex flex-col gap-4 justify-center'>
          <AvatarUploader onAvatarChange={handleAvatarChange} />
          <div class='grid gap-x-6 gap-y-4 md:grid-cols-2'>
            <Input
              label='Nombre'
              placeholder='Slayther'
              id='nombre'
              type='text'
            />
            <Input
              label='Apellido'
              placeholder='Zamora'
              id='apellido'
              type='text'
            />
            <Input
              label='Nickname'
              placeholder='Mr-Dudu'
              id='nickname'
              type='text'
            />
            <Input
              label='Celular'
              placeholder='0987654321'
              id='celular'
              type='phone'
            />
          </div>

          <Input
            label='Correo electronico'
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
          <Input
            label='Confirmar contraseña'
            placeholder='********'
            id='confirmar-contraseña'
            type='password'
          />
          <div class='flex items-start mb-2'>
            <div class='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <label
              for='remember'
              class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              I agree with the{' '}
              <a
                href='#'
                class='text-blue-600 hover:underline dark:text-blue-500'
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto'
          >
            Registrarse
          </button>
          <div className='flex gap-1 justify-center'>
            <span className='text-white text-sm'>¿Ya tienes una cuenta?</span>
            <a href='#' className='text-white italic underline text-sm'>
              Inicia sesión aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};