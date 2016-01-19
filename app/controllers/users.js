var User = require('mongoose').model('User'),
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
  console.log(req.params.userId);

  User.findOne({ _id: req.params.userId }, function (err, user) {
    if (err) throw err;
    res.json(user);
  });

  /*res.json({
    "_id": req.params.userId,
    "userName": "JoeSchmoe123",
    "firstName": "Joe",
    "lastName": "Schmoe",
    "books": [
      {
        "bookId": 1234,
        "title": "Some Cool Book",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "bookId": 1235,
        "title": "New American Novel",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "bookId": 1237,
        "title": "Some Cool Book II - Electric Bugaboo",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  });*/
};
