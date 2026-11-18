const express = require('express');
const router = express.Router();
const {
    getEvidencias,
    getEvidenciaById,
    createEvidencia,
    deleteEvidencia
} = require('../controllers/evidenciaController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Rutas para /api/evidencias
router.get('/', verifyToken, getEvidencias);
router.get('/:id', verifyToken, getEvidenciaById);
router.post('/', verifyToken, createEvidencia);
router.delete('/:id', verifyToken, deleteEvidencia);

module.exports = router;