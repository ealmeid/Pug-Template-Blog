// require all dependencies
var express = require('express');
var logger = require('morgan');
var app = express();

// add logging and static middleware to express
app.use(logger('dev'));

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res, next) {

    try {

        // render the 'index' template, and pass in a few variables
        res.render('index', { title: 'Hey', message: 'Hello there!' });

    } catch (e) { // if there are any errors, send them off the the logger
        next(e);
    }

});

// start up the server
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
