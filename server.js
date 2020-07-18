var routes = require('./api/routes/forexRoutes'); 

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  routes(app); 
  app.listen(port);

  console.log('Forex RESTful API server started on: ' + port);