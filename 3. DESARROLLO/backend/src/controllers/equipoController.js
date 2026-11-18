const pool = require('../config/db');

// Obtener todos los equipos
const getEquipos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM equipos ORDER BY id ASC');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los equipos.' });
    }
};

// Obtener un equipo por su ID
const getEquipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM equipos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Equipo no encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el equipo.' });
    }
};

// Crear un nuevo equipo
const createEquipo = async (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).json({ error: 'El nombre del equipo es obligatorio.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO equipos (nombre) VALUES ($1) RETURNING *',
            [nombre]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el equipo.' });
    }
};

// Actualizar un equipo existente
const updateEquipo = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).json({ error: 'El nombre del equipo es obligatorio.' });
    }

    try {
        const result = await pool.query(
            'UPDATE equipos SET nombre = $1 WHERE id = $2 RETURNING *',
            [nombre, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Equipo no encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el equipo.' });
    }
};

// Eliminar un equipo
const deleteEquipo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM equipos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Equipo no encontrado.' });
        }
        res.json({ mensaje: 'Equipo eliminado correctamente.', equipo: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el equipo.' });
    }
};

module.exports = {
    getEquipos,
    getEquipoById,
    createEquipo,
    updateEquipo,
    deleteEquipo
};