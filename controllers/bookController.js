const Book = require('../models/Book');

module.exports.showBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('index', { books });
  } catch (error) {
    res.status(500).send('Error al obtener los libros');
  }
};
