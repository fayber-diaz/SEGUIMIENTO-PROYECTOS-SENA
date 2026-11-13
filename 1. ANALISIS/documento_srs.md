# ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE (SRS)

**PROYECTO:** PLATAFORMA DE SEGUIMIENTO DE PROYECTOS DE APRENDICES  
**APRENDIZ:** Fayber Estyben Díaz Tierradentro  
**SENA:** CENTRO DE LA INDUSTRIA, LA EMPRESA Y LOS SERVICIOS. REGIONAL HUILA  
**PROGRAMA:** ANÁLISIS Y DESARROLLO DE SOFTWARE (ADSO) - FICHA 3413988  
**INSTRUCTOR:** Javier Humberto Pinto Diaz

---

## 1. Introducción

El presente documento describe los requisitos y funcionalidades de la Plataforma Web de Seguimiento de Proyectos de Aprendices, orientada a la gestión, monitoreo y evaluación de proyectos formativos con integración de Inteligencia Artificial para la optimización de procesos ágiles.

### 1.1 Planteamiento del problema

Actualmente, el seguimiento de entregables y avances de los proyectos formativos se realiza mediante herramientas dispersas. Esto dificulta al instructor tener una visión centralizada y en tiempo real del progreso de cada equipo.

### 1.2 Propósito

Desarrollar una plataforma web centralizada para el seguimiento de proyectos formativos. Este documento SRS servirá como guía para identificar, documentar y validar los requisitos.

### 1.3 Objetivos

- **Objetivo General:** Desarrollar un software web para el seguimiento de proyectos de aprendices que permita gestionar equipos, proyectos, tareas y evidencias, integrando IA.
- **Objetivos Específicos:**
  - Diseñar base de datos en PostgreSQL.
  - Desarrollar API RESTful en Node.js.
  - Construir interfaz en React.
  - Integrar servicio de IA generativa.

---

## 2. Descripción general del producto

Es una solución tecnológica web independiente basada en arquitectura cliente-servidor (Frontend en React, Backend en Node.js, BD en PostgreSQL).

### 2.1 Características de los usuarios

- **Instructor (Administrador):** Acceso total. Crea equipos, asigna proyectos y solicita resúmenes a la IA.
- **Aprendiz:** Se asocia a un equipo, crea tareas en Kanban, adjunta evidencias y genera historias de usuario con IA.

---

## 3. Requisitos Específicos

### 3.1 Historias de Usuario

| ID        | Historia de Usuario                                                      | Prioridad |
| --------- | ------------------------------------------------------------------------ | --------- |
| **HU-01** | Como instructor quiero registrarme para gestionar fichas.                | Alta      |
| **HU-02** | Como aprendiz quiero registrarme para usar el sistema.                   | Alta      |
| **HU-03** | Como usuario quiero iniciar sesión con mis credenciales de forma segura. | Alta      |
| **HU-06** | Como aprendiz quiero crear tareas en el tablero Kanban.                  | Alta      |
| **HU-09** | Como aprendiz quiero usar la IA para redactar requerimientos.            | Alta      |

### 3.2 Requerimientos Funcionales (RF)

- **RF01:** Registro de usuarios (Instructor, Aprendiz).
- **RF02:** Inicio de sesión con autenticación (Token JWT).
- **RF05:** Gestión de Tablero Kanban (Listar tareas por columnas).
- **RF08:** Consumo de API de IA para estructurar requerimientos.

### 3.3 Requerimientos No Funcionales (RNF)

- **RNF01:** Las contraseñas deben cifrarse en la BD (bcrypt).
- **RNF03:** Cualquier carga de Kanban debe tardar menos de 2s.
- **RNF04:** La UI debe adaptarse a PC y Laptops (React/Tailwind).

---

## 4. Diagramas UML

_Nota: Las imágenes deben estar guardadas en la carpeta `imagenes/`._

### Diagrama de Casos de Uso

![Casos de Uso](./imagenes/casos_uso.png)

### Diagrama de Base de Datos (PostgreSQL)

![Modelo ER](./imagenes/modelo_er.png)

### Diagrama de Arquitectura

![Arquitectura](./imagenes/arquitectura.png)
