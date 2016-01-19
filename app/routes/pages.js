var express = require('express'),
    router = express.Router(),
    passport = require('passport');

var users = require('../controllers/users.js');

router.get('/', users.dashboard);

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (!user) {
      return res.status(401).json({ error: err });
    }

    req.login(user, function (err) {
      if (err) {
        return res.status(500).json({ error: 'Could not log in user' });
      }

      res.status(200).json({ status: 'Login successful', user: user });
    });
  })(req, res, next);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.status(200).json({ status: 'Logout successful' });
});

router.get('/register', function (req, res) {
  res.render('register');
});

router.get('/faq', function (req, res) {
  res.send('faq');
});

router.get('/contact', function (req, res) {
  res.send('contact');
});

module.exports = router;
