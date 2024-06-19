import express from 'express';
import { usersRouter } from './routes/users.routes.js';
import { productsRouter } from './routes/products.routes.js';
import { questionsRouter } from './routes/questions.routes.js';
import cors from 'cors';
import 'dotenv/config.js';

const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/questions', questionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
