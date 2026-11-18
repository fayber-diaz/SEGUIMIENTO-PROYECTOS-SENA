const express = require('express');
const router = express.Router();
const {
    getProyectos,
    getProyectoById,
    createProyecto,
    updateProyecto,
    deleteProyecto
} = require('../controllers/proyectoController');
const { verifyToken, isInstructor } = require('../middlewares/authMiddleware');

// Rutas para /api/proyectos
router.get('/', verifyToken, getProyectos);
router.get('/:id', verifyToken, getProyectoById);
router.post('/', verifyToken, createProyecto);
router.put('/:id', verifyToken, updateProyecto);
router.delete('/:id', verifyToken, isInstructor, deleteProyecto);

module.exports = router;