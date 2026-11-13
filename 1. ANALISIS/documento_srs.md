# ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE (SRS)

**PROYECTO:** PLATAFORMA DE SEGUIMIENTO DE PROYECTOS DE APRENDICES  
**APRENDIZ:** Fayber Estyben Díaz Tierradentro  
**SENA:** CENTRO DE LA INDUSTRIA, LA EMPRESA Y LOS SERVICIOS. REGIONAL HUILA  
**PROGRAMA DE FORMACIÓN:** ANÁLISIS Y DESARROLLO DE SOFTWARE (ADSO)  
**FICHA:** 3413988  
**INSTRUCTOR:** Javier Humberto Pinto Diaz

---

## TABLA DE CONTENIDOS

1. Introducción
   1.1 Planteamiento del problema
   1.2 Propósito
   1.3 Justificación
   1.4 Objetivo general
   1.4.1 Objetivos específicos
   1.5 Alcance
   1.6 Personal involucrado
   1.7 Definiciones, acrónimos y abreviaturas
   1.8 Referencias
   1.9 Resumen
2. Descripción general del producto
   2.1 Perspectiva del producto
   2.2 Características de los usuarios
   2.3 Restricciones
   2.4 Suposiciones y dependencias
3. Requisitos específicos
   3.1 Requisitos comunes de las interfaces
   3.2 Historias de usuario
   3.3 Requerimientos funcionales
   3.4 Requerimientos no funcionales
4. Casos de Uso
   4.1 Diagramas de Comportamiento (UML)
5. Modelo de Datos (PostgreSQL)
   5.1 Diagramas de Estructura (UML)
6. Plan de Pruebas Inicial

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

| Rol                            | Nombre                           | Responsabilidad                            |
| ------------------------------ | -------------------------------- | ------------------------------------------ |
| Líder de Proyecto / Full-Stack | Fayber Estyben Díaz Tierradentro | Desarrollo backend, frontend y BD.         |
| Instructor / Product Owner     | Javier Humberto Pinto Diaz       | Validación de requerimientos y evaluación. |

### 1.7 Definiciones, acrónimos y abreviaturas

| Nombre / Acrónimo | Descripción                                   |
| ----------------- | --------------------------------------------- |
| IA                | Inteligencia Artificial.                      |
| API               | Interfaz de Programación de Aplicaciones.     |
| UI / UX           | Interfaz de Usuario / Experiencia de Usuario. |
| SRS               | Especificación de Requisitos de Software.     |
| Kanban            | Sistema visual de gestión de tareas.          |

### 1.8 Referencias

| Título del documento                                | Referencia |
| --------------------------------------------------- | ---------- |
| IEEE 830 — Especificación de requisitos de software | IEEE       |

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

| ID        | Historia de Usuario                                                                               | Prioridad | Criterios de Aceptación                                                        |
| --------- | ------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| **HU-01** | Como instructor quiero registrarme para crear mi cuenta para gestionar fichas y equipos.          | Alta      | Ingresar nombre, correo y contraseña. El sistema valida el formato del correo. |
| **HU-02** | Como aprendiz quiero registrarme para poder pertenecer a un equipo y usar el sistema.             | Alta      | Ingresar datos obligatorios. Correo electrónico no debe existir previamente.   |
| **HU-03** | Como usuario registrado quiero iniciar sesión para acceder a mi panel de control de forma segura. | Alta      | Validar correo y contraseña (encriptada). Redirigir según el rol.              |
| **HU-04** | Como instructor quiero crear equipos para agrupar a los aprendices para el proyecto.              | Alta      | Definir nombre del equipo. Seleccionar aprendices de una lista.                |
| **HU-05** | Como instructor quiero asignar un proyecto para que los aprendices conozcan su objetivo.          | Alta      | Seleccionar un equipo existente. Ingresar título y descripción.                |
| **HU-06** | Como aprendiz quiero crear tareas en el tablero Kanban para llevar control.                       | Alta      | Ingresar título y fecha límite. La tarea se crea en 'Pendiente'.               |
| **HU-07** | Como aprendiz quiero mover tareas entre columnas para reflejar el avance.                         | Alta      | Arrastrar y soltar la tarjeta. Actualizar estado en BD.                        |
| **HU-08** | Como aprendiz quiero adjuntar evidencias para demostrar que finalicé la actividad.                | Alta      | Solicita URL válida. Sin evidencia, no pasa a Finalizado.                      |
| **HU-09** | Como aprendiz quiero usar la IA para redactar requerimientos estructurados.                       | Alta      | Escribir texto base. La IA devuelve Rol, Deseo y Criterios.                    |
| **HU-10** | Como instructor quiero pedir a la IA un resumen del equipo para evaluar su rendimiento.           | Alta      | El sistema envía tareas 'Finalizadas'. La IA genera reporte.                   |
| **HU-11** | Como instructor quiero ver gráficos de progreso para saber qué equipos están atrasados.           | Media     | Mostrar cantidad de tareas pendientes vs finalizadas.                          |
| **HU-12** | Como usuario quiero editar mi perfil para mantener mi información actualizada.                    | Baja      | Permitir cambiar nombre y foto. Validar cambios.                               |

### 3.3 Requerimientos funcionales

| ID       | Descripción                                        | Actores              | Criterios de Aceptación                               | Prioridad |
| -------- | -------------------------------------------------- | -------------------- | ----------------------------------------------------- | --------- |
| **RF01** | Permite registrar cuentas en la plataforma.        | Instructor, Aprendiz | Validar campos obligatorios. Correo único.            | Alta      |
| **RF02** | Permite autenticar usuarios y proteger el acceso.  | Instructor, Aprendiz | Validar credenciales. Mostrar mensaje si falla.       | Alta      |
| **RF03** | Permite al instructor crear grupos de aprendices.  | Instructor           | Un aprendiz no puede pertenecer a dos equipos.        | Alta      |
| **RF04** | Permite asignar un proyecto a un equipo.           | Instructor           | Todo proyecto debe tener un equipo asociado.          | Alta      |
| **RF05** | Permite crear y listar tareas en columnas.         | Aprendiz             | Mostrar las tareas asignadas al proyecto actual.      | Alta      |
| **RF06** | Permite mover tareas entre estados.                | Aprendiz             | La interfaz refleja el cambio de inmediato.           | Alta      |
| **RF07** | Permite adjuntar comprobantes al finalizar tareas. | Aprendiz             | Obligatorio para el estado Finalizado.                | Alta      |
| **RF08** | Consume API de IA para estructurar requerimientos. | Aprendiz             | Respuesta en menos de 15 segundos.                    | Alta      |
| **RF09** | Consume API de IA para reportar progreso.          | Instructor           | La IA analiza únicamente tareas en estado Finalizado. | Alta      |
| **RF10** | Permite actualizar la información del usuario.     | Instructor, Aprendiz | Guardar cambios instantáneamente.                     | Media     |

### 3.4 Requerimientos no funcionales

| ID           | Descripción                | Criterio Técnico                                         |
| ------------ | -------------------------- | -------------------------------------------------------- |
| **RNF 01.1** | Seguridad en contraseñas   | Las contraseñas deben cifrarse en la BD mediante bcrypt. |
| **RNF 02.1** | Disponibilidad del Sistema | La plataforma debe estar operativa el 99% del tiempo.    |
| **RNF 03.1** | Tiempos de Respuesta       | Cualquier carga de                                       |
