import express from 'express';
const router = express.Router();

// Importar el controlador de autenticación
import { login, logout } from '../controllers/authController';

router.post('/login', login);
router.get('/logout', logout);

export default router;