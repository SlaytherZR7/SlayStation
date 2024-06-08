export const Input = ({ label, iconPath, placeholder, id, type }) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'
      >
        {label}
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 16'
          >
            <path d={iconPath} />
          </svg>
        </div>
        <input
          type={type}
          id={id}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

