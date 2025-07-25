const Book = require('../models/Book');

// Show all books
exports.showBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.render('index', { books });
    } catch (error) {
        res.status(500).send('Error al obtener los libros');
    }
};

// Create book
exports.createBook = async (req, res) => {
    try {
        const { title, author, year, genre, rating } = req.body;
        const availability = req.body.availability ? true : false;

        const newBook = new Book({ title, author, year, genre, rating, availability });
        await newBook.save();

        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error al crear el libro');
    }
};

// Update book
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, year, genre, rating } = req.body;
        const availability = req.body.availability ? true : false;

        await Book.findByIdAndUpdate(id, {
            title,
            author,
            year,
            genre,
            rating,
            availability
        });

        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error al actualizar el libro');
    }
};

// Delete book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error al eliminar el libro');
    }
};
