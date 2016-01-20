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
  .put(books.updateBook)
  .post(books.createBook);

router
  .route('/books/all')
  .get(books.listAllBooks);

router
  .route('/books/:bookId')
  .get(books.loadBook)
  .delete(books.deleteBook);

router
  .route('/scenes')
  .post(scenes.createScene)
  .put(scenes.updateScene);

router
  .route('/scenes/all')
  .get(scenes.listAllScenes);

router
  .route('/scenes/:sceneId')
  .get(scenes.readScene)
  .delete(scenes.deleteScene);

module.exports = router;
