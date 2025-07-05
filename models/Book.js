const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: 0
  },
  genre: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  availability: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
