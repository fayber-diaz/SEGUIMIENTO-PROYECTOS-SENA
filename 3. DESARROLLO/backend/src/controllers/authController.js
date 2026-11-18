const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuarios
const register = async (req, res) => {
    const { nombre, correo, password, rol, equipo_id } = req.body;

    if (!nombre || !correo || !password || !rol) {
        return res.status(400).json({ error: 'Todos los campos obligatorios deben llenarse.' });
    }

    try {
        // Verificar si el correo ya existe
        const userExists = await pool.query('SELECT id FROM usuarios WHERE correo = $1', [correo]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'El correo ya está registrado.' });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Guardar en base de datos
        const result = await pool.query(
            `INSERT INTO usuarios (nombre, correo, password, rol, equipo_id)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id, nombre, correo, rol, equipo_id`,
            [nombre, correo, hashedPassword, rol, equipo_id || null]
        );

        res.status(201).json({
            mensaje: 'Usuario registrado exitosamente',
            usuario: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar el usuario.' });
    }
};

// Inicio de sesión
const login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Credenciales inválidas.' });
        }

        const usuario = result.rows[0];
        
        // Comparar contraseña ingresada con la encriptada
        const validPassword = await bcrypt.compare(password, usuario.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Credenciales inválidas.' });
        }

        // Generar Token JWT con tu clave secreta
        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol, equipo_id: usuario.equipo_id },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        res.json({
            mensaje: 'Inicio de sesión exitoso',
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol,
                equipo_id: usuario.equipo_id
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
};

module.exports = { register, login };
