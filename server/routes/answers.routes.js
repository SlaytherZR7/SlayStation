import { Router } from 'express';

import {
  getAnswers,
  getAnswerById,
  createAnswer,
} from '../controllers/answers.controller.js';

export const answersRouter = Router();

answersRouter.get('/', getAnswers);
answersRouter.get('/:id', getAnswerById);
answersRouter.post('/', createAnswer);
