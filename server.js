// Server Deps
var express = require('express'),
    app = express()
    bodyParser = require('body-parser');

// Init Deps
app.use(bodyParser.json());

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
