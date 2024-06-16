import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/users.controller.js';

export const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.patch('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);
