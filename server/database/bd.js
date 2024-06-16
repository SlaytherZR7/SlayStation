import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config.js';

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'slaystation',
  password: '130203db',
});

pool.on('connect', () => {
  console.log('connected to the db');
});
