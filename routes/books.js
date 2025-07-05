const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Obtiene todos los libros
 *     responses:
 *       200:
 *         description: Lista de libros obtenida correctamente
 */
router.get('/', bookController.showBooks);

/**
 * @swagger
 * /books/createBook:
 *   post:
 *     summary: Crea un nuevo libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del libro
 *               author:
 *                 type: string
 *                 description: Autor del libro
 *               year:
 *                 type: integer
 *                 description: Año de publicación
 *               genre:
 *                 type: string
 *                 description: Género literario
 *               rating:
 *                 type: number
 *                 description: Puntuación del libro
 *               availability:
 *                 type: boolean
 *                 description: Disponibilidad del libro
 *     responses:
 *       302:
 *         description: Redirecciona a la página principal después de crear el libro
 */
router.post('/createBook', bookController.createBook);

/**
 * @swagger
 * /books/updateBook/{id}:
 *   post:
 *     summary: Actualiza un libro existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *               genre:
 *                 type: string
 *               rating:
 *                 type: number
 *               availability:
 *                 type: boolean
 *     responses:
 *       302:
 *         description: Redirecciona a la página principal después de actualizar el libro
 */
router.post('/updateBook/:id', bookController.updateBook);

/**
 * @swagger
 * /books/deleteBook/{id}:
 *   get:
 *     summary: Elimina un libro por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirecciona a la página principal después de eliminar el libro
 */
router.get('/deleteBook/:id', bookController.deleteBook);

module.exports = router;
