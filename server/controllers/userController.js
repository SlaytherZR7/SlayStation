// Simulación de base de datos de usuarios
const usuarios = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
];

exports.login = (req, res) => {
    const { username, password } = req.body;
    const usuario = usuarios.find(u => u.username === username && u.password === password);
    if (usuario) {
        res.send(`Bienvenido al dashboard, ${usuario.username}`);
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
};

exports.logout = (req, res) => {
    // Lógica para cerrar sesión
    res.redirect('../../../client/src/pages/Login');
};
