const http = require('http');
const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use('/api', routes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

const usuarios = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' }
];


// Ruta principal que muestra el dashboard (simulado por ahora)
app.get('/', (req, res) => {
  res.send('Dashboard - Bienvenido a mi Ecommerce');
});

// Ruta de login que solo muestra un formulario simple (simulado)
app.get('/login', (req, res) => {
  // Simula el formulario de login
  res.send('Formulario de login');
});

app.use(express.static(path.join(__dirname, '../client')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client",'index.html'));
});
