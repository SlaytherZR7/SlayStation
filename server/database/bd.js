import pkg from 'pg';
const { Pool } = pkg;

// export const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'slaystation',
  password: '130203',
});

pool.on('connect', () => {
  console.log('connected to the db');
});
