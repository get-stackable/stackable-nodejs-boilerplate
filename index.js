/**
 * Module dependencies.
 */
const express = require('express');
const Stackable = require('stackable');
const errorHandler = require('errorhandler');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const expressStatusMonitor = require('express-status-monitor');
const expressValidator = require('express-validator');

/**
 * Create Express server.
 */
const app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('port', process.env.PORT || 5000);
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(expressStatusMonitor());
app.use(errorHandler());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/**
 * Configs.
 */
const config = require('./config/main');

/**
 * Intialize stackable.
 */
app.use((req, res, next) => {
    res.stackable = new Stackable(config.stackblePrivateKey);
    next();
});

/**
 * Controllers (route handlers).
 */
const mainController = require('./controllers/main');
const postController = require('./controllers/post');

/**
 * Primary app routes.
 */
app.get('/', mainController.index);
app.get('/post/:id', postController.view);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
