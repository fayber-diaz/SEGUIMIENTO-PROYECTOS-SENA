# Documentación de Endpoints - API Seguimiento Proyectos SENA

**URL Base:** `http://localhost:3000`  
**Autenticación:** Bearer Token (JWT) en el header `Authorization: Bearer <token>` para todas las rutas protegidas.

---

## 1. Salud del Sistema

| Método | Endpoint       | Descripción                                   | Protección |
| :----- | :------------- | :-------------------------------------------- | :--------- |
| `GET`  | `/`            | Verifica que el servidor Express esté activo  | Pública    |
| `GET`  | `/api/test-db` | Verifica la conexión con PostgreSQL en Docker | Pública    |

---

## 2. Autenticación (`/api/auth`)

| Método | Endpoint             | Descripción                                                | Body (JSON)                                              |
| :----- | :------------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| `POST` | `/api/auth/register` | Registra un nuevo usuario (encripta contraseña con bcrypt) | `{ "nombre", "correo", "password", "rol", "equipo_id" }` |
| `POST` | `/api/auth/login`    | Inicia sesión y devuelve el Token JWT                      | `{ "correo", "password" }`                               |

---

## 3. Equipos (`/api/equipos`)

| Método   | Endpoint           | Descripción                           | Protección       |
| :------- | :----------------- | :------------------------------------ | :--------------- |
| `GET`    | `/api/equipos`     | Lista todos los equipos               | JWT              |
| `GET`    | `/api/equipos/:id` | Obtiene un equipo por ID              | JWT              |
| `POST`   | `/api/equipos`     | Crea un nuevo equipo (`{ "nombre" }`) | JWT + Instructor |
| `PUT`    | `/api/equipos/:id` | Actualiza un equipo (`{ "nombre" }`)  | JWT + Instructor |
| `DELETE` | `/api/equipos/:id` | Elimina un equipo                     | JWT + Instructor |

---

## 4. Proyectos (`/api/proyectos`)

| Método   | Endpoint             | Descripción                                                   | Protección       |
| :------- | :------------------- | :------------------------------------------------------------ | :--------------- |
| `GET`    | `/api/proyectos`     | Lista todos los proyectos con el nombre de su equipo          | JWT              |
| `GET`    | `/api/proyectos/:id` | Obtiene un proyecto por ID                                    | JWT              |
| `POST`   | `/api/proyectos`     | Crea un proyecto (`{ "titulo", "descripcion", "equipo_id" }`) | JWT              |
| `PUT`    | `/api/proyectos/:id` | Actualiza un proyecto                                         | JWT              |
| `DELETE` | `/api/proyectos/:id` | Elimina un proyecto                                           | JWT + Instructor |

---

## 5. Tareas - Tablero Kanban (`/api/tareas`)

| Método   | Endpoint          | Descripción                                                                           | Protección |
| :------- | :---------------- | :------------------------------------------------------------------------------------ | :--------- |
| `GET`    | `/api/tareas`     | Lista todas las tareas (acepta `?proyecto_id=1`)                                      | JWT        |
| `GET`    | `/api/tareas/:id` | Obtiene una tarea por ID                                                              | JWT        |
| `POST`   | `/api/tareas`     | Crea una tarea (`{ "titulo", "descripcion", "estado", "proyecto_id", "usuario_id" }`) | JWT        |
| `PUT`    | `/api/tareas/:id` | Actualiza una tarea. **Regla:** Bloquea cambio a `"Finalizado"` si no tiene evidencia | JWT        |
| `DELETE` | `/api/tareas/:id` | Elimina una tarea                                                                     | JWT        |

---

## 6. Evidencias (`/api/evidencias`)

| Método   | Endpoint              | Descripción                                                             | Protección |
| :------- | :-------------------- | :---------------------------------------------------------------------- | :--------- |
| `GET`    | `/api/evidencias`     | Lista todas las evidencias (acepta `?tarea_id=1`)                       | JWT        |
| `GET`    | `/api/evidencias/:id` | Obtiene una evidencia por ID                                            | JWT        |
| `POST`   | `/api/evidencias`     | Registra una evidencia (`{ "tarea_id", "url_archivo", "descripcion" }`) | JWT        |
| `DELETE` | `/api/evidencias/:id` | Elimina una evidencia                                                   | JWT        |
