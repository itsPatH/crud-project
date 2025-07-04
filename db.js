const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/db_books';

mongoose.connect(URL)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = mongoose.connection;