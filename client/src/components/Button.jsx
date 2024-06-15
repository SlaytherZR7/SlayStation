export const Button = ({ condition, onClick }) => {
    return (
        <button
        onClick={onClick}
        className='text-white font-bold py-2 px-4 rounded'
        >
        {condition === '0' ? 'Login' : 
        <div
            className='relative'
            data-twe-dropdown-ref
            data-twe-dropdown-alignment='end'
          >
            <a
              className='flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
              href='#'
              id='dropdownMenuButton2'
              role='button'
              data-twe-dropdown-toggle-ref
              aria-expanded='false'
            >
              <img
                src='https://tecdn.b-cdn.net/img/new/avatars/2.jpg'
                className='rounded-full'
                style={{ height: '25px', width: '25px' }}
                alt=''
                loading='lazy'
              />
            </a>
        </div>}
        </button>
    );
};