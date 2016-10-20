var express = require('express');
var ctrl = express.Router();

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  ctrl.render('index', { title: 'Express' });
});

module.exports = ctrl;
