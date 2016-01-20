var Book = require('mongoose').model('Book');

exports.listBooks = function (req, res) {
  if (req.user) {
    Book.findById(req.user._id, function (err, books) {
      res.status(200).json(books);
    });
  }
};

exports.listAllBooks = function (req, res) {
  Book
    .find({})
    .populate('author')
    .exec(function (err, books) {
      res.status(200).json(books);
    });
};

exports.createBook = function (req, res) {
  if (req.user) {
    var book = new Book(req.body);
    book.author = req.user._id;

    book.save(function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.status(200).json(book);
    });
  } else {
    return res.status(500).json({ error: err });
  }
};

exports.deleteBook = function (req, res) {
  if (req.user && req.params.bookId) {
    Book.remove({ _id: req.params.bookId }, function (err) {
      if (err) {
        res.status(500).json({ error: err });
      }

      res.status(200).json({ "msg": "book " + req.params.bookId + " was deleted" });
    });
  }
};

exports.updateBook = function (req, res) {
  var newBook = req.body;

  console.log('BOOK ID', req.body._id);

  Book.findById(req.body._id, function (err, book) {
    if (err) {
      res.status(500).json({ error: err });
    }

    book.summary = newBook.summary;
    book.title = newBook.title;

    book.save(function (err) {
      if (err) {
        res.status(500).json({ error: err });
      }

      res.status(200).json(book);
    });
  });

  /*res.json({
    "_id": req.params.bookId,
    "title": "Some Cool Book #" + req.params.bookId,
    "scenes": [
      { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 },
      { "sceneId": 124, "title": "Cool Action Scene", "wordCount": 800 },
      { "sceneId": 125, "title": "Flashback", "wordCount": 250 }
    ]
  });*/
};

exports.loadBook = function (req, res) {
  Book
    .findById(req.params.bookId)
    .populate('scenes')
    .exec(function (err, book) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.status(200).json(book);
    });

  /*res.json({
    "_id": req.params.bookId,
    "title": "Some Cool Book #" + req.params.bookId,
    "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "scenes": [
      { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 },
      { "sceneId": 124, "title": "Cool Action Scene", "wordCount": 800 },
      { "sceneId": 125, "title": "Flashback", "wordCount": 250 }
    ]
  });*/
};
