import { Router } from 'express';

import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/products.controller.js';

export const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', createProduct);
productsRouter.get('/:id', getProductById);
productsRouter.delete('/:id', deleteProduct);
productsRouter.patch('/:id', updateProduct);
