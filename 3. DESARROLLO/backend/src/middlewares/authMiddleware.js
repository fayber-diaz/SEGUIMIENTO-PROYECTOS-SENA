const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Espera: "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Guarda { id, rol, equipo_id } en la petición
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token inválido o expirado.' });
    }
};

const isInstructor = (req, res, next) => {
    if (req.user.rol !== 'Instructor') {
        return res.status(403).json({ error: 'Acceso denegado. Solo para Instructores.' });
    }
    next();
};

module.exports = { verifyToken, isInstructor };