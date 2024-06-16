import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config.js';

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

pool.on('connect', () => {
  console.log('connected to the db');
});
