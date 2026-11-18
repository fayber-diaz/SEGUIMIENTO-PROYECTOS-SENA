const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/equipos', require('./routes/equipoRoutes'));
app.use('/api/proyectos', require('./routes/proyectoRoutes'));
app.use('/api/tareas', require('./routes/tareaRoutes'));
app.use('/api/evidencias', require('./routes/evidenciaRoutes'));

// Ruta de prueba general
app.get('/', (req, res) => {
    res.send('API REST del SENA funcionando correctamente');
});

// Ruta de prueba para verificar conexión a PostgreSQL
app.get('/api/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW() AS hora_actual');
        res.json({
            mensaje: 'Conexión a BD exitosa',
            hora: result.rows[0].hora_actual
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al conectar con la base de datos' });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});