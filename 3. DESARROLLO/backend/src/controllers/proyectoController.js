const pool = require('../config/db');

// Obtener todos los proyectos (con el nombre de su equipo)
const getProyectos = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT p.*, e.nombre AS equipo_nombre 
            FROM proyectos p
            LEFT JOIN equipos e ON p.equipo_id = e.id
            ORDER BY p.id ASC
        `);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los proyectos.' });
    }
};

// Obtener un proyecto por ID
const getProyectoById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM proyectos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Proyecto no encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el proyecto.' });
    }
};

// Crear un nuevo proyecto
const createProyecto = async (req, res) => {
    const { titulo, descripcion, equipo_id } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'El título del proyecto es obligatorio.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO proyectos (titulo, descripcion, equipo_id) VALUES ($1, $2, $3) RETURNING *',
            [titulo, descripcion || null, equipo_id || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el proyecto.' });
    }
};

// Actualizar un proyecto
const updateProyecto = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, equipo_id } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'El título del proyecto es obligatorio.' });
    }

    try {
        const result = await pool.query(
            'UPDATE proyectos SET titulo = $1, descripcion = $2, equipo_id = $3 WHERE id = $4 RETURNING *',
            [titulo, descripcion || null, equipo_id || null, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Proyecto no encontrado.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el proyecto.' });
    }
};

// Eliminar un proyecto
const deleteProyecto = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM proyectos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Proyecto no encontrado.' });
        }
        res.json({ mensaje: 'Proyecto eliminado correctamente.', proyecto: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el proyecto.' });
    }
};

module.exports = {
    getProyectos,
    getProyectoById,
    createProyecto,
    updateProyecto,
    deleteProyecto
};