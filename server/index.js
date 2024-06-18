import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import path from 'path';
import { fileURLToPath } from 'url';
import WebSocket from 'ws';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear una instancia de express
const app = express();

// Crear el servidor HTTP a partir de la instancia de express
const server = createServer(app);

// Crear el servidor WebSocket
const wss = new WebSocketServer({ server });

// Manejador de eventos para las conexiones WebSocket
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`received: ${message}`);
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ruta principal para enviar el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
