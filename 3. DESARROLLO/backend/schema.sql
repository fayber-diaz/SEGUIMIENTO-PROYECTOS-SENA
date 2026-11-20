-- 1. Tabla de Equipos
CREATE TABLE equipos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 2. Tabla de Usuarios (Instructores y Aprendices)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('Instructor', 'Aprendiz')),
    equipo_id INT REFERENCES equipos(id) ON DELETE
    SET NULL
);
-- 3. Tabla de Proyectos
CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    equipo_id INT REFERENCES equipos(id) ON DELETE CASCADE
);
-- 4. Tabla de Tareas (Kanban)
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    estado VARCHAR(20) DEFAULT 'Por Hacer' CHECK (
        estado IN ('Por Hacer', 'En Proceso', 'Finalizado')
    ),
    fecha_limite DATE,
    proyecto_id INT REFERENCES proyectos(id) ON DELETE CASCADE,
    aprendiz_id INT REFERENCES usuarios(id) ON DELETE
    SET NULL
);
-- 5. Tabla de Evidencias
CREATE TABLE evidencias (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    url_archivo TEXT NOT NULL,
    tarea_id INT REFERENCES tareas(id) ON DELETE CASCADE
);