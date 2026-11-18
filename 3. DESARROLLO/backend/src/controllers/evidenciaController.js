const pool = require('../config/db');

// Obtener todas las evidencias (opcionalmente filtradas por tarea_id)
const getEvidencias = async (req, res) => {
    const { tarea_id } = req.query;
    try {
        let query = 'SELECT * FROM evidencias ORDER BY id ASC';
        let params = [];

        if (tarea_id) {
            query = 'SELECT * FROM evidencias WHERE tarea_id = $1 ORDER BY id ASC';
            params = [tarea_id];
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las evidencias.' });
    }
};

// Obtener una evidencia por ID
const getEvidenciaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM evidencias WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Evidencia no encontrada.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la evidencia.' });
    }
};

// Crear una nueva evidencia
const createEvidencia = async (req, res) => {
    const { tarea_id, url_archivo, descripcion } = req.body;
    if (!tarea_id || !url_archivo) {
        return res.status(400).json({ error: 'El tarea_id y la url_archivo son obligatorios.' });
    }

    try {
        const result = await pool.query(
            `INSERT INTO evidencias (tarea_id, url_archivo, descripcion)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [tarea_id, url_archivo, descripcion || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar la evidencia.' });
    }
};

// Eliminar una evidencia
const deleteEvidencia = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM evidencias WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Evidencia no encontrada.' });
        }
        res.json({ mensaje: 'Evidencia eliminada correctamente.', evidencia: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la evidencia.' });
    }
};

module.exports = {
    getEvidencias,
    getEvidenciaById,
    createEvidencia,
    deleteEvidencia
};