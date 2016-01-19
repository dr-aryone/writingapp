process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Bring in configurations
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

// Initialize DB, app, PassportJS
var db = mongoose();
var app = express();
var passport = passport();

// Run the Server
app.listen(3000, function () {
  console.log('Up! Up! And a WriteAway!');
});
