import { pool } from '../database/bd.js';

export const getQuestions = async () => {
  const questions = await pool.query('SELECT * FROM security_questions');
  return questions.rows;
};

export const getQuestionById = async (id) => {
  const question = await pool.query(
    'SELECT * FROM security_questions WHERE question_id = $1',
    [id]
  );
  return question.rows[0];
};
