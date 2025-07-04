const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
    availability: Boolean,
    genre: String,
    rating: Number,
});

module.exports = mongoose.model('books', bookSchema);