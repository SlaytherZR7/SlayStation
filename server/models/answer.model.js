import { pool } from '../database/bd.js';

export const getAnswers = async ({ user_id }) => {
  if (user_id) {
    const answers = await pool.query(
      'SELECT * FROM security_answers WHERE user_id = $1',
      [user_id]
    );
    return answers.rows;
  }
  const answers = await pool.query('SELECT * FROM security_answers');
  return answers.rows;
};

export const getAnswerById = async (id) => {
  const answer = await pool.query(
    'SELECT * FROM security_answers WHERE answer_id = $1',
    [id]
  );
  return answer.rows[0];
};

export const createAnswer = async (answerData) => {
  const { user_id, question_id, answer_description } = answerData;

  const result = await pool.query(
    'INSERT INTO security_answers (user_id, question_id, answer_description) VALUES ($1, $2, $3) RETURNING *',
    [user_id, question_id, answer_description]
  );
  return result.rows[0];
};
