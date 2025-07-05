const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')

//Show all books
router.get('/', bookController.showBooks);

//Create a new book
router.post('/createBook', bookController.createBook);

//Update a book 
router.post('/updateBook/:id', bookController.updateBook);

//Delete a book
router.get('/deleteBook/:id', bookController.deleteBook);

module.exports = router;  