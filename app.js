const express = require('express');
const app = express();
const db = require('./db');

// Configuración del motor de plantillas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Rutas
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Ruta principal: Muestra libros
const bookController = require('./controllers/bookController');
app.get('/', bookController.showBooks);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
