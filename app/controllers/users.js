var User = require('mongoose').model('User'),
    Book = require('mongoose').model('Book'),
    passport = require('passport');

exports.dashboard = function (req, res) {
  res.render('index');
};

exports.createUser = function (req, res, next) {
  if (!req.user) {
    var user = new User(req.body);

    user.provider = 'local';

    user.save(function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      req.login(user, function (err) {
        if (err) {
          return res.status(500).json({ error: err });
        }

        return res.status(200).json({ status: 'Registration successful!', user: user });
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.listUsers = function (req, res) {
  User.find({}, function (err, users) {
    if (err) throw err;
    res.json(users);
  });
};

exports.getUserById = function (req, res) {
  User.findOne({ _id: req.params.userId }, function (err, user) {
    if (err) throw err;

    Book.find({ author: user._id }, function (err, books) {
      var retUser = user.toObject(),
          retBooks = books.map(function (book) {
            book = book.toObject();
            book.bookId = book._id;
            return book;
          });

      retUser.books = retBooks || [];
      res.status(200).json(retUser);
    });
  });
};
