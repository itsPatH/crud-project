require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library Management API',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de libros',
    },
    servers: [
      {
        url: process.env.PORT,
        description: 'Servidor local',
      },
      {
        url: 'https://basic-crud-for-library-management.onrender.com',
        description: 'Servidor en Render',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta donde Swagger buscará los comentarios de documentación
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Configuración del motor de plantillas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Ruta principal: Muestra libros
const bookController = require('./controllers/bookController');
app.get('/', bookController.showBooks);

// Rutas
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
