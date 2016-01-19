var express = require('express'),
    router = express.Router();

var users = require('../controllers/users.js'),
    books = require('../controllers/books.js'),
    scenes = require('../controllers/scenes.js');

router
  .route('/users')
  .post(users.createUser)
  .get(users.listUsers);

router
  .route('/users/:userId')
  .get(users.getUserById);

router
  .route('/books')
  .get(books.listBooks)
  .post(books.createBook);

router
  .route('/books/all')
  .get(books.listAllBooks);

router
  .route('/books/:bookId')
  .post(books.updateBook)
  .get(books.loadBook)
  .delete(books.deleteBook);

router
  .route('/scenes')
  .post(scenes.createScene)
  .delete(scenes.deleteScene);

router
  .route('/scenes/:sceneId')
  .post(scenes.updateScene)
  .get(scenes.readScene);

module.exports = router;
