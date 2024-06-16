import { pool } from '../database/bd.js';

export const getUsers = async () => {
  const users = await pool.query('SELECT * FROM users');
  return users.rows;
};

export const createUser = async (userData) => {
  const {
    user_name,
    user_last_name,
    user_email,
    user_nickname,
    password,
    phone,
    image,
  } = userData;

  const result = await pool.query(
    'INSERT INTO users (user_name, user_last_name, user_email, user_nickname, user_phone, user_image, password, user_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
    [
      user_name,
      user_last_name,
      user_email,
      user_nickname,
      phone || null,
      image || null,
      password,
      0,
    ]
  );
  return result.rows[0];
};

export const getUserById = async (id) => {
  const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
  return user.rows[0];
};

export const updateUser = async (id, updatedFields) => {
  const updateValues = [];
  const updateParams = [];

  Object.keys(updatedFields).forEach((key, index) => {
    updateValues.push(`${key} = $${index + 1}`);
    updateParams.push(updatedFields[key]);
  });

  updateParams.push(id);

  const updateQuery = `
    UPDATE users
    SET ${updateValues.join(', ')}
    WHERE user_id = $${updateParams.length}
    RETURNING *
  `;

  const { rows } = await pool.query(updateQuery, updateParams);
  return rows[0];
};

export const deleteUserById = async (id) => {
  const { rowCount } = await pool.query(
    'DELETE FROM users WHERE user_id = $1',
    [id]
  );
  return rowCount > 0;
};
