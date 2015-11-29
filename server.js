// Server Deps
var express = require('express'),
    app = express()
    bodyParser = require('body-parser');

// Init Deps
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Set up statics and template engine
app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));

// Page routes
var pageRoutes = require('./app/routes/pages');
app.use('/', pageRoutes);

// API Routes
var apiRoutes = require('./app/routes/api');
app.use('/api/v1', apiRoutes);

// Run the Server
app.listen(3000, function () {
  console.log('Up! Up! And a WriteAway!');
});
