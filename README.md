# 🚀 Fullstack React + Node.js (Express) Lab

Proyecto de pruebas y laboratorio Full Stack diseñado con una arquitectura modular por capas. Utiliza **React (Vite)** en el cliente y un backend monolítico en **Express (Node.js)** con **Prisma v6** y **PostgreSQL**.

---

## 🛠️ Tecnologías Principales

- 💻 **Frontend:** React + Vite
- 🎨 **Estilos:** Tailwind CSS
- ⚙️ **Backend:** Express (Node.js) — _Sustentado en ESM (ES Modules)_
- 🗄️ **ORM:** Prisma v6
- 🐘 **Base de Datos:** PostgreSQL

---

## 💻 Client (Frontend)

Ubicado en la carpeta `client/`. Utiliza **Tailwind CSS** para los estilos.

### Instalación e Inicio

```bash
cd client
npm install
npm run dev
```

---

## 🔷 Configuración de Prisma v6

Prisma actúa como la capa de acceso a datos de la aplicación. Toda la configuración del modelo de datos reside en `prisma/schema.prisma`.

### Comandos y Flujo de Trabajo

1. **Generar el Cliente de Prisma:** Genera los tipos y métodos del ORM basándose en el esquema actual. Se debe ejecutar cada vez que hagas cambios en `schema.prisma`.

```bash
npx prisma generate
```

1. **Migraciones de la Base de Datos:** Aplica los cambios estructurales a PostgreSQL y crea el historial de migraciones en `prisma/migrations/`.

```bash
npx prisma migrate dev --name init

```

1. **Explorador Visual (Prisma Studio):**
   Abre una interfaz web local para inspeccionar y manipular los datos de PostgreSQL.

```bash
npx prisma studio
```

> 📌 **Ubicación de código:** Las consultas de lectura/escritura (`findMany`, `create`, `update`, `delete`) se centralizan en la carpeta `src/services/`.

---

## ⚙️ Servidor Express

- **`src/app.js`**: Punto de entrada que inicializa Express, los middlewares globales (`express.json()`) y monta los routers.
- **`src/routes/`**: Define los endpoints HTTP y sus verbos.

### Iniciar Servidor

```bash
npm run dev
```

_El servidor correrá en `http://localhost:3000` con recarga automática mediante `node --watch`._

---

## 📡 API Endpoints

A continuación se detallan los endpoints disponibles para la entidad `DocumentType` (`/api/document-types`).

| Método     | Endpoint                  | Descripción                          | Body (JSON)               | Respuesta                  |
| ---------- | ------------------------- | ------------------------------------ | ------------------------- | -------------------------- |
| **GET**    | `/api/document-types`     | Obtener todos los tipos de documento | _Ninguno_                 | `200 OK` (Array)           |
| **GET**    | `/api/document-types/:id` | Obtener un tipo de documento por ID  | _Ninguno_                 | `200 OK` / `404 Not Found` |
| **POST**   | `/api/document-types`     | Crear un nuevo tipo de documento     | `{ "name": "Cédula" }`    | `201 Created`              |
| **PUT**    | `/api/document-types/:id` | Actualizar un tipo de documento      | `{ "name": "Pasaporte" }` | `200 OK`                   |
| **DELETE** | `/api/document-types/:id` | Eliminar un tipo de documento        | _Ninguno_                 | `204 No Content`           |
