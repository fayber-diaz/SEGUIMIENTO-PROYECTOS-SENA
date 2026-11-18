const pool = require('../config/db');

// Obtener todas las tareas (opcionalmente filtradas por proyecto_id)
const getTareas = async (req, res) => {
    const { proyecto_id } = req.query;
    try {
        let query = 'SELECT * FROM tareas ORDER BY id ASC';
        let params = [];

        if (proyecto_id) {
            query = 'SELECT * FROM tareas WHERE proyecto_id = $1 ORDER BY id ASC';
            params = [proyecto_id];
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las tareas.' });
    }
};

// Obtener una tarea por ID
const getTareaById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tareas WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la tarea.' });
    }
};

// Crear una nueva tarea
const createTarea = async (req, res) => {
    const { titulo, descripcion, estado, proyecto_id, usuario_id } = req.body;
    if (!titulo || !proyecto_id) {
        return res.status(400).json({ error: 'El título y el proyecto_id son obligatorios.' });
    }

    try {
        const result = await pool.query(
            `INSERT INTO tareas (titulo, descripcion, estado, proyecto_id, usuario_id)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [titulo, descripcion || null, estado || 'Pendiente', proyecto_id, usuario_id || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la tarea.' });
    }
};

// Actualizar una tarea (incluye regla de negocio para "Finalizado")
const updateTarea = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, estado, usuario_id } = req.body;

    try {
        // Regla de negocio: No se puede pasar a "Finalizado" sin evidencia
        if (estado === 'Finalizado') {
            const evidencias = await pool.query(
                'SELECT id FROM evidencias WHERE tarea_id = $1',
                [id]
            );
            if (evidencias.rows.length === 0) {
                return res.status(400).json({
                    error: 'No se puede marcar la tarea como Finalizado sin haber cargado al menos una evidencia.'
                });
            }
        }

        const result = await pool.query(
            `UPDATE tareas
             SET titulo = COALESCE($1, titulo),
                 descripcion = COALESCE($2, descripcion),
                 estado = COALESCE($3, estado),
                 usuario_id = COALESCE($4, usuario_id)
             WHERE id = $5
             RETURNING *`,
            [titulo, descripcion, estado, usuario_id, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada.' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la tarea.' });
    }
};

// Eliminar una tarea
const deleteTarea = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tareas WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Tarea no encontrada.' });
        }
        res.json({ mensaje: 'Tarea eliminada correctamente.', tarea: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la tarea.' });
    }
};

module.exports = {
    getTareas,
    getTareaById,
    createTarea,
    updateTarea,
    deleteTarea
};