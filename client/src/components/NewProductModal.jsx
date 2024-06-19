import { Input } from './Input';
import { ProductImageUploader } from './ProductImageUploader';
import { useState } from 'react';

export const NewProductModal = ({ isOpen, onClose, product }) => {
  const [productName, setProductName] = useState(
    product ? product.product_name : ''
  );
  const [productPrice, setProductPrice] = useState(
    product ? product.product_price : ''
  );
  const [productCategory, setProductCategory] = useState(
    product ? product.category_id : ''
  );
  const [productStock, setProductStock] = useState(
    product ? product.product_stock : ''
  );
  const [productState, setProductState] = useState(
    product ? product.state_id : ''
  );
  const [productDescription, setProductDescription] = useState(
    product ? product.product_description : ''
  );
  const [productImage, setProductImage] = useState(
    product ? product.product_image : ''
  );

  const handleSubmit = async (e) => {
    if (product) {
      // Edit product
    } else {
      try {
        const response = await fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product_name: productName,
            product_price: productPrice,
            category_id: productCategory,
            product_stock: productStock,
            state_id: productState,
            product_description: productDescription,
            product_image: productImage,
          }),
        });
        const data = await response.json();
        if (response.status === 201) {
          console.log(data);
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (!isOpen) return null;

  return (
    <div
      id='crud-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-75'
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {product ? 'Edit Product' : 'Create New Product'}
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={onClose}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form className='p-4 md:p-5'>
            <div className='grid gap-4 mb-4 grid-cols-2'>
              <div className='col-span-2'>
                <ProductImageUploader
                  imageUrl={product ? product.product_image : ''}
                />
              </div>
              <div className='col-span-2'>
                <Input
                  label='Name'
                  placeholder='GTA San Andreas'
                  id='nombre'
                  type='text'
                  isRequired={true}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className='col-span-2 flex flex-wrap gap-4'>
                <div className='flex-1'>
                  <Input
                    label='Price'
                    placeholder='12.5'
                    id='precio'
                    type='number'
                    isRequired={true}
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className='flex-1'>
                  <label
                    htmlFor='category'
                    className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Category
                  </label>
                  <select
                    id='category'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  >
                    <option value=''>Select a category</option>
                    <option value='1'>Console</option>
                    <option value='2'>Videogame</option>
                  </select>
                </div>
              </div>
              <div className='col-span-2 flex flex-wrap gap-4'>
                <div className='flex-1'>
                  <Input
                    label='Quantity'
                    placeholder='10'
                    id='cantidad'
                    type='number'
                    isRequired={true}
                    value={productStock}
                    onChange={(e) => setProductStock(e.target.value)}
                  />
                </div>
                <div className='flex-1'>
                  <label
                    htmlFor='estado'
                    className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    State
                  </label>
                  <select
                    id='estado'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    value={productState}
                    onChange={(e) => setProductState(e.target.value)}
                  >
                    <option value=''>Select the state of the product</option>
                    <option value='1'>New</option>
                    <option value='2'>Used</option>
                    <option value='3'>Refurbished</option>
                  </select>
                </div>
              </div>
              <div className='col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Product description
                </label>
                <textarea
                  id='description'
                  rows='4'
                  className='block min-h-24 max-h-72 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write product description here'
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={handleSubmit}
            >
              <svg
                className='mr-1 ml-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              {product ? 'Save Changes' : 'Add new product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
