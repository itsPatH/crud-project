const express = require('express');
const app = express();
const db = require('./db');

const bookController = require('./controllers/bookController');
app.get('/', bookController.showBooks);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
