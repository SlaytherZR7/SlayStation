import { Router } from 'express';

import {
  getQuestions,
  getQuestionsById,
} from '../controllers/questions.controller.js';

export const questionsRouter = Router();

questionsRouter.get('/', getQuestions);
questionsRouter.get('/:id', getQuestionsById);
