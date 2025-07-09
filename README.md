# Proyecto Final - Backend III

Este proyecto corresponde a la entrega final del curso **Backend III**. Implementa un sistema de adopción de mascotas con generación de datos mock, documentación Swagger, tests funcionales y (próximamente) contenedor Docker.

---

## 🔧 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Swagger para documentación de APIs
- Jest + Supertest para testing funcional
- dotenv para configuración de variables de entorno

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/fmstempler/backend3-preentrega1.git
cd backend3-preentrega1
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con tu URI de Mongo:

```env
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.0uncw.mongodb.net/test
```

### 4. Iniciar el servidor

```bash
npm start
```

El servidor corre en `http://localhost:3000`

---

## 📖 Documentación de la API

La documentación de las rutas está disponible en Swagger:

- Ir a: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## 🧪 Cómo correr los tests

Asegurate de tener la base de datos conectada y correr:

```bash
npm test
```

Se testean los endpoints de:
- `/api/adoptions`
- `/api/users`

---

## 📦 Imagen Docker

Este proyecto se puede ejecutar directamente desde Docker:

**Docker Hub**: [https://hub.docker.com/r/fstempler/backend3-preentregafinal](https://hub.docker.com/r/fstempler/backend3-preentregafinal)

### ▶ Para correrlo:

```bash
docker run -p 3001:3000 -e MONGODB_URI="TU_URI_DE_MONGO" fstempler/backend3-preentregafinal

---

## 📁 Estructura del Proyecto

```
.
├── src
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── mocking/
│   └── tests/
├── .env
├── .gitignore
├── README.md
└── package.json
```

---

## ✍️ Autor

Federico Stempler  
Curso Backend III – Coderhouse