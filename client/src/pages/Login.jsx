import { Link } from 'react-router-dom';
import { Input } from '../components/Input';

export const Login = () => {
  return (
    <div className='flex items-center justify-between h-screen bg-gray-900'>
      <div
        className='w-2/4 h-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(https://images8.alphacoders.com/108/1080944.jpg)`,
        }}
      ></div>
      <div className='flex items-center justify-center w-2/4'>
        <form className='w-80 flex flex-col gap-4'>
          <h1 className='text-white text-4xl font-bold text-center font-press-start-2p'>
            SlayStation
          </h1>
          <h2 className='text-white text-2xl font-bold text-center'>
            Sign In
          </h2>
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
          <a
            href='#'
            className='block text-white underline italic text-sm ml-auto'
          >
            Forgot your password?
          </a>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto'
          >
            Continue
          </button>
          <div className='flex gap-1 justify-end'>
            <span className='text-white text-sm'>Don't have an account yet? </span>
            <Link to='/signup' className='text-white italic underline text-sm'>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
