// server/src/controllers/authController.ts
import { Request, Response } from 'express';
// Suponiendo que tienes una función de utilidad para verificar contraseñas
import { verifyPassword } from '../utils/passwordUtils';

const users = [
    { username: 'user1', password: 'hashedPassword1', typeUser: 'admin' },
    { username: 'user2', password: 'hashedPassword2', typeUser: 'user' }
    // Datos quemados por ahora
];

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }

    // Verifica la contraseña (simulación, deberías usar hashing real)
    if (!verifyPassword(password, user.password)) {
        return res.status(401).send('Contraseña incorrecta');
    }

    // Simulación de sesión
    req.session.user = { id: user.username, type: user.typeUser };

    // Redirigir según el tipo de usuario
    if (user.typeUser === 'admin') {
        res.redirect('/DashboardRoot');
    } else {
        res.redirect('/DashboardClient');
    }
};

export const logout = (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Failed to logout');
        }
        res.redirect('/');
    });
};
