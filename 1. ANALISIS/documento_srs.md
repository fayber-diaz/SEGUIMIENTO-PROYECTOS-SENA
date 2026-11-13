# ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE (SRS)

**PROYECTO:** PLATAFORMA DE SEGUIMIENTO DE PROYECTOS DE APRENDICES
**APRENDIZ:** Fayber Estyben Díaz Tierradentro
**SERVICIO NACIONAL DE APRENDIZAJE (SENA)**
**CENTRO DE LA INDUSTRIA, LA EMPRESA Y LOS SERVICIOS. REGIONAL HUILA**
**PROGRAMA DE FORMACIÓN:** ANÁLISIS Y DESARROLLO DE SOFTWARE (ADSO)
**FICHA:** 3413988
**INSTRUCTOR:** Javier Humberto Pinto Diaz

## TABLA DE CONTENIDOS
1. [Introducción](#1-introducción)
2. [Descripción general del producto](#2-descripción-general-del-producto)
3. [Requisitos específicos](#3-requisitos-específicos)
4. [Casos de Uso](#4-casos-de-uso)
5. [Modelo de Datos (PostgreSQL)](#5-modelo-de-datos-postgresql)
6. [Plan de Pruebas Inicial](#6-plan-de-pruebas-inicial)

---

## 1. Introducción
El presente documento describe los requisitos y funcionalidades de la Plataforma Web de Seguimiento de Proyectos de Aprendices, orientada a la gestión, monitoreo y evaluación de proyectos formativos con integración de Inteligencia Artificial para la optimización de procesos ágiles.

### 1.1 Planteamiento del problema
Actualmente, el seguimiento de entregables y avances de los proyectos formativos se realiza mediante herramientas dispersas (correos, repositorios, Excel). Esto dificulta al instructor tener una visión centralizada y en tiempo real del progreso de cada equipo. Asimismo, los aprendices invierten tiempo considerable en la redacción estructurada de requisitos y reportes técnicos.

### 1.2 Propósito
Desarrollar una plataforma web centralizada para el seguimiento de proyectos formativos. Este documento SRS servirá como guía para identificar, documentar y validar los requisitos funcionales y no funcionales del sistema, orientando las etapas de diseño (PostgreSQL), desarrollo (React, Node.js) y pruebas.

### 1.3 Justificación
La justificación se fundamenta en mejorar la eficiencia formativa centralizando la gestión. La integración de IA permitirá a los aprendices estructurar requerimientos automáticamente (como Historias de Usuario) y facilitará a los instructores la generación de resúmenes de avance, reduciendo la carga administrativa.

### 1.4 Objetivo general
Desarrollar un software web para el seguimiento de proyectos de aprendices que permita gestionar equipos, proyectos, tareas y evidencias, integrando Inteligencia Artificial para la generación de historias de usuario y resúmenes de avances.

#### 1.4.1 Objetivos específicos
- Diseñar e implementar una base de datos relacional en PostgreSQL para la gestión de la información.
- Desarrollar una API RESTful en Node.js que soporte las operaciones CRUD de los módulos principales.
- Construir una interfaz de usuario dinámica y responsiva utilizando React.
- Integrar un servicio de IA generativa para estructurar requerimientos y resumir el estado de los proyectos.

### 1.5 Alcance
El sistema está dirigido a instructores y aprendices del programa ADSO. Incluirá la creación de equipos, asignación de proyectos, gestión de un tablero de tareas Kanban, carga de evidencias y el consumo de una API de IA. No contempla procesos de calificación en SOFIA Plus ni ejecución de código.

### 1.6 Personal involucrado
| Rol | Nombre | Responsabilidad |
|---|---|---|
| **Líder de Proyecto / Full-Stack** | Fayber Estyben Díaz Tierradentro | Desarrollo backend, frontend y BD. |
| **Instructor / Product Owner** | Javier Humberto Pinto Diaz | Validación de requerimientos y evaluación. |

### 1.7 Definiciones, acrónimos y abreviaturas
| Nombre / Acrónimo | Descripción |
|---|---|
| **IA** | Inteligencia Artificial. |
| **API** | Interfaz de Programación de Aplicaciones. |
| **UI / UX** | Interfaz de Usuario / Experiencia de Usuario. |
| **SRS** | Especificación de Requisitos de Software. |
| **Kanban** | Sistema visual de gestión de tareas. |

### 1.8 Referencias
| Título del documento | Referencia |
|---|---|
| IEEE 830 — Especificación de requisitos de software | IEEE |

### 1.9 Resumen
El proyecto consiste en el desarrollo de un software de gestión de proyectos formativos que permite visualizar tableros, crear tareas, asignar equipos y optimizar procesos de documentación y reportes mediante IA.

---

## 2. Descripción general del producto

### 2.1 Perspectiva del producto
Es una solución tecnológica web independiente basada en arquitectura cliente-servidor (Frontend en React, Backend en Node.js, BD en PostgreSQL).

### 2.2 Características de los usuarios
**Instructor (Administrador):**
- Acceso total al sistema.
- Crea equipos y asigna proyectos.
- Visualiza el progreso de todos los aprendices.
- Solicita resúmenes de avance a la IA.

**Aprendiz:**
- Se asocia a un equipo de trabajo.
- Crea tareas, cambia su estado y adjunta evidencias.
- Genera historias de usuario con IA.

### 2.3 Restricciones
- **Técnicas:** Stack inamovible (React, Node, PostgreSQL). Requiere conexión a internet para la IA.
- **Operativas:** La IA depende de servicios externos.
- **Legales:** Protección de datos de los aprendices registrados.
- **Recursos:** Presupuesto nulo (uso de APIs gratuitas).
- **Tiempo:** Plazo de ejecución de un (1) mes.

### 2.4 Suposiciones y dependencias
Los usuarios poseen conocimientos en el uso de navegadores web y plataformas educativas. El sistema depende de un servicio de IA externo activo.

---

## 3. Requisitos específicos

### 3.1 Requisitos comunes de las interfaces
- **3.1.1 Interfaces de usuario (UI):** Diseño intuitivo, accesible y responsivo. Tablero Kanban interactivo (Drag & Drop). Notificaciones en pantalla (Toasts).
- **3.1.2 Interfaces de hardware:** Computadores de escritorio o portátiles (PC/Mac). Servidor en la nube para el despliegue.
- **3.1.3 Interfaces de software:** Navegadores modernos (Chrome, Firefox, Edge). Sistema Gestor de Base de Datos PostgreSQL.
- **3.1.4 Interfaces de comunicación:** Protocolo HTTPS. Comunicación mediante API REST (formato JSON).

### 3.2 Historias de usuario

> **HU-01 - Registro de instructor** (Prioridad: Alta)
> - **Como:** posible instructor
> - **Quiero:** registrarme en la plataforma
> - **Para:** crear mi cuenta para gestionar fichas y equipos.
> - **Criterios de aceptación:** Ingresar nombre, correo y contraseña. El sistema valida el formato del correo.

> **HU-02 - Registro de aprendiz** (Prioridad: Alta)
> - **Como:** posible aprendiz
> - **Quiero:** registrarme en la plataforma
> - **Para:** poder pertenecer a un equipo y usar el sistema.
> - **Criterios de aceptación:** Ingresar datos obligatorios. Correo electrónico no debe existir previamente.

> **HU-03 - Inicio de sesión** (Prioridad: Alta)
> - **Como:** usuario registrado
> - **Quiero:** iniciar sesión con mis credenciales
> - **Para:** acceder a mi panel de control de forma segura.
> - **Criterios de aceptación:** Validar correo y contraseña (encriptada). Redirigir según el rol del usuario.

> **HU-04 - Creación de equipos** (Prioridad: Alta)
> - **Como:** instructor
> - **Quiero:** crear equipos de trabajo
> - **Para:** agrupar a los aprendices para el proyecto.
> - **Criterios de aceptación:** Definir nombre del equipo. Seleccionar aprendices de una lista.

> **HU-05 - Asignación de proyectos** (Prioridad: Alta)
> - **Como:** instructor
> - **Quiero:** asignar un proyecto a un equipo
> - **Para:** que los aprendices conozcan su objetivo.
> - **Criterios de aceptación:** Seleccionar un equipo existente. Ingresar título y descripción del proyecto.

> **HU-06 - Creación de tareas Kanban** (Prioridad: Alta)
> - **Como:** aprendiz
> - **Quiero:** crear tareas en el tablero
> - **Para:** llevar un control de lo que debo hacer.
> - **Criterios de aceptación:** Ingresar título y fecha límite. La tarea se crea en la columna 'Pendiente'.

> **HU-07 - Actualización de tareas** (Prioridad: Alta)
> - **Como:** aprendiz
> - **Quiero:** mover tareas entre columnas
> - **Para:** reflejar el avance (En Proceso, Finalizado).
> - **Criterios de aceptación:** Arrastrar y soltar la tarjeta. Actualizar el estado en la base de datos.

> **HU-08 - Carga de evidencias** (Prioridad: Alta)
> - **Como:** aprendiz
> - **Quiero:** adjuntar un enlace o archivo a la tarea
> - **Para:** demostrar que finalicé la actividad.
> - **Criterios de aceptación:** El sistema solicita una URL válida. Sin evidencia, la tarea no pasa a Finalizado.

> **HU-09 - Generar historias con IA** (Prioridad: Alta)
> - **Como:** aprendiz
> - **Quiero:** usar la IA para redactar requerimientos
> - **Para:** estructurar mis ideas rápidamente.
> - **Criterios de aceptación:** Escribir texto base corto. La IA devuelve Rol, Deseo y Criterios.

> **HU-10 - Resumen de avances con IA** (Prioridad: Alta)
> - **Como:** instructor
> - **Quiero:** pedir a la IA un resumen del equipo
> - **Para:** evaluar su rendimiento sin leer tarea por tarea.
> - **Criterios de aceptación:** El sistema envía las tareas 'Finalizadas'. La IA genera un reporte ejecutivo.

> **HU-11 - Ver progreso general** (Prioridad: Media)
> - **Como:** instructor
> - **Quiero:** ver gráficos de progreso de los equipos
> - **Para:** saber qué equipos están atrasados.
> - **Criterios de aceptación:** Mostrar cantidad de tareas pendientes vs finalizadas. Panel central unificado.

> **HU-12 - Editar perfil** (Prioridad: Baja)
> - **Como:** usuario
> - **Quiero:** modificar mis datos personales
> - **Para:** mantener mi información actualizada.
> - **Criterios de aceptación:** Permitir cambiar nombre y foto. Validar los cambios antes de guardar.

### 3.3 Requerimientos funcionales

| Código | Descripción | Criterios de Aceptación |
|---|---|---|
| **RF01: Registro** | Permite registrar cuentas de instructores y aprendices. | Validar campos obligatorios. Correo único. |
| **RF02: Login** | Permite autenticar usuarios y proteger el acceso. | Validar credenciales. Mostrar error si falla. |
| **RF03: Equipos** | Permite al instructor crear grupos de aprendices. | Un aprendiz no puede estar en dos equipos. |
| **RF04: Proyectos** | Permite asignar un proyecto a un equipo. | Todo proyecto debe tener un equipo asociado. |
| **RF05: Tareas Kanban**| Permite crear y listar tareas en columnas. | Mostrar tareas asignadas al proyecto actual. |
| **RF06: Actualización** | Permite mover tareas entre Pendiente/Proceso/Fin. | La interfaz refleja el cambio de inmediato. |
| **RF07: Evidencias** | Permite adjuntar comprobantes al finalizar tareas. | Obligatorio para el estado Finalizado. |
| **RF08: IA - Historias**| Consume API de IA para estructurar requerimientos. | Respuesta en menos de 15 segundos. |
| **RF09: IA - Resumen** | Consume API de IA para reportar progreso semanal. | Analiza únicamente tareas en estado Finalizado. |
| **RF10: Perfil** | Permite actualizar la información del usuario. | Guardar cambios instantáneamente. |

### 3.4 Requerimientos no funcionales
- **RNF 01.1 — Seguridad:** Las contraseñas deben cifrarse en la BD.
- **RNF 02.1 — Disponibilidad:** La plataforma debe estar operativa el 99% del tiempo.
- **RNF 03.1 — Rendimiento:** Cualquier carga de Kanban debe tardar menos de 2s.
- **RNF 04.1 — Interfaz:** La UI debe adaptarse a PC y Laptops (Responsivo).
- **RNF 05.1 — IA Asíncrona:** El uso de IA no debe congelar la página.
- **RNF 06.1 — Privacidad:** Los datos de un equipo son invisibles para otros.

---

## 4. Casos de Uso
| Código | Caso de Uso | Actor |
|---|---|---|
| CU-01 | Gestionar Equipos | Instructor |
| CU-02 | Tablero de Tareas Kanban | Aprendiz |
| CU-03 | Interactuar con IA (Historias) | Aprendiz |
| CU-04 | Interactuar con IA (Resúmenes) | Instructor |

### 4.1 Diagramas de Comportamiento (UML)
*Nota: Las siguientes imágenes representan el modelado del sistema.*

**Figura 1. Diagrama de Casos de Uso**
![Diagrama de Casos de Uso](./imagenes/casos_uso.png)

**Figura 2. Diagrama de Secuencia – Inicio de sesión**
![Diagrama de Secuencia 1](./imagenes/secuencia_login.png)

**Figura 3. Diagrama de Secuencia – Finalizar tarea con evidencia**
![Diagrama de Secuencia 2](./imagenes/secuencia_tarea.png)

**Figura 4. Diagrama de Secuencia – Generación de historia con IA**
![Diagrama de Secuencia 3](./imagenes/secuencia_ia.png)

**Figura 5. Diagrama de Actividades – Ciclo de vida de una tarea**
![Diagrama de Actividades](./imagenes/actividades.png)

**Figura 6. Diagrama de Estados – Tarea Kanban**
![Diagrama de Estados](./imagenes/estados.png)

---

## 5. Modelo de Datos (PostgreSQL)
El sistema cuenta con las siguientes entidades relacionales:
1. **equipos:** id, nombre, fecha_creacion
2. **usuarios:** id, nombre, correo, password, rol, equipo_id
3. **proyectos:** id, titulo, descripcion, equipo_id
4. **tareas:** id, titulo, descripcion, estado, fecha_limite, proyecto_id, aprendiz_id
5. **evidencias:** id, tipo, url_archivo, tarea_id

### 5.1 Diagramas de Estructura (UML)

**Figura 7. Diagrama Entidad-Relación (PostgreSQL)**
![Diagrama ER](./imagenes/diagrama_er.png)

**Figura 8. Diagrama de Clases**
![Diagrama de Clases](./imagenes/diagrama_clases.png)

**Figura 9. Diagrama de Componentes / Arquitectura**
![Diagrama de Arquitectura](./imagenes/arquitectura.png)

---

## 6. Plan de Pruebas Inicial
| ID Prueba | Escenario | Resultado Esperado |
|---|---|---|
| P-01 | Finalizar tarea sin evidencia | Error: "Debe adjuntar evidencia". |
| P-02 | Llamar IA sin texto | Error: "El texto es obligatorio". |
| P-03 | Instructor ve tablero | Carga de tareas correcta. |
| P-04 | Registro de correo duplicado | Fallo en BD controlado. |