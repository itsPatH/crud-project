require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = mongoose.connection;