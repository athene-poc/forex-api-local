'use strict';

module.exports = function(app) {
  var forexController = require('../controller/forexController');
  app.route('/forex').get(forexController.list_all);
  app.route('/forex/currency').get(forexController.list_base);
};