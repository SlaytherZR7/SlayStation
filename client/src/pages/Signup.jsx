import React, { useState } from 'react';
import { Input } from '../components/Input';
import { AvatarUploader } from '../components/AvatarUploader';
import { QuestionsModal } from '../components/QuestionsModal';

export const SignUp = ({ photo }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const questions = [
    'What is your favorite color?',
    'What is the name of your first pet?',
    'Where is your birthplace?',
  ];

  return (
    <div className='flex items-center justify-between bg-gray-900 h-screen'>
      <div
        className='w-2/4 h-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${photo})`,
        }}
      ></div>
      <div className='flex items-center justify-center w-2/4 h-full'>
        <form className='flex flex-col gap-2 justify-center scale-90'>
          <AvatarUploader onAvatarChange={handleAvatarChange} />
          <div className='grid gap-x-6 gap-y-2 md:grid-cols-2'>
            <Input
              isRequired={true}
              label='Name'
              placeholder='Slayther'
              id='nombre'
              type='text'
            />
            <Input
              isRequired={true}
              label='Last name'
              placeholder='Zamora'
              id='apellido'
              type='text'
            />
            <Input
              isRequired={true}
              label='Nickname'
              placeholder='Mr-Dudu'
              id='nickname'
              type='text'
            />
            <Input
              isRequired={true}
              label='Phone number'
              placeholder='0987654321'
              id='celular'
              type='phone'
            />
          </div>

          <Input
            isRequired={true}
            label='Email'
            placeholder='slayther.zr@gmail.com'
            id='correo'
            type='email'
          />
          <Input
            isRequired={true}
            label='Password'
            placeholder='********'
            id='contraseña'
            type='password'
          />
          <Input
            isRequired={true}
            label='Confirm password'
            placeholder='********'
            id='confirmar-contraseña'
            type='password'
          />
          <div className='flex items-start mb-2'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <label
              htmlFor='remember'
              className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              I agree with the{' '}
              <a
                href='#'
                className='text-blue-600 hover:underline dark:text-blue-500'
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type='button'
            onClick={() => setIsModalOpen(true)}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto'
          >
            Sign Up
          </button>
          <div className='flex gap-1 justify-center'>
            <span className='text-white text-sm'>Do you already have an account?</span>
            <a href='#' className='text-white italic underline text-sm'>
              Log in here
            </a>
          </div>
        </form>
      </div>

      <QuestionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        questions={questions}
      />
    </div>
  );
};
