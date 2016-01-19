// Server Deps
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function () {
  var app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // Init Deps
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  // Set up statics and template engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');
  app.use(express.static('./public'));

  // Use PassportJS for authentication
  app.use(passport.initialize());
  app.use(passport.session());

  // Page routes
  var pageRoutes = require('../app/routes/pages');
  app.use('/', pageRoutes);

  // API Routes
  var apiRoutes = require('../app/routes/api');
  app.use('/api/v1', apiRoutes);

  return app;
};
