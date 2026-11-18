const express = require('express');
const router = express.Router();
const {
    getEquipos,
    getEquipoById,
    createEquipo,
    updateEquipo,
    deleteEquipo
} = require('../controllers/equipoController');
const { verifyToken, isInstructor } = require('../middlewares/authMiddleware');

// Rutas para /api/equipos (todas requieren estar logueado)
router.get('/', verifyToken, getEquipos);
router.get('/:id', verifyToken, getEquipoById);
router.post('/', verifyToken, isInstructor, createEquipo);
router.put('/:id', verifyToken, isInstructor, updateEquipo);
router.delete('/:id', verifyToken, isInstructor, deleteEquipo);

module.exports = router;