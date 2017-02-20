"use strict";

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/src/config/routes/api');

const app = express();

app.use(logger('dev'));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if ('development' == app.get('env')) {
    app.listen(3000, function () {
        console.log('Server listening on port 3000!');
    });
} else {
    app.listen(8080, function () {
        console.log('Server listening on port 8080!');
    });
}

module.exports = app;
