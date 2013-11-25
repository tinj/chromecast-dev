/**
 * Module dependencies.
 */

var express     = require('express')
  , url         = require('url')
  , http        = require('http')
  , path        = require('path')

  , routes      = require('./routes')

  , PORT        = process.env.PORT || 3003

  , app         = express();


app.configure(function () {
  // all environments
  app.set('port', PORT);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  app.locals({
    title: 'chromecast-dev'    // default title
  });
});


// Routes

// app.get('/', routes.site.index);
app.get('/', routes.index);
app.get('/rcvr/myreceiver.html', routes.receiver);
// app.get('/chrome', express.static(__dirname + '/views/chrome'));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});