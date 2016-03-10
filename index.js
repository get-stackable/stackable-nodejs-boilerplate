/**
 * Module dependencies.
 */
var express = require('express');
var Stackable = require('stackable');
var errorHandler = require('errorhandler');
var hbs = require('hbs');
var path = require('path');

/**
 * Create Express server.
 */
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

/**
 * Configs.
 */
var config = require('./config/main');

/**
 * Intialize stackable.
 */
app.use(function(req, res, next) {
    res.stackable = new Stackable(config.stackblePrivateKey);
    next();
});

/**
 * Controllers (route handlers).
 */
var mainController = require('./controllers/main');
var postController = require('./controllers/post');

/**
 * Primary app routes.
 */
app.get('/', mainController.index);
app.get('/post/:id', postController.view);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
