// Usa import en lugar de require
import express from 'express';
import path from 'path';
import morgan from 'morgan';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
// __dirname y __filename no están definidos en ESM por defecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
// Usa las rutas de autenticación en la aplicación
app.listen(4000, () => {
    console.log(`Server is running on port 4000. Visit http://localhost:3000/ in your browser.`);
  });