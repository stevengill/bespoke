
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var search = require('./routes/search');
var http = require('http');
var path = require('path');
var home = require('./routes/home');
var handle = require('./routes/handle');
var feedpost = require('./routes/feedpost');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var connection = require('nano')('http://localhost:5984');

app.locals({
  db: connection.use('bespoke'),
  nano: connection
});

app.get('/', routes.index);
app.get('/users', user.collection);
app.get('/home', home.home1);
app.get('/search', search.search1);
app.get('/feed', search.searchrequest);
app.get('/feedpost', feedpost.feedpost1);
app.get('/handle', handle.login);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
