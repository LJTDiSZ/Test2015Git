/*
 * app.js - Simple express server
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
  http    = require( 'http'    ),
  express = require( 'express' ),
  logger  = require( 'morgan'  ),
  bodyParser = require( 'body-parser' ),
  methodOverride = require( 'method-override' ),
  serveStatic = require( 'serve-static' ),
  path = require( 'path' ),

  routes = require( './routes' ),

  app     = express(),
  server  = http.createServer( app );
// ------------- END MODULE SCOPE VARIABLES ---------------

// ------------- BEGIN SERVER CONFIGURATION ---------------
if (app.get('env') === 'development'){
    app.set('showStackError', true);
    app.use(logger('dev'));
} else{
    app.use(logger('combined'));
}
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(serveStatic(path.join(__dirname, 'spa')));

routes.configRoutes(app, server);
// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------
