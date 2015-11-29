var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/logout', function (req, res) {
  res.send('logout');
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
