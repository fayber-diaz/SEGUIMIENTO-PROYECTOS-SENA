const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('connect', () => {
    console.log('Conexión exitosa a la base de datos PostgreSQL en Docker');
});

pool.on('error', (err) => {
    console.error('Error inesperado en la base de datos', err);
});

module.exports = pool;